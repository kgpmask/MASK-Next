import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Example from "@/components/Example";
import Carousel from "@/components/Carousel";
import EventTemplate from "@/components/EventTemplate";
import ArtTemplate from "@/components/ArtTemplate";

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
			id: 0,
			url: "/hunt.png",
			title: "Treasure Hunt",
			content: [
				"Lorem Ipsum dor amet consecutive let adjusrgeinst, olutpat torquent netus est augue. Commodo risus vel adipiscing, est convallis nostra. Class fringilla etiam dis tellus suscipit adipiscing fusce curabitur. Proin pellentesque nascetur consectetur convallis, varius quisque. Fermentum ac libero et maximus primis litora massa orci. Fames auctor maecenas",
				"Sagittis himenaeos magna parturient himenaeos dictumst ligula. Amet maximus per diam tempor, egestas ullamcorper. Etiam penatibus urna nulla praesent volutpat hac. Morbi "
			]
		},
		{
			id: 1,
			url: "/hunt.png",
			title: "OCAQ",
			content: [
				"Lorem Ipsum dor amet consecutive let adjusrgeinst, olutpat torquent netus est augue. Commodo risus vel adipiscing, est convallis nostra. Class fringilla etiam dis tellus suscipit adipiscing fusce curabitur. Proin pellentesque nascetur consectetur convallis, varius quisque. Fermentum ac libero et maximus primis litora massa orci. Fames auctor maecenas",
				"Sagittis himenaeos magna parturient himenaeos dictumst ligula. Amet maximus per diam tempor, egestas ullamcorper. Etiam penatibus urna nulla praesent volutpat hac. Morbi "
			]
		},
		{
			id: 2,
			url: "/hunt.png",
			title: "Art Competition",
			content: [
				"Lorem Ipsum dor amet consecutive let adjusrgeinst, olutpat torquent netus est augue. Commodo risus vel adipiscing, est convallis nostra. Class fringilla etiam dis tellus suscipit adipiscing fusce curabitur. Proin pellentesque nascetur consectetur convallis, varius quisque. Fermentum ac libero et maximus primis litora massa orci. Fames auctor maecenas",
				"Sagittis himenaeos magna parturient himenaeos dictumst ligula. Amet maximus per diam tempor, egestas ullamcorper. Etiam penatibus urna nulla praesent volutpat hac. Morbi "
			]
		}
	]
	let artData = [
		{url:'/bidoof.png', artName: "bidoof", artist: "Ankan Chakraborthy"},
		{url:'/bidoof.png', artName: "bidoof", artist: "Ankan Chakraborthy"},
		{url:'/bidoof.png', artName: "bidoof", artist: "Ankan Chakraborthy"},
	]
	return (
		<div>
			<div className={styles["event-carousel"]}>
				<Carousel Template={EventTemplate} showNavigator={true} numPerPage={1} discrete={false} data={eventData} />
			</div>
			<Carousel Template={ArtTemplate} showNavigator={false} numPerPage={3} discrete={false} data={artData} />
		</div>
	);
}
