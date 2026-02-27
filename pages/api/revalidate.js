let lastRevalidateAt = 0;
const RATE_LIMIT_MS = 60 * 1000; // 1 minute

export default async function handler (req, res) {
	const now = Date.now();

	if (now - lastRevalidateAt < RATE_LIMIT_MS) {
		return res.status(429).json({
			message: 'Revalidation already triggered recently. Try again later.'
		});
	}

	lastRevalidateAt = now;

	try {
		await Promise.all([
			res.revalidate('/members'),
			res.revalidate('/art')
		]);

		return res.json({ revalidated: true });
	} catch (err) {
		return res.status(500).json({
			message: 'Revalidation failed'
		});
	}
}
