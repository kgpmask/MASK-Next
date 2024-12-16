"use client";

import React, { Fragment, useRef, useState } from "react";

export default function SeasonalSliderSection() {
    const [sliderState, setSliderState] = useState(0);
    const sliderRef = useRef(null);
    const [chipOptions1, setChipOptions1] = useState(() => [
        {value:1, label: `Winter`},
        {value:2, label: `Spring`},
        {value:3, label: `Summer`},
        {value:4, label: `Fall`}
    ]);
    const [selectedChipOptions1, setSelectedChipOptions1] = useState([]);

    return (
        <>
            <chipview
            options={chipOptions1}
            setOptions={setChipOptions1}
            values={selectedChipOptions1}
            setvalues={setSelectedChipOptions1}className="">
                {(option) => (
                    <Fragment key={option.index}>
                        {option.isSelected ? (
                            <div onclick={option.toggle}
                            className=""
                            ><span>{option.label}</span>
                            </div>
                        ) : (
                            <div
                            onclick={option.toggle}
                            className="">
                                <span>{option.label}</span>
                            </div>
                        )} 
                    </Fragment>
                )}  
            </chipview>
            <div className="">
                <Button
                onclick={() => {
                    sliderRef?.current?.slidePrev();
                }}
                shape="square"
                className="">
                    <Img src="" width={14} height={26}/>
                </Button>
                <div className="">
                    <div className="">
                        <div className="">
                        <slider 
                    autoplay
                    autoplayInterval={2000}
                    responsive={{ 0: {items:1 }, 551: {items: 1}, 1051: { items: 1 } }}
                    disableDotsControls
                    activeIndex={sliderState}
                    onslideChanged={(e) => {
                        setSliderState(e?.item);               
                    }}
                    ref={sliderRef}
                    items={[...Array(3)].map(() => (
                        <Fragment key={Math.random()}>
                            <div className="">
                                <div className="">
                                    <div>
                                        <Img
                                        src=""
                                        width={328}
                                        height={350}
                                        alt=""
                                        className=""
                                        />
                                        <div className="">
                                            <Heading
                                            size="headings" as="h3" className="" >Bideoof</Heading>
                                            <Text as="p" className=""></Text>
                                        </div>
                                    </div>
                                </div>
                                <Img 
                                src=""
                                width={328}
                                height={350}
                                alt=""
                                className=""
                                />
                            </div>
                        </Fragment>
                    ))}
                    />
                    <Button
                    shape="square"
                    onclick={() => {
                        sliderRef?.current?.sliderNext();
                    }}
                    className="">
                        <Img src="" width={14} height={26}/>
                    </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}