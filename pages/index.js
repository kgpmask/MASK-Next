import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Example from "@/components/Example";
import MemberCard from "@/components/MemberCard";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<>
			<div>
				<Example text={"heelo"} />
				<MemberCard 
				profilePicture={"@/public/next.svg"}
				name={"Manideep Dalli"}
				teams={["nS","w","q"]}
				position={"Associate"}/>
			</div>

			
		</>
	);
}
