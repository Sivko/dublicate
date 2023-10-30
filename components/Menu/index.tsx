import Link from "next/link";

const links = [{ text: "Пространство", url: "#" }, { text: "Мероприятия", url: "#" }, { text: "Прямой эфир", url: "#" }, { text: "Новости", url: "#" }, { text: "Галерея", url: "#" }, { text: "Контакты", url: "#" }]

export default function Menu() {
  return (<div className="flex gap-[65px]">
    {links.map(((e, index) => (<>
      <Link key={index} className="pt-[10px] pb-[10px] text-white opacity-80 hover:opacity-100 transition-all text-[20px] leading-[24px] tracking-[-0.7px] font-[300]" href={e.url}>{e.text}</Link>
    </>)
    ))}
  </div>)
}