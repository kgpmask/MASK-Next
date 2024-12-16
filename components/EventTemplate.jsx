import React, { Component, useContext, useEffect} from "react";
import style from "@/styles/EventTemplate.module.css"
import Image from "next/image";

// takes in data objectz
const EventTemplate = ({ dataObj }) => {
	return (
        <main className={style["main"]}>
            <Image
                src={dataObj.url}
                width={558}
                height={421}
                alt="event image"
                className={style["image"]}
            />
            <div className={style["right"]}>
                <div className={style["title"]}>{dataObj.title}</div>
                {dataObj.content.map(text => (
                    <div className={style["para"]} key={text}>{text}</div>
                ))}
                <div className={style["button"]}>Read More &rarr;</div>
            </div>
        </main>
	);
};

export default EventTemplate;