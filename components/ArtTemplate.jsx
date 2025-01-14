import React, { Component, useContext, useEffect} from "react";
import style from "@/styles/ArtTemplate.module.css"
import Image from "next/image";

// takes in data objectz
const ArtTemplate = ({ dataObj }) => {
	return (
        <div className={style["element"]}>
            <Image
                src={dataObj.url}
                width={558}
                height={421}
                alt="art image"
                className={style["image"]}
            />
            <div className={style["desc"]}>
                <div className={style["title"]}>{dataObj.artName}</div>
                <div className={style["artist"]}>{dataObj.artist}</div>
            </div>
        </div>
	);
};

export default ArtTemplate;