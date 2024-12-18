import React from "react";
import styles from "@/styles/VideoCard.module.css";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
// light mode only shows the thumbnail and only loads the full player on click
// playing makes sure that is starts playing immediately on click
export default function VideoCard({ url }) {
    return (
        <div className={styles['player-wrapper']}>
            <ReactPlayer
                className={styles['react-player']}
                url={url}
                width='100%'
                height='100%'
                controls={true}
                light={true}
                playing={true}
            />
        </div>
    );
}