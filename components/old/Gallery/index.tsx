'use client';

import React, { useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import Image from "next/image";
import { FreeMode, Autoplay } from 'swiper/modules';
import Video from "../Video";


export default function Gallery() {

  const swiper = useRef(null)
  useEffect(() => {
    // if (swiper.current) {
    //   debugger
    // }
  }, [])
  return (
    <div className="flex gap-[14px] overflow-hidden h-[800px]">
      <div className="w-1/3 relative group cursor-pointer overflow-hidden">
        <div className="text-white z-10 leading-[72px] tracking-[2.4px] font-[500] text-[60px] mt-[40px] ml-[80px]">Медиа</div>
        <div className="bg-[#044AFF] mt-[30px] w-fit gap-[30px]  ml-[80px] border rounded-[30px] border-[#7B98FF] z-10 flex justify-between items-center pt-[12px] pb-[12px] pl-[30px] pr-[30px]">
          <span className="text-white text-[18px] font-[600]">Галерея</span>
          <object>
            <svg xmlns="http://www.w3.org/0/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M13.0433 13.7289C13.4575 13.7289 13.7933 13.3931 13.7933 12.9789L13.7933 6.22888C13.7933 5.81467 13.4575 5.47888 13.0433 5.47888C12.6291 5.47888 12.2933 5.81467 12.2933 6.22888L12.2933 12.2289L6.29333 12.2289C5.87912 12.2289 5.54334 12.5647 5.54333 12.9789C5.54333 13.3931 5.87912 13.7289 6.29333 13.7289L13.0433 13.7289ZM0.46967 1.46588L12.513 13.5092L13.5737 12.4486L1.53033 0.405217L0.46967 1.46588Z" fill="white" />
            </svg>
          </object>
          </div>
        <Image src={'/g_1.png'} className=" z-[-1] absolute top-0 left-0 group-hover:scale-150 transition-all duration-1000 w-full h-full object-cover object-center" width={700} height={500} alt="" />
      </div>
      <div className="w-1/3 block">
        <div className="slider">
          <div className="container">
            <div className="slider__thumbs">
              <div className="swiper-wrapper">
                <Swiper ref={swiper} modules={[FreeMode, Autoplay]} direction="vertical" speed={5000} autoplay={{ delay: 100 }} spaceBetween={14} loop={true} autoHeight={false} freeMode={{ sticky: false, enabled: true }} slidesPerView={2} className="slider__thumbs">
                  <SwiperSlide style={{ height: 'auto' }}><Image className="object-cover rounded-[10px] h-[100%] w-full" src="/g_1.png" width={700} height={500} alt={""} /></SwiperSlide>
                  <SwiperSlide><Image className="object-cover rounded-[10px]  object-center w-full h-full" src="/g_2.png" width={700} height={500} alt={""} /></SwiperSlide>
                  <SwiperSlide><Image className="object-cover rounded-[10px]  object-center w-full h-full" src="/g_3.png" width={700} height={500} alt={""} /></SwiperSlide>
                  <SwiperSlide><Image className="object-cover rounded-[10px]  object-center w-full h-full" src="/g_4.png" width={700} height={500} alt={""} /></SwiperSlide>
                  <SwiperSlide><Image className="object-cover rounded-[10px]  object-center w-full h-full" src="/g_5.png" width={700} height={500} alt={""} /></SwiperSlide>
                  <SwiperSlide><Image className="object-cover rounded-[10px]  object-center w-full h-full" src="/g_6.png" width={700} height={500} alt={""} /></SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 block">
        <div className="slider">
          <div className="container">
            <div className="slider__thumbs">
              <div className="swiper-wrapper">
                <Swiper modules={[FreeMode, Autoplay]} direction="vertical" spaceBetween={14} onTouchEnd={(e) => console.log(e)} loop={true} autoHeight={true} speed={5000} autoplay={{ delay: 10 }} freeMode={{ sticky: false, enabled: true }} slidesPerView={3} className="slider__thumbs">

                  <SwiperSlide><Video url={"#"} preview={'/preview.png'} /></SwiperSlide>
                  <SwiperSlide><Image className="object-cover rounded-[10px]  object-center w-full h-full" src="/g_6.png" width={700} height={500} alt={""} /></SwiperSlide>
                  <SwiperSlide><Image className="object-cover rounded-[10px]  object-center w-full h-full" src="/g_5.png" width={700} height={500} alt={""} /></SwiperSlide>
                  <SwiperSlide><Image className="object-cover rounded-[10px]  object-center w-full h-full" src="/g_4.png" width={700} height={500} alt={""} /></SwiperSlide>
                  <SwiperSlide><Image className="object-cover rounded-[10px]  object-center w-full h-full" src="/g_3.png" width={700} height={500} alt={""} /></SwiperSlide>
                  <SwiperSlide><Image className="object-cover rounded-[10px]  object-center w-full h-full" src="/g_2.png" width={700} height={500} alt={""} /></SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}