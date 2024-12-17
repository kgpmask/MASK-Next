"use client";

import {Button, Img, Text, Heading, Slider, ChipView} from "../OtherComponents";

import React, { Fragment, useRef, useState } from "react";

export default function ArtGallerySection() {
    const [sliderState, setSliderState] = useState(0);
    const sliderRef = useRef(null);
    const [chipOptions, setChipOptions] = useState(() => [
        {value:1, label: `Winter`},
        {value:2, label: `Spring`},
        {value:3, label: `Summer`},
        {value:4, label: `Fall`},
    ]);
    const [selectedChipOptions, setSelectedChipOptions] = useState([]);

    return (
        <>
        <div className="flex flex-col items-center px-14 md:px-5">
            <Heading 
            size="headigmd"
            as="h2"
            className="md-[86px] self-start text-[24px] font-bold text-white-a700 md:ml-0 md:text-[22px]"
            >
                2024
            </Heading>
            <chipView
                options={chipOptions}
                setOptions={setChipOptions}
                values={selectedChipOptions}
                setvalues={setSelectedChipOptions}className="mx-[82px] mt-2 flex w-[88%] flex-wrap gap-x-1 gap-y-2 md:mx-0"
                >
                {(option) => (
                    <Fragment key={option.index}>
                        {option.isSelected ? (
                            <div onclick={option.toggle}
                            className="flex h-[34px] cursor-pointer flex-row items-center whitespace-pre-wrap rounded-[16px] border border-solid border-white-a700_99 bg-gray-900 pl-6 pr-7 text-white-a700_89 sm:px-5"
                            >
                                <span>{option.label}</span>
                            </div>
                        ) : (
                            <div
                            onclick={option.toggle}
                            className="flex h-[34px] cursor-pointer flex-row items-center rounded-[16px]  bg-gray-900 pl-6 pr-7 text-[16px] text-white-a700_89 sm:px-5"
                            >
                                <span>{option.label}</span>
                            </div>
                        )} 
                    </Fragment>
                )}  
            </chipView>
            <div>
                <Button
                onclick={() => {
                    sliderRef?.current?.slidePrev();
                }}
                shape="square"
                className="w-[50px] rotate-[-180deg] px-2.5">
                    <Img src="img_arrow_left.svg" width={14} height={26}
                />
                </Button>
                <div className="mx-auto flex w-full md:self-stretch">
                    <Slider 
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
                            <div className="flex gap-[26px] md:flex-col">
                                <div className="flex-1 md:self-stretch">
                                    <div>
                                        <Img
                                        src=""
                                        width={328}
                                        height={350}
                                        alt=""
                                        className="h-[350px] w-full object-cover md:h-auto"
                                        />
                                        <div className="relative mt-[-72px] flex flex-col items-start bg-black-900_70 px-[18px] py-2.5">
                                            <Heading
                                            size="headings" as="h3" className="text-[20px] font-bold text-white-a700" >Bideoof</Heading>
                                            <Text as="p" className="mb-1.5 text-[14px] font-normal text-gray-200"></Text>
                                        </div>
                                    </div>
                                </div>
                                <Img 
                                src=""
                                width={328}
                                height={350}
                                alt=""
                                className="h-[350px] w-[32%] object-contain md:w-full"
                                />
                                <Img 
                                src=""
                                width={328}
                                height={350}
                                alt=""
                                className="h-[350px] w-[32%] object-contain md:w-full"
                                />
                            </div>
                        </Fragment>
                    ))}
                    />
                    </div>
                    <Button
                    shape="square"
                    onclick={() => {
                        sliderRef?.current?.SliderNext();
                    }}
                    className="">
                        <Img src="img_arrow_right.svg" width={14} height={26}/>
                    </Button>
                </div>
            </div>
        </>
    )
}

