import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	// return <Component {...pageProps} />;
	return (
		<>
		<Navbar/>
		<Footer/>
		</>	
	);
}
