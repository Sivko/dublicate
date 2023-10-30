'use client'

import { useState } from "react"

export default function CategoryCard({ title = "", list = [""], color = {fill: {}, text: {}, hex: "", hover: ""}}) {

  // const [hover, setHover] = useState(false);

  return (<>
    <div className="backdrop-blur-[11px] w-1/3 max-w-[33%] group cursor-pointer bg-[rgba(192,181,241,0.50)] border-[1.5px] border-[rgba(255,255,255,0.20)] rounded-[30px] pl-[31px] pt-[25px] pr-[31px] pb-[25px] transition-all">
      <div className={`flex justify-between items-center text-[color] overflow-hidden gap-[15px]`}>
        <span className={`text-[32px] text-ellipsis overflow-hidden ${color?.text}`}>{title}</span>
        <object className="rounded-[50%] w-[52px] text-right transition-all">
          <svg className={`provider transition-all duration-700 fill-none ${color.hover}`} xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
            <circle cx="24" cy="24.5586" r="23.25" stroke={color.hex} stroke-width="1.5" />
            <path className={`${color.fill} group-hover:fill-[#fff] transition-all duration-700`} d="M35.108 25.0889C35.4009 24.796 35.4009 24.3212 35.108 24.0283L30.335 19.2553C30.0421 18.9624 29.5672 18.9624 29.2743 19.2553C28.9814 19.5482 28.9814 20.0231 29.2743 20.316L33.517 24.5586L29.2743 28.8012C28.9814 29.0941 28.9814 29.569 29.2743 29.8619C29.5672 30.1548 30.0421 30.1548 30.335 29.8619L35.108 25.0889ZM13.4219 25.3086H34.5776V23.8086H13.4219V25.3086Z" />
          </svg>
        </object>
      </div>
      <div className="flex flex-col pt-[3px] gap-[10px]">
        {list.map((e, index) => (<span className="text-[#262831B2] font-[400] text-[18px] leading-[21px]" key={index}>{e}</span>))}
      </div>
    </div>
  </>)
}