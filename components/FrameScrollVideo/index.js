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

function getCurrentFrame(index) {
  return `/seq2/${index
    .toString()
    .padStart(4, "0")}.png`;
}

const FrameScrollVideo = ({ scrollHeight = "10000", width = "1920", height = "1080", numFrames = "100" }) => {
  const cardRef = useRef(null);
  const canvasRef = useRef(null);
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
    const scrollFraction = window.scrollY / (scrollHeight - window.innerHeight);
    const index = Math.min(
      numFrames - 1,
      Math.ceil(scrollFraction * numFrames)
    );

    if (index <= 0 || index > numFrames) {
      return;
    }

    setFrameIndex(index);
  };

  const renderCanvas = () => {
    const context = canvasRef.current.getContext("2d");
    context.canvas.width = width;
    context.canvas.height = height;

  };

  useEffect(() => {


    gsap.to(cardRef.current, {
      scrollTrigger: {
        trigger: '.lorem',
        yoyo: true,
        scrub: true,
        start: "top 60%",
        end: "bottom 80%",
      },
      padding: "40 42 40 38",
    })

    document.querySelectorAll('.lorem').forEach(e => {
      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: e,
      //     scrub: 1,
      //     yoyo: true,
      //     start: "top top",
      //     end: "+=500"
      //   }
      // });
      // tl.set(e, { opacity: 0, y: 100, duration: 1, }); // Set initial opacity to 0
      // tl.from(e, { opacity: 0, ease: "ease", duration: 7 })
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

      // tl.to(e, { opacity: 0, duration: 0.5 }, 0.5)
      // tl.from(e, { opacity: 1, duration: 0.5 }, 0.5)
    })


    // .to('.lorem', { opacity: 1, duration: 0.5 },
    //   0.5)

    // document.querySelectorAll('.lorem').forEach((e) => {
    //   gsap.to(e, {
    //     scrollTrigger: {
    //       trigger: e,
    //       start: "top 60%",
    //       end: "top 40%",
    //       markers: true,
    //       scrub: true,
    //       yoyo: true,
    //       toggleActions: 'reverse',
    //       complete: (e) => {
    //         console.log(e, "complete")
    //       }

    //     },
    //     opacity: 1,
    //     margin: 0,
    //     scale: 1,
    //     duration: 1
    //   })
    // })


    preloadImages();
    renderCanvas();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

      requestId = requestAnimationFrame(render);
    };

    render();
    console.log(frameIndex);
    // if (frameIndex > 70) {
    //   gsap.to(cardRef.current, {
    //     yoyo: true,
    //     padding: "40 42 40 38"
    //   })
    // }
    // console.log(frameIndex);
    return () => cancelAnimationFrame(requestId);
  }, [frameIndex, images]);

  return (
    <>
      <div ref={cardRef} style={{ minHeight: 13000 }}>
        <canvas alpha="true" className="bg-black" ref={canvasRef} />
        <div className='absolute top-[8000px] w-full'>
          <div className='lorem opacity-0 h-screen z-10 text-[118px] flex justify-center items-center  text-white '>
            <div className='text-center w-full'>
              <p>Эффект полного </p>
              <p>погружения</p>
            </div>
          </div>
          <div className='lorem opacity-0 h-screen z-10 text-[118px] flex justify-center items-center  text-white '>
            <div className='text-center w-full'>
              <p>Незабываемый </p>
              <p>зрительский</p>
              <p>опыт</p>
            </div>
          </div>
          <div className='lorem opacity-0 h-screen z-10 text-[118px] flex justify-center items-center  text-white '>
            <div className='text-center w-full'>
              <p>Цифровое пространство  </p>
            </div>
          </div>
          <div className='lorem opacity-0 h-screen z-10 text-[118px] flex justify-center items-center  text-white relative w-1/2 m-auto'>
              <div className="absolute top-[50%]] left-[70%] rounded-full text-[20px] backdrop-blur-[60px] flex justify-center items-center w-[80px] h-[80px] bg-[#2121218d] text-white hover:opacity-100 transition-all duration-700 cursor-pointer">01</div>
              <div className="absolute top-[80%] left-[5%] rounded-full text-[20px] backdrop-blur-[60px] flex justify-center items-center w-[80px] h-[80px] bg-[#2121218d] text-white hover:opacity-100 transition-all duration-700 cursor-pointer">02</div>
              <div className="absolute top-[0] left-[10%] rounded-full text-[20px] backdrop-blur-[60px] flex justify-center items-center w-[80px] h-[80px] bg-[#2121218d] text-white hover:opacity-100 transition-all duration-700 cursor-pointer">03</div>
              <div className="absolute top-[-5%] left-[90%] rounded-full text-[20px] backdrop-blur-[60px] flex justify-center items-center w-[80px] h-[80px] bg-[#2121218d] text-white hover:opacity-100 transition-all duration-700 cursor-pointer">04</div>
              {/* <Image className="max-w-[1058px]" alt="" src="/fp.png" width={1058} height={680} /> */}
          </div>
        </div>
      </div>

    </>
  );
};


export default FrameScrollVideo;