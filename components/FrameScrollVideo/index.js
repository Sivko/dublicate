'use client';

import React, {
  useState,
  useEffect,
  useRef
} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import './style.css'
import CTA from '../CTA';

function getCurrentFrame(index) {
  return `/seq3/ezgif-frame-${index
    .toString()
    .padStart(3, "0")}.webp`;
}

const FrameScrollVideo = ({ scrollHeight = "10000", width = "1920", height = "1080", numFrames = "61" }) => {
  const cardRef = useRef(null);
  const canvasRef = useRef(null);
  const ctaRef = useRef(null);
  const [images, setImages] = useState([]);
  const [frameIndex, setFrameIndex] = useState(0);

  function preloadImages() {
    for (let i = 1; i <= numFrames; i++) {
      const img = new Image();
      const imgSrc = getCurrentFrame(i);
      img.src = imgSrc;
      setImages((prevImages) => [...prevImages, img]);
    }
  }

  const handleScroll = () => {
    console.log("handleScroll")
    const main = document.querySelector('#main')
    const scrollFraction = main.scrollTop / (scrollHeight - main.offsetHeight);
    const index = Math.min(
      numFrames - 1,
      Math.ceil(scrollFraction * numFrames)
    );

    if (index <= 0 || index > numFrames) {
      return;
    }
    console.log(index, "setFrameIndex")
    // debugger
    if (index > 5) {
      gsap.to(ctaRef.current, {
        opacity: 0,
        duration: 2
      })
    } else {
      gsap.to(ctaRef.current, {
        opacity: 1,
        duration: 2
      })
    }
    setFrameIndex(index);
  };

  const renderCanvas = () => {
    const context = canvasRef.current.getContext("2d");
    context.canvas.width = width;
    context.canvas.height = height;

  };

  useEffect(() => {

    /*Provider */
    gsap.utils.toArray("h2").forEach(element => {
      gsap.to(element, {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "center 70%",
          end: "center 30%",
          markers: true,
          toggleActions: "play reverse play reverse"
        }
      })
    });

    /*EndProvider */

    document.querySelectorAll('.lorem').forEach(e => {

      gsap.to(e, {
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: e,
          markers: true,
          start: "top center",
          end: "top -380px",
          scrub: true
        }
      });

    })


    preloadImages();
    renderCanvas();
    const main = document.querySelector('#main')
    main.addEventListener("scroll", handleScroll);
    return () => main.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || images.length < 1) {
      return;
    }

    const context = canvasRef.current.getContext("2d");
    let requestId;

    // gsap.to('.provider', {
    //   position: 'absolute',
    //   zIndex:3000,
    //   toggleActions: "play none reverse none", 
    //   // top: 0,
    //   // left: 0 ,
    // })
    const render = () => {
      // context.fillStyle = "rgba(255, 255, 255, 1)";
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      context.fillStyle = "rgba(0, 0, 0, 0.3)";
      context.drawImage(images[frameIndex], 0, 0);
      // console.log(images[frameIndex], "frameIndex", frameIndex)

      // requestId = requestAnimationFrame(render);
    };

    render();
    // console.log(frameIndex);
    if (frameIndex > 70) {
      gsap.to('#wrapper', {
        yoyo: true,
        margin: "40 40 40 40",
        borderRadius: '60px',
        // height: "calc(100vh-80px)"
        height: "calc(100vh - 80px)"
      })
      gsap.to('canvas', {
        borderRadius: '0 0 60px 60px',
      })

    } else {
      gsap.to('#wrapper', {
        yoyo: true,
        margin: "0",
        borderRadius: '0',
        height: "100vh"
      })
      gsap.to('canvas', {
        borderRadius: '0 0 0 0',
      })
    }
    // console.log(frameIndex);
    return () => cancelAnimationFrame(requestId);
  }, [frameIndex, images]);

  return (
    // <div ref={cardRef} style={{ minHeight: 13000 }} className='h-full' >
    <div ref={cardRef} style={{ minHeight: 13000 }} className='relative' >
      <div ref={ctaRef} className='fixed top-0 bottom-0 left-0 right-0 opacity-50 text-white z-10 pointer-events-none'>
        <CTA />
      </div>
      {/* <div className='box absolute top-[500px] left-0  bg-red-500 opacity-0  w-[100px] h-[100px]' id="pp1">pp1</div> */}
      <canvas alpha="true" className="bg-black h-[100vh]" ref={canvasRef} />
      {/* <div className='w-full'>
        <div id="frame1" className='lorem h-screen z-10 text-[118px] flex justify-center items-center  text-white '>
          <div className='text-center w-full'>
            <p>Эффект полного </p>
            <p>погружения</p>
          </div>
        </div>
        <div id="frame2" className='lorem h-screen z-10 text-[118px] flex justify-center items-center  text-white '>
          <div className='text-center w-full'>
            <p>Незабываемый </p>
            <p>зрительский</p>
            <p>опыт</p>
          </div>
        </div>
        <div id="frame3" className='lorem h-screen z-10 text-[118px] flex justify-center items-center  text-white '>
          <div className='text-center w-full'>
            <p>Цифровое пространство  </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};


export default FrameScrollVideo;