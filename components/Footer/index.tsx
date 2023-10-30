import Logo from "@/components/Logo";
import Menu from "@/components/Menu";

export default function Footer() {
  return (
    <footer className="pb-[40px] w-full mt-[-100px] pt-[150px]">
      <div className="flex justify-between items-center">
        <Menu />
        <Logo />
      </div>
      <div className="mt-[200px] text-white text-[216px] opacity-20">Москва</div>

    </footer>
  )
}