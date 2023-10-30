'use client';

import Image from "next/image";
import { useEffect, useRef } from "react"
import "./style.css"

export default function GalleryItems({ items, text }) {

  const imageTrack = useRef(null)

  useEffect(() => {
    const track = imageTrack.current;
    if (imageTrack) {
      const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

      const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
      }

      const handleOnMove = e => {
        if (track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
          nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        track.dataset.percentage = nextPercentage;

        track.animate({
          transform: `translate(${nextPercentage}%, -50%)`
        }, { duration: 1200, fill: "forwards" });

        for (const image of track.getElementsByClassName("image")) {
          image.animate({
            objectPosition: `${100 + nextPercentage}% center`
          }, { duration: 1200, fill: "forwards" });
        }
      }

      /* -- Had to add extra lines for touch events -- */

      window.onmousedown = e => handleOnDown(e);

      window.ontouchstart = e => handleOnDown(e.touches[0]);

      window.onmouseup = e => handleOnUp(e);

      window.ontouchend = e => handleOnUp(e.touches[0]);

      window.onmousemove = e => handleOnMove(e);

      window.ontouchmove = e => handleOnMove(e.touches[0]);
    }
  }, [])


  return (<>

    <div ref={imageTrack} className="imageTrack mt-[25px]" data-mouse-down-at="0" data-prev-percentage="0">
      <div className="text-white whitespace-nowrap text-[117px] translate-x-[-120px] z-10 w-0 flex items-center">{text}</div>
      <Image width={1052} height={630} alt="" className="image" src="/g_1.png" draggable="false" />
      <Image width={1052} height={630} alt="" className="image" src="/g_2.png" draggable="false" />
      <Image width={1052} height={630} alt="" className="image" src="/g_3.png" draggable="false" />
      <Image width={1052} height={630} alt="" className="image" src="/g_4.png" draggable="false" />
      <Image width={1052} height={630} alt="" className="image" src="/g_5.png" draggable="false" />
      <Image width={1052} height={630} alt="" className="image" src="/g_6.png" draggable="false" />
      <Image width={1052} height={630} alt="" className="image" src="/g_7.png" draggable="false" />
      <Image width={1052} height={630} alt="" className="image" src="/g_8.png" draggable="false" />
    </div>
  </>)
}