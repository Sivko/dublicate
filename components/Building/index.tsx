import Image from "next/image";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);


export default function Building() {


  const itemsRef: any = useRef([])
  const image: any = useRef()

  useEffect(() => {
    // const tl = gsap.timeline({
    //   // paused: true, 
    //   scrollTrigger: {
    //     trigger: '#image',
    //     pin: false,
    //     anticipatePin: 1,
    //     scrub: 1,
    //     start: "top top",
    //     // end: "+=",
    //     markers: true
    //   }
    // })
    //   // tl.to('.info', {opacity: 0, y: 100})
    //   // .to(frameContent.current, { opacity: 0 })
    //   // .set(frameContent.current, { display: 'none' })
    //   .set(itemsRef.current, { opacity: 1 })
    //   .to(itemsRef.current, { opacity: 0 })

    // itemsRef.current.forEach((elem: any) => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: elem,
    //       pin: image.current,
    //       scrub: 1,
    //       start: "top top",
    //       markers: true,
    //       end: "+=100%"
    //     }
    //   })
      // tl.set(image.current, {position: 'fixed'})
      // tl.from(elem, {opacity: 0})
      // tl.to(elem, {opacity: 0})
      // const tl = gsap.timeline({
      //   ScrollTrigger: {
      //     trigger: elem,
      //     start: "top top", // к примеру :)
      //     end: "+=100",
      //     markers: true,
      //   }
      // })
      // .to(elem, {opacity: 0.2})
      // gsap.from(elem, {
      //   opacity: 0,
      //   scrollTrigger: {
      //     trigger: elem,
      //     markers: true,
      //     start: 'top 90%',
      //     end: 'bottom 10%',
      //     scrub: true
      //   }
      // })

    // })
  }, [])

  const infoList = [{ title: "Цифровое пространство ", description: "" }, { title: "<p>Незабываемый</p><p>зрительский</p><p>опыт</p>", description: "<p>Новые мероприятия для взрослых</p><p>и детей каждые 2 недели</p>" }, { title: "<p>Эффект полного</p><p>погружения</p> ", description: "" }]

  return (<div className="relative h-screen ">
    <div ref={image}  className="flex justify-center items-center h-screen absolute left-0 top-0 w-full">
      <div className="relative">
        <div className="absolute top-[50%]] left-[70%] rounded-full text-[20px] backdrop-blur-[60px] flex justify-center items-center w-[80px] h-[80px] bg-[#2121218d] text-white opacity-50 hover:opacity-100 transition-all duration-700 cursor-pointer">01</div>
        <div className="absolute top-[80%] left-[5%] rounded-full text-[20px] backdrop-blur-[60px] flex justify-center items-center w-[80px] h-[80px] bg-[#2121218d] text-white opacity-50 hover:opacity-100 transition-all duration-700 cursor-pointer">02</div>
        <div className="absolute top-[0] left-[10%] rounded-full text-[20px] backdrop-blur-[60px] flex justify-center items-center w-[80px] h-[80px] bg-[#2121218d] text-white opacity-50 hover:opacity-100 transition-all duration-700 cursor-pointer">03</div>
        <div className="absolute top-[-5%] left-[90%] rounded-full text-[20px] backdrop-blur-[60px] flex justify-center items-center w-[80px] h-[80px] bg-[#2121218d] text-white opacity-50 hover:opacity-100 transition-all duration-700 cursor-pointer">04</div>
        <Image className="max-w-[1058px]" alt="" src="/fp.png" width={1058} height={680} />
      </div>
    </div>


    {/* <div className="relative">
      {infoList.map((e, index) => (<div key={index} ref={e => itemsRef.current[index] = e} className="flex items-center flex-col h-screen justify-between">
        <div />
        <div className="text-white text-[118px] text-center leading-[112px]">
          {e.title}
        </div>
        <div className="text-white text-[20px] leading-[30px] text-center tracking-[-0.5px] opacity-80 mb-[80px]">
          {e.description}
        </div>
      </div>))}
    </div> */}
  </div >)
}