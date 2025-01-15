import React, { Component, useEffect, useRef, useState } from "react";
import style from "@/styles/Carousel.module.css"
import Image from "next/image";

// takes in parameters, Template , showNavigator, numPerPage, discrete
const Carousel = ({ Template, showNavigator, numPerPage, discrete, data }) => {
    const [ currentElement, setCurrentElement ] = useState(0)
    const [ sliderWidth, setSliderWidth ] = useState('1000px')
    const sliderRef = useRef(null)
    function moveNext() {
        const itemWidth = sliderRef.current.firstChild.offsetWidth + 16;
        if(currentElement+numPerPage > data.length-1) {
            setCurrentElement(0);
            sliderRef.current.scrollBy({ left: -itemWidth*(data.length-1), behavior: "smooth" })
        }
        else {
            setCurrentElement(currentElement+1);
            sliderRef.current.scrollBy({ left: itemWidth, behavior: "smooth" })
        }
        console.log(currentElement)
    }
    function movePrev() {
        const itemWidth = sliderRef.current.firstChild.offsetWidth + 16;
        if(currentElement <= 0) {
            setCurrentElement(data.length - 1)
            sliderRef.current.scrollBy({ left: itemWidth*(data.length-1), behavior: "smooth" })
        }
        else {
            setCurrentElement(currentElement-1)
            sliderRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" })
        }
        console.log(currentElement)
    }
    function moveHere(targetNum) {
        const itemWidth = sliderRef.current.firstChild.offsetWidth + 16;
        const shiftCount = targetNum - currentElement;
        sliderRef.current.scrollBy({ left: itemWidth*shiftCount, behavior: "smooth" })
        setCurrentElement(targetNum)
    }
    function inheritWidth() {
        // inherits width of parent from child
        if(sliderRef != null && sliderRef.current != null) {
            console.log(sliderRef)
            setSliderWidth((sliderRef.current.firstChild.offsetWidth + 16)*numPerPage-16);
        }
    }
	return (
        <main className={style["main"]}>
            <div className={style["carousel-container"]} >
                <Image
                    src={'/leftarrow.svg'}
                    alt="left arrow"
                    width={30}
                    height={30}
                    className={style["arrow"]}
                    onClick={movePrev}
                />
                <div className={style["slider"]} ref={sliderRef} style={{maxWidth: sliderWidth, width: sliderWidth}}>
                    {data.map(dataObj => (
                        <div style={{height: 'fit-content'}} onLoad={inheritWidth} key={dataObj.id}>
                            <style jsx> {`
                                .element-wrapper {
                                    flex: 0 0 calc((100% - (16px * 2))/${numPerPage});
                                }
                            `}
                            </style>
                            <div className={style["element-wrapper"]} key={dataObj.id}><Template dataObj={dataObj} key={dataObj.id}/></div>
                        </div>
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
                    !(num >= currentElement && num < currentElement+numPerPage) ? 
                    <div className={style["navigator-circle"]} key={num} onClick={() => moveHere(num)}></div> :
                    <div className={style["selected"]} key={num}></div>
                ))}
            </div>}
        </main>
	);
};

export default Carousel;