import Image from "next/image";

export default function Video({ preview="", url="", style={} }) {

  return (<>
    {preview ? (<div className="relative cursor-pointer group overflow-hidden rounded-[10px] h-full w-full" style={style}>
      <Image src={preview} width={700} height={500} className="w-full group-hover:scale-150 transition-all duration-1000 " alt={""} />
      <Image src={'/play.svg'} width={35} height={35} className="absolute top-0 right-0 left-0 bottom-0 m-auto" alt={""} />
    </div>) : (<></>)}
  </>)
}