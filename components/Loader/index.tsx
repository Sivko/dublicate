'use client';

import { useEffect, useState } from "react";

export default function Loader({ loading, setLoading }: { loading: any, setLoading: any }) {


  function getCurrentFrame(index: number) {
    return `/seq2/${index
      .toString()
      .padStart(4, "0")}.png`;
  }

  useEffect(() => {
    // async function lorem() {
    let i = 0;
    while (i < 100) {

      i++;
      let img = new Image();
      console.log(i)
      img.src = getCurrentFrame(i);
      // if (i == 99) {
      img.onload = (e:any) => {
        const lorem = e.currentTarget.src.split('/')  
        lorem[lorem.length-1].replace('.png','')
        setLoading((prev: any)=> Number(lorem[lorem.length-1].replace('.png','')) > prev ? Number(lorem[lorem.length-1].replace('.png','')) : prev)
      }

      // }
    }
    // }
  }, [])

 
  return (<div className="fixed w-full h-screen flex justify-center items-center text-white">
    Загрузка {loading}
  </div>)
}