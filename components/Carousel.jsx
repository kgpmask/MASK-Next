import React, { Component, useEffect, useState } from "react";
import style from "@/styles/Carousel.module.css"
import Image from "next/image";

// takes in parameters, Template , showNavigator, numPerPage, discrete
const Carousel = ({ Template, showNavigator, numPerPage, discrete, data }) => {
    const [ selected, setSelected ] = useState(0);
    function moveNext() {
        setSelected((selected+1)%data.length)
    }
    function movePrev() {
        setSelected(selected => {
            if(selected == 0) return data.length-1
            else return selected-1
        })
    }
    function modifiedSplice(current) {
        let show = [];
        for(let i = current; i < current+numPerPage; i++) {
            show.push(data[i])
        }
        return show
    }
	return (
        <main className={style["main"]}>
            <Image
                src={'/leftarrow.svg'}
                alt="left arrow"
                width={30}
                height={30}
                className={style["arrow"]}
                onClick={movePrev}
            />
            {modifiedSplice(selected).map(cardData => (
                <Template dataObj={cardData} key={cardData}/>
            ))}
            <Image
                src={'/rightarrow.svg'}
                alt="left arrow"
                width={30}
                height={30}
                className={style["arrow"]}
                onClick={moveNext}
            />
        </main>
	);
};

export default Carousel;