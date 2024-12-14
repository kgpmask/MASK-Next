import React, { Component, useState } from "react";
import style from "@/styles/Carousel.module.css"

// takes in parameters, Template , showNavigator, numPerPage, discrete
const Carousel = ({ Template, showNavigator, numPerPage, discrete, data }) => {
    const [ currentCardNum, setCurrentCardNum ] = useState(0);
    function loopedSlice(start, count, arr) {
        let moddedArr = [];
        for(let i = start; i < count+start; i++) {
            moddedArr.push(arr[i%arr.length]);
        }
        return moddedArr;
    }
	return (
        <main className={style["main"]}>
            {loopedSlice(currentCardNum, numPerPage, data).map(cardData => (
                <Template dataObj={cardData} key={cardData}/>
            ))}
        </main>
	);
};

export default Carousel;