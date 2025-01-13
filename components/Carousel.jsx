import React, { Component, useEffect, useState } from "react";
import style from "@/styles/Carousel.module.css"
import Image from "next/image";

// takes in parameters, Template , showNavigator, numPerPage, discrete
const Carousel = ({ Template, showNavigator, numPerPage, discrete, data }) => {
    const sliderRef = useState(null)
    function moveNext() {
        console.log(sliderRef)
        const itemWidth = sliderRef.current.firstChild.offsetWidth + 16;
        sliderRef.current.scrollBy({ left: itemWidth, behavior: "smooth" })
    }
    function movePrev() {
        const itemWidth = sliderRef.current.firstChild.offsetWidth + 16;
        sliderRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" })
    }
	return (
        <main className={style["main"]}>
            <div className={style["carousel-container"]}>
                <Image
                    src={'/leftarrow.svg'}
                    alt="left arrow"
                    width={30}
                    height={30}
                    className={style["arrow"]}
                    onClick={movePrev}
                />
                <div className={style["slider"]} ref={sliderRef}>
                    {data.map(dataObj => (
                        <div className={style["element-wrapper"]}><Template dataObj={dataObj} /></div>
                    ))}
                </div>
                <Image
                    src={'/rightarrow.svg'}
                    alt="left arrow"
                    width={30}
                    height={30}
                    className={style["arrow"]}
                    onClick={moveNext}
                />
            </div>
            {/* {showNavigator && <div className={style["navigator"]}>
                {Array(data.length).keys().map(num => (
                    num!=selected?<div className={style["navigator-circle"]} key={num}></div>:<div className={style["selected"]} key={num}></div>
                ))}
            </div>} */}
        </main>
	);
};

export default Carousel;