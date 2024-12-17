import React from "react";
import styles from "@/styles/VideoCard.module.css";
import ReactPlayer from 'react-player/youtube';

export default function VideoCard({ url }) {
    return (
        <div className={styles['player-wrapper']}>
            <ReactPlayer
                className={styles['react-player']}
                url={url}
                width='100%'
                height='100%'
                controls={true}
            />
        </div>
    );
}