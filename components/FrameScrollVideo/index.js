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
  return `/seq2/${index
    .toString()
    .padStart(4, "0")}.png`;
}

const FrameScrollVideo = ({ scrollHeight = "10000", width = "1920", height = "1080", numFrames = "100" }) => {
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
    if (index > 20) {
      gsap.to(ctaRef.current, {
        opacity: 0
      })
    } else {
      gsap.to(ctaRef.current, {
        opacity: 1
      })
    }

    // if (index > 200) gsap.to('#frame1', { opacity: 1, position: 'fixed', zIndex: 1, top: 0, left: 0, duration: 600 })
    // if (index > 300) gsap.to('#frame2', { opacity: 1, position: 'fixed', zIndex: 1, top: 0, left: 0, duration: 600 })
    // if (index > 400) gsap.to('#frame3', { opacity: 1, position: 'fixed', zIndex: 1, top: 0, left: 0, duration: 600 })
    // console.log(index,"indexindexindex");
    setFrameIndex(index);
  };

  const renderCanvas = () => {
    const context = canvasRef.current.getContext("2d");
    context.canvas.width = width;
    context.canvas.height = height;

  };

  useEffect(() => {

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
    <div ref={cardRef} style={{ minHeight: 13000 }} >
      <div ref={ctaRef} className='fixed top-0 bottom-0 left-0 right-0 opacity-50 text-white z-10 pointer-events-none'>
        <CTA />
      </div>
      <canvas alpha="true" className="bg-black h-[100vh]" ref={canvasRef} />
      {/* <div className='absolute top-[800px] w-full'>
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
        <div className='lorem opacity-0 h-screen z-10 text-[118px] flex justify-center items-center  text-white relative w-1/2 m-auto'>
          <div className="absolute top-[50%]] left-[70%] rounded-full text-[20px] backdrop-blur-[60px] flex justify-center items-center w-[80px] h-[80px] bg-[#2121218d] text-white hover:opacity-100 transition-all duration-700 cursor-pointer">01</div>
          <div className="absolute top-[80%] left-[5%] rounded-full text-[20px] backdrop-blur-[60px] flex justify-center items-center w-[80px] h-[80px] bg-[#2121218d] text-white hover:opacity-100 transition-all duration-700 cursor-pointer">02</div>
          <div className="absolute top-[0] left-[10%] rounded-full text-[20px] backdrop-blur-[60px] flex justify-center items-center w-[80px] h-[80px] bg-[#2121218d] text-white hover:opacity-100 transition-all duration-700 cursor-pointer">03</div>
          <div className="absolute top-[-5%] left-[90%] rounded-full text-[20px] backdrop-blur-[60px] flex justify-center items-center w-[80px] h-[80px] bg-[#2121218d] text-white hover:opacity-100 transition-all duration-700 cursor-pointer">04</div>
        </div>
      </div> */}
    </div>
  );
};


export default FrameScrollVideo;