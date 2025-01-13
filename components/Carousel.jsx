import React, { Component, useEffect, useRef, useState } from "react";
import style from "@/styles/Carousel.module.css"
import Image from "next/image";

// takes in parameters, Template , showNavigator, numPerPage, discrete
const Carousel = ({ Template, showNavigator, numPerPage, discrete, data }) => {
    const [ currentElement, setCurrentElement ] = useState(0)
    const sliderRef = useRef(null)
    function moveNext() {
        setCurrentElement(cur => cur+1);
        const itemWidth = sliderRef.current.firstChild.offsetWidth + 16;
        if(currentElement == data.length-1) {
            setCurrentElement(0);
            sliderRef.current.scrollBy({ left: -itemWidth*(data.length-1), behavior: "smooth" })
        }
        else {
            sliderRef.current.scrollBy({ left: itemWidth, behavior: "smooth" })
        }
    }
    function movePrev() {
        setCurrentElement(cur => cur-1)
        const itemWidth = sliderRef.current.firstChild.offsetWidth + 16;
        if(currentElement <= 0) {
            setCurrentElement(data.length - 1)
            sliderRef.current.scrollBy({ left: itemWidth*(data.length-1), behavior: "smooth" })
        }
        else {
            sliderRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" })
        }
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
            {showNavigator && <div className={style["navigator"]}>
                {Array(data.length).keys().map(num => (
                    num!=currentElement?<div className={style["navigator-circle"]} key={num}></div>:<div className={style["selected"]} key={num}></div>
                ))}
            </div>}
        </main>
	);
};

export default Carousel;