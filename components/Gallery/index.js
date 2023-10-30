'use client';

import { useState } from "react";
import GalleryItems from "./GalleryItems"

export default function Gallery({ images, textImage, videos, textVideo }) {

  const [activeCategory, setActiveCategory] = useState('photo');

  return (<>
    <div className="relative flex justify-start flex-col rounded-[60px] bg-[#000] w-full h-full overflow-hidden pt-[63px] pb-[58px] pl-[69px] pr-[68px]">
      <div className="absolute left-[70px] top-[63px] text-white text-[36px] opacity-50">Галерея</div>
      <div className="flex justify-center mb-[20px] items-center gap-[6px] ">
        <div onClick={()=>setActiveCategory('photo')} style={activeCategory == 'photo' ? {background: '#6D7CFF'} : {}} className="p-[10px] text-[20px] rounded-[73px] min-w-[268px] text-center bg-[rgba(255,255,255,0.20)] text-white cursor-pointer">Фото</div>
        <div onClick={()=>setActiveCategory('video')} style={activeCategory == 'video' ? {background: '#6D7CFF'} : {}} className="p-[10px] text-[20px] rounded-[73px] min-w-[268px] text-center bg-[rgba(255,255,255,0.20)] text-white cursor-pointer">Видео</div>
      
      </div>
      <GalleryItems text={"Яркие моменты"} />
    </div>
  </>)
}