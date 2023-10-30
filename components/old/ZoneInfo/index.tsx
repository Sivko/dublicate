type Info = {
  title: string;
  list: string[];
  icon: {
    src: string,
    width: number,
    height: number
  }
};

import Image from "next/image";

export default function ZoneInfo(fn: Info) {
  return (<div className="flex flex-col">
    {/* <div className="w-[87px] h-[43px] bg-[#044AFF]" /> */}
    <span className="text-[#044AFF] text-[24px] mb-[23px] font-[600] ">{fn.title}</span>
    <div className="flex flex-col gap-[20px]">
    {fn.list.map((e, index)=>(<span key={index}>{e}</span>))}
    </div>
  </div>)
}
