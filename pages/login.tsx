import { signIn } from 'next-auth/react';

export default function LoginPage () {
	return (
		<>
			<h1>It doesn&apos;t look like this page exists! </h1>
			<button onClick={() => signIn('google')}>
				<span>Sign in</span>
			</button>
		</>
	);
}
