import React, { Component, useContext, useEffect} from "react";
import style from "@/styles/ArtTemplate.module.css"
import Image from "next/image";

// takes in data objectz
const ArtTemplate = ({ dataObj }) => {
	return (
        <main className={style["main"]}>
            <Image
                src={dataObj.url}
                width={558}
                height={421}
                alt="event image"
                className={style["image"]}
            />
            <div className={style["desc"]}>
                <div className={style["title"]}>{dataObj.artName}</div>
                <div className={style["artist"]}>{dataObj.artist}</div>
            </div>
        </main>
	);
};

export default ArtTemplate;