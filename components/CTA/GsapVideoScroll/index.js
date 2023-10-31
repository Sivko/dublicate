'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);




export default function GsapVideoScroll() {
  const canvasRef = useRef();
  const homeRef = useRef();
  console.log("RENDER")

  function sequence_animation() {
    const canvas = document.querySelector('#home>canvas');
    const context = canvas.getContext('2d');
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    window.addEventListener('resize', function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });
  
    function files(index) {
      var data = `woman.jpeg
      woman.jpeg
      woman.jpeg
    `;
      return data.split('\n')[index];
    }
  
    const frameCount = 2;
  
    const images = [];
    const imageSeq = {
      frame: 0,
    };
  
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }
  
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        scrub: true,
        pin: true,
        trigger: '#home',
      },
      onUpdate: render,
    });
  
    images[0].onload = render;
  
    function render() {
      scaleImage(images[imageSeq.frame], context);
    }
  
    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
  }
  
  useEffect(() => {
    if (homeRef.current)
      sequence_animation();
  }, [])

  return (
    <div className="min-h-[100vh] w-full overflow-hidden" ref={homeRef} id="home">
      <canvas className=" max-w-[100vw] max-h-[100vh]" ref={canvasRef} />
    </div>
  )
}

