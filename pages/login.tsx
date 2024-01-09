import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginPage () {
	const { status } = useSession();
	const isLoggedIn = status === 'authenticated';
	return (
		<>
			<h1> Login page </h1>
			{isLoggedIn ? 
				<button onClick={() => signOut()}>
					<span>Sign out</span>
				</button>
				: 
				<button onClick={() => signIn('google')}>
					<span>Sign in</span>
				</button>
			}
		</>
	);
}
