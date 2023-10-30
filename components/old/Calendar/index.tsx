import Container from "../Container"

export default function Calendar() {
  return (<>
    <div className="bg-[#C0CAFF] rounded-t-[40px] mt-[100px] pt-[40px] pb-[40px]">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex gap-[40px] items-center">
            <h2 className="text-[#262831] text-[60px] leading-[72px] tracking-[2.4px] font-[500]">Программы</h2>
            <p className="text-[18px] font-[400] leading-[21px] text-[#262831]">Мультимедийные тематические шоу о ключевых направлениях развития Москвы</p>
          </div>
          <div className="flex cursor-pointer justify-between items-center rounded-[30px] bg-[#044AFF] pl-[30px] pb-[12px] pr-[30px] pt-[12px] min-w-[205px]">
            <span className="text-[18px] leading-[21px] font-[600] text-white">Календарь</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="12" viewBox="0 0 23 12" fill="none">
              <path d="M22.5298 6.53033C22.8227 6.23744 22.8227 5.76256 22.5298 5.46967L17.7569 0.696699C17.464 0.403806 16.9891 0.403806 16.6962 0.696699C16.4033 0.989593 16.4033 1.46447 16.6962 1.75736L20.9389 6L16.6962 10.2426C16.4033 10.5355 16.4033 11.0104 16.6962 11.3033C16.9891 11.5962 17.464 11.5962 17.7569 11.3033L22.5298 6.53033ZM0.84375 6.75H21.9995V5.25H0.84375V6.75Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className="flex mt-[54px] mb-[61px]">
          <div className="w-1/3 pt-[11.5px] pb-[11.5px] cursor-pointer  text-center border-[#262831] border">Сегодня, 15 ноября</div>
          <div className="w-1/3 pt-[11.5px] pb-[11.5px] cursor-pointer ml-[-1px] mr-[-1px] text-center border-[#262831] border">Завтра, 16 ноября</div>
          <div className="w-1/3 pt-[11.5px] pb-[11.5px] cursor-pointer text-center border-[#262831] border">Послезавтра, 17 ноября</div>
        </div>
        <div className="flex flex-col">
          {
            [{ time: "10:30 - 11:30", programs: [{ title: "Экскурсия", url: "#" }, { title: "Лекторий", url: "#" }] }, { time: "10:30 - 11:30", programs: [{ title: "Экскурсия", url: "#" }, { title: "Лекторий", url: "#" }] }, { time: "10:30 - 11:30", programs: [{ title: "Экскурсия", url: "#" }, { title: "Лекторий", url: "#" }] }].map((e, index) => (
              <div key={index} className="flex border-b border-white items-center pt-[12px] pb-[12px]">
                <div className="min-w-[170px] text-center text-[21px] font-[600] leading-[25px] text-[#262831]">{e.time}</div>
                <div className="flex gap-[6px]">
                  {e.programs.map((m, idx) => (
                    <div className="border cursor-pointer rounded-[30px] text-center pl-[30px] pr-[30px] pt-[7px] pb-[7px] border-[#044AFF]" key={idx}>{m.title}</div>
                  ))}
                </div>
              </div>))
          }
        </div>
      </Container>
    </div>
  </>)
}