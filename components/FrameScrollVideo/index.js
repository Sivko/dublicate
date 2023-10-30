'use client';

import React, {
  useState,
  useEffect,
  useRef
} from 'react';

import './style.css'

function getCurrentFrame(index) {
  return `/seq2/${index
    .toString()
    .padStart(4, "0")}.png`;
}

const FrameScrollVideo = ({ scrollHeight = "10000", width = "1920", height = "1080", numFrames = "100" }) => {
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
      context.fillStyle="rgba(0, 0, 0, 0.3)";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);


      Источник: https://flowersglamour.ru/tehnika/kak-nastroit-prozracnyi-fon-v-kanve
      // context.fill()

      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      context.drawImage(images[frameIndex], 0, 0);

      requestId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(requestId);
  }, [frameIndex, images]);

  return (
    <div style={{ minHeight: 10000 }}>
      <canvas alpha="true" className="bg-black" ref={canvasRef} />
    </div>
  );
};


export default FrameScrollVideo;