import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Example from "@/components/Example";
import Carousel from "@/components/Carousel";
import EventTemplate from "@/components/EventTemplate";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function Home() {
	let eventData = [
		{
			url: "/hunt.png",
			title: "Treasure Hunt",
			content: [
				"Lorem Ipsum dor amet consecutive let adjusrgeinst, olutpat torquent netus est augue. Commodo risus vel adipiscing, est convallis nostra. Class fringilla etiam dis tellus suscipit adipiscing fusce curabitur. Proin pellentesque nascetur consectetur convallis, varius quisque. Fermentum ac libero et maximus primis litora massa orci. Fames auctor maecenas",
				"Sagittis himenaeos magna parturient himenaeos dictumst ligula. Amet maximus per diam tempor, egestas ullamcorper. Etiam penatibus urna nulla praesent volutpat hac. Morbi "
			]
		}
	]
	return (
		<div>
			Hello
			<Carousel Template={EventTemplate} showNavigator={false} numPerPage={1} discrete={false} data={eventData}></Carousel>
		</div>
	);
}
