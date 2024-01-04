import { signIn } from 'next-auth/react';

export default function LoginPage () {
	return (
		<>
			<h1> Login page </h1>
			<button onClick={() => signIn('google')}>
				<span>Sign in</span>
			</button>
		</>
	);
}
