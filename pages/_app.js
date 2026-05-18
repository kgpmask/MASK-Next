import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

export default function App ({ Component, pageProps }) {
	return (
		<div className="container">
			<div style={{ zIndex: 9000 }}>
				<Navbar />
			</div>
			<main className="mainContent">
				<Component {...pageProps} />
			</main>
			<Footer />
		</div>
	);
}
