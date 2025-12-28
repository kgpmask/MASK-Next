const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const rateLimitMap = new Map();

export default async function handler (req, res) {
	const ip =
		req.headers['x-forwarded-for']?.split(',')[0] ||
		req.socket.remoteAddress;

	const now = Date.now();
	const lastHit = rateLimitMap.get(ip);

	if (lastHit && now - lastHit < RATE_LIMIT_WINDOW) {
		return res.status(429).json({
			message: 'Too many requests. Try again in a minute.'
		});
	}

	rateLimitMap.set(ip, now);

	try {
		await Promise.all([
			res.revalidate('/members'),
			res.revalidate('/art')
		]);

		return res.json({ revalidated: true });
	} catch (err) {
		return res.status(500).json({ message: 'Revalidation failed' });
	}
}
