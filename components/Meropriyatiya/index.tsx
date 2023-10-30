'use client';

import { text } from "stream/consumers"
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import { useEffect, useRef, useState } from "react";
import "./style.css"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


export default function Activity({ title, text, tags }: {
  title: string,
  text?: string
  tags: { title: string, url: string }[],
}) {


  const elements: any = useRef([]);

  useEffect(() => {
    const sections = elements.current;

    const scrolling = {
      enabled: true,
      events: "scroll,wheel,touchmove,pointermove".split(","),
      prevent: (e: any) => e.preventDefault(),
      disable() {
        if (scrolling.enabled) {
          scrolling.enabled = false;
          window.addEventListener("scroll", gsap.ticker.tick, { passive: true });
          scrolling.events.forEach((e, i) => (i ? document : window).addEventListener(e, scrolling.prevent, { passive: false }));
        }
      },
      enable() {
        if (!scrolling.enabled) {
          scrolling.enabled = true;
          window.removeEventListener("scroll", gsap.ticker.tick);
          scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, scrolling.prevent));
        }
      }
    };

    function goToSection(section: any, anim?: any, i?: number) {
      console.log(section.classList[section.classList.length-1],"SEEC")
      if (scrolling.enabled) { // skip if a scroll tween is in progress
        scrolling.disable();
        gsap.to(window, {
          scrollTo: { y: section, autoKill: false },
          onComplete: scrolling.enable,
          duration: 1
        });

        anim && anim.restart();
      }
    }

    sections.forEach((section: any, i: number) => {
      const intoAnim = gsap.from(section.querySelector(".meroprInfo"), { yPercent: 50, duration: 1, paused: true });

      ScrollTrigger.create({
        trigger: section,
        start: "top bottom-=1",
        end: "bottom top+=1",
        onEnter: () => goToSection(section, intoAnim),
        onEnterBack: () => goToSection(section)
      });

    });

  }, []);

  const arr = [1, 2, 3, 4];

  return (
    <div id="wrapper" className="relative">
      <div className="text-white text-[30px] leading-[39px] text-center top-[5vh] bottom-[500px] sticky">{title}</div>

      {arr.map((elem, index) => (<div key={index} className={`flex flex-col justify-center relative min-h-screen pt-[88px] pb-[84px] ${index}`} ref={e => elements.current[index] = e}>
        <div className={`meroprInfo text-[140px] font-[400] text-center z-10 left-0 right-0 bottom-0 top-0 text-white`}>{text}</div>
        <div className="absolute max-w-[600px] flex justify-center items-center m-auto left-0 right-0 top-0 bottom-0">
          Lorem text
        </div>
      </div>
      ))}
      <div className="flex justify-center items-center gap-[4px] bottom-[5vh] sticky">{
        tags.map((e, index) => (<div key={index} className="pt-[10px] pb-[10px] pl-[20px] pr-[20px] bg-[rgba(109,124,255,0.20)] text-white text-[20px] font-[400] rounded-[74px] opacity-90 hover:opacity-100 transition-all cursor-pointer">{e.title}</div>))
      }</div>
    </div>
  )
}