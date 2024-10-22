import { Card, Rate } from "antd"
import React from "react"
import { useState, useEffect } from "react"
import 'swiper/css';
//import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react"
import { useRef } from "react";


const Review = () => {

    const swiperRef = useRef(null);


    const images = [
        "/unnamed-k.png",
        "reviewer-image.png",
        "/reviewer-image-2.png",
        "/reviewer-image-4.png",

    ]
    const name = [
        "Ram",
        "Lakhan",
        "Bharat",
        "Shatrugan"
    ]

    const time = [
        "April 5 2024, 11:10AM",
        "June 6 2022, 12:10PM",
        "July 7 2022, 1:10AM",
        "December 9 2024, 11:40AM",

    ]
    const rate = [
        5, 5, 4, 5
    ]
    const paragraph = [
        "Recently purchased luminous inverter and battery from this store overall experience was great. This store got a large variety of branded products suitable to the customers and owner of the shop Mr Gajendra has good knowledge of recommending perfect device according to customer’s requirements, also the price is very competitive what he offers to the customers, people won’t get it by other stores in the market. I am quite happy with the purchase from this store. I can definitely recommend this store go for it",
        "Recently purchased got a large variety of branded products suitable to the customers and owner of the shop Mr Gajendra has good knowledge of recommending perfect device according to customer’s requirements, also the price is very competitive what he offers to the customers, people won’t get it by other stores in the market. I am quite happy with the purchase from this store. I can definitely recommend this store go for it",
        "Recently purchased luminous inverter and battery from this store overall experience was great. This store got a large variety of branded products suitable to the customers and owner of the shop Mr Gajendra has good knowledge of recommending perfect device according to customer’s requirements, also the price is very competitive what he offers to the customers, people won’t get it by other stores in the market. I am quite happy with the purchase from this store. I can definitely recommend this store go for it",
        "Recently purchased, people won’t get it by other stores in the market. I am quite happy with the purchase from this store. I can definitely recommend this store go for it",

    ]
    return (
        <div className="h-[700px] w-[70%] mx-auto flex justify-center review relative">
            <button onClick={()=>{swiperRef.current.slidePrev()}} className="w-[35px] h-[35px] hover:bg-[#ff7637] text-white absolute transition-all bg-[#000000] flex items-center justify-center left-[-65px] top-[25%]"><img src="/swiperLefticon.png" alt="swiper left" /></button>
			<button onClick={()=>{swiperRef.current.slideNext()}} className="w-[35px] h-[35px] hover:bg-[#ff7637] text-white absolute transition-all  bg-[#000000] flex items-center justify-center right-[-35px] top-[25%]"><img src="/swiperRighticon.png" alt="swiper right" /></button>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                autoplay={{
                    delay: 3000, // Delay between slides (3000ms = 3 seconds)
                    disableOnInteraction: false, // Continue autoplay even after user interaction
                }}
                onAutoplay={1}
                onSwiper={(swiper)=>{swiperRef.current=swiper}}
                loop={true}
                slidesPerView={3}
                grabCursor={true}
                className="flex justify-center items-center h-[500px]  "
            >
                {[1, 2, 3, 4].map((item, index) => (
                    <SwiperSlide>
                        <Card className="h-[427px] w-[400px] border-[10px] border-white border-opacity-100 bg-[#ffffff] border-solid shadow-md" style={{padding: '0px'}}>
                            <div className=" ">
                                <div className="flex gap-4 mt-2 ">
                                    <figure key={index} className="h-[60px] w-[60px] rounded-full object-cover pl-2">
                                        <img src={images[index]} alt={`Slide ${index + 1}`} />
                                    </figure>

                                    <div className="flex flex-col gap-[1px]">
                                        <div>
                                            <p key={index} className="font-[700] text-[15px]">{name[index]}</p>
                                        </div>

                                        <div>
                                            <p key={index}>{time[index]}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 pl-4 ">
                                    <Rate disabled value={rate[index]} className="text-orange-600" />
                                </div>
                                <div>
                                    <p className="text-[16px] h-[230px] font-[400] leading-[34px] overflow-y-auto  scrollBar  " key={index}>{paragraph[index]}</p>
                                </div>
                                <div className="flex gap-2 mt-4  pl-4">
                                    <figure className="w-[25px]">
                                        <img src="/google-logo.png" />
                                    </figure>
                                    <p className="font-[300] leading-[20px] text-[18px]">Review on Google</p>

                                </div>
                            </div>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )

}

export default Review;
