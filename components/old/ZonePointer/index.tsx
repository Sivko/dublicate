export default function ZonePointer({top=0, left=0}) {
  return (<>
    <div style={{top, left}} className={`absolute cursor-pointer group z-10 flex items-center justify-center hover:drop-shadow-[0_0px_15px_#044AFF] transition-all duration-500`}>
      <div className="m-auto absolute w-[34px] h-[34px] rounded-full border border-white group-hover:w-[40px] group-hover:h-[40px] group-hover:border-[#044AFF] transition-all duration-500"></div>
      <div className="bg-white border border-[#fff] w-[26px] h-[26px] rounded-full group-hover:border-[#044AFF] transition-all duration-500"></div>
    </div>
  </>)
}