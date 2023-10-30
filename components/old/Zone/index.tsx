import Image from "next/image";

export default function Zone({title="", img="", text=""}) {
  return (<div className="flex flex-col">
    {img && <Image src={img} width={45} height={45} alt="" className="mb-[10px] invert" />}
    <span className="text-[#044AFF80] text-[24px] font-[600] leading-[29px] mb-[20px]">{title}</span>
    <span className="text-black opacity-[0.6]">{text}</span>
  </div>)
}