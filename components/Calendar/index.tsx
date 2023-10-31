import Image from "next/image"

export default function Calendar() {
  return (
    <div className="min-h-[500px] h-screen mt-[6px]">
      <div className="relative flex justify-between flex-col rounded-[60px] w-full h-full overflow-hidden pt-[48px] pb-[58px] pl-[73px]">
        <Image src="/calendar.jpeg" width={1200} height={700} alt="" className="absolute top-0 left-0 w-full h-full object-cover  object-center opacity-50 z-[-1]" />
        <div className="flex gap-[20px] items-center justify-between pr-[67px]">
          <div className="flex gap-[8px] items-center mt-[5px] ">
            <span className="text-white text-[36px] font-[300] mr-[27px] tracking-[0.3px]">Расписание</span>
            <div className="rounded-[30px] leading-[26px] w-[268px] text-[20px] text-center text-white opacity-80 cursor-pointer  hover:opacity-100 bg-[rgba(109,124,255,0.20)] pt-[10px] pl-[10px] pr-[10px] pb-[10px] transition-all">Сегодня</div>
            <div className="rounded-[30px] leading-[26px] w-[268px] text-[20px] text-center text-white opacity-80 cursor-pointer  hover:opacity-100 bg-[rgba(109,124,255,0.20)] pt-[10px] pl-[10px] pr-[10px] pb-[10px] transition-all">Завтра</div>
            <div className="rounded-[30px] leading-[26px] opacity-80 cursor-pointer  hover:opacity-100 bg-[rgba(109,124,255,0.20)] transition-all">

              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                <circle cx="23" cy="23" r="23" fill="#142239" />
                <path d="M17 21L29 21" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M26 16V18" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20 16V18" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <rect x="17" y="17" width="12" height="12" rx="3" stroke="white" />
              </svg>
            </div>
          </div>
          <div className=" flex items-center gap-[30px]">
            <div className="text-white text-[20px]">Добавить +</div>
            <div className="w-[46px] h-[46px] relative">
              <div className="absolute w-full text-center top-0 text-white text-[10px]">окт.</div>
              <div className="absolute w-full text-center bottom-[3px] text-[20px]">27</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                <rect width="46" height="46" rx="12" fill="white" />
                <path d="M0 12C0 5.37258 5.37258 0 12 0H34C40.6274 0 46 5.37258 46 12V13.1H0V12Z" fill="#EF513C" />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative flex item-center">
          <div className="flex w-2/3 flex-col justify-center">
            <div className="relative w-fit mt-[120px]">
              <span className="text-[117px] font-[400] leading-[144px] text-white ">Лекторий</span>
              <div className="absolute top-0 right-[-75px] text-[20px] text-white opacity-50 border border-white leading-[34px] rounded-full p-[8px]">18+</div>
            </div>
            <div className="mt-[20px] flex justify-between items-center">
              <div className=" flex items-center  gap-[20px]">
                <div className="w-[78px] h-[78px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
                    <rect width="78" height="78" rx="30" fill="#EA2E2E" />
                    <path d="M50.2472 54.2C48.2274 54.2 46.8444 53.0343 46.8444 49.4359V48.6554H49.0831V49.4359C49.0831 51.3517 49.5805 51.8788 50.2472 51.8788C50.9237 51.8788 51.3914 51.3517 51.3914 50.4596C51.3914 49.3446 51.2322 48.7263 49.6701 47.5606C47.8294 46.2125 46.9837 44.7731 46.9837 42.9283C46.9837 40.5766 48.1975 39.1676 50.2571 39.1676C51.6899 39.1676 53.5903 39.6238 53.5903 43.4554V44.3474H51.3516V43.4554C51.3516 41.945 50.8839 41.4483 50.2571 41.4483C49.5805 41.4483 49.2224 41.9552 49.2224 42.837C49.2224 43.7493 49.4214 44.4994 50.9934 45.7361C52.9435 47.2667 53.64 48.4729 53.64 50.4596C53.6201 52.4464 52.7246 54.2 50.2472 54.2ZM42.6058 54.2C40.5861 54.2 39.2031 53.2168 39.2031 49.4359V48.6554H41.4417V49.4359C41.4417 51.3517 41.9392 51.8788 42.6058 51.8788C43.2824 51.8788 43.7501 51.3517 43.7501 50.4596C43.7501 49.3446 43.5909 48.7263 42.0288 47.5606C40.1881 46.2125 39.3424 44.7731 39.3424 42.9283C39.3424 40.5766 40.5562 39.1676 42.6158 39.1676C44.0485 39.1676 45.9489 39.6238 45.9489 43.4554V44.3474H43.7103V43.4554C43.7103 41.945 43.2426 41.4483 42.6158 41.4483C41.9392 41.4483 41.581 41.9552 41.581 42.837C41.581 43.7493 41.78 44.4994 43.3521 45.7361C45.3022 47.2667 45.9987 48.4729 45.9987 50.4596C45.9887 52.4464 45.0933 54.2 42.6058 54.2ZM50.2472 38.0324C48.2274 38.0324 46.8444 36.8667 46.8444 33.2682V32.4877H49.0831V33.2682C49.0831 35.184 49.5805 35.7111 50.2472 35.7111C50.9237 35.7111 51.3914 35.184 51.3914 34.292C51.3914 33.177 51.2322 32.5587 49.6701 31.393C47.8294 30.0448 46.9837 28.6055 46.9837 26.7606C46.9837 24.409 48.1975 23 50.2571 23C51.6899 23 53.5903 23.4561 53.5903 27.2877V28.1797H51.3516V27.2877C51.3516 25.7774 50.8839 25.2807 50.2571 25.2807C49.5805 25.2807 49.2224 25.7875 49.2224 26.6694C49.2224 27.5817 49.4214 28.3318 50.9934 29.5684C52.9435 31.099 53.64 32.3053 53.64 34.292C53.64 36.2788 52.7246 38.0324 50.2472 38.0324ZM42.6058 38.0324C40.5861 38.0324 39.2031 37.0491 39.2031 33.2682V32.4877H41.4417V33.2682C41.4417 35.184 41.9392 35.7111 42.6058 35.7111C43.2824 35.7111 43.7501 35.184 43.7501 34.292C43.7501 33.177 43.5909 32.5587 42.0288 31.393C40.1881 30.0448 39.3424 28.6055 39.3424 26.7606C39.3424 24.409 40.5562 23 42.6158 23C44.0485 23 45.9489 23.4561 45.9489 27.2877V28.1797H43.7103V27.2877C43.7103 25.7774 43.2426 25.2807 42.6158 25.2807C41.9392 25.2807 41.581 25.7875 41.581 26.6694C41.581 27.5817 41.78 28.3318 43.3521 29.5684C45.3022 31.099 45.9987 32.3053 45.9987 34.292C45.9987 36.2788 45.0933 38.0324 42.6058 38.0324ZM26.2387 48.6554H26.6864C27.6714 48.6554 28.1689 48.1485 28.1689 45.8273V44.4994C28.1689 42.168 27.6714 41.6713 26.6864 41.6713H26.2387V48.6554ZM26.2387 53.977H24V39.4008H26.6864C29.6017 39.4008 30.4076 41.0936 30.4076 44.2866V46.0706C30.4076 49.2635 29.6017 50.9563 26.6864 50.9563H26.2387V53.977ZM26.6864 30.207H26.2387V25.5037H26.6864C27.6913 25.5037 28.1689 25.8483 28.1689 27.4398V28.2608C28.159 29.8624 27.6913 30.207 26.6864 30.207ZM30.8255 37.7992L29.1042 31.7275C29.93 31.0179 30.4076 29.8522 30.4076 28.423V27.2776C30.4076 24.6117 29.2435 23.2129 26.6864 23.2129H24V37.7992H26.2387V32.4877H26.5272C26.6367 32.4877 26.7959 32.4877 27.0446 32.4674L28.3878 37.7992H30.8255ZM33.3825 48.6554L34.5267 41.6713H34.7058L35.85 48.6554H33.3825ZM36.6958 53.977H38.9344L36.447 39.4008H32.7756L30.2683 53.977H32.5069L33.0243 50.9462H36.2082L36.6958 53.977ZM34.8352 38.0324C32.0791 38.0324 31.5617 35.9138 31.5617 33.329V23.223H33.8899V33.5318C33.8899 35.3361 34.2083 35.7415 34.8352 35.7415C35.462 35.7415 35.7804 35.3259 35.7804 33.5318V23.223H38.1086V33.329C38.1086 35.9037 37.5912 38.0324 34.8352 38.0324Z" fill="white" />
                  </svg>
                </div>
                <div className="text-white text-[20px]">Регистрация</div>
              </div>

            </div>
          </div>
          <div className="flex flex-col ml-[-170px]">
            <div className="flex gap-[19px] items-center mt-[25px] ml-[10px]">
              <div className="rounded-full bg-[#000] p-[62px] leading-[24px] font-[100] text-[45px] text-white">+</div>
              <div className="text-[20px] text-white font-[400]">Подробнее</div>
            </div>
            <div className="text-white mt-[110px] pr-[50px] text-[20px] tracking-[-0.5px] font-[400] leading-[30px] opacity-50">
              <div className="pt-[30px] ml-[155px]">
                <p>Краткое описание мероприятия краткое описание</p>
                <p>мероприятия краткое описание мероприятия</p>
                <p> краткое описание мероприятия</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center gap-[20px] w-110%">
          <div className="flex flex-col">
            <span className="pl-[40px] tracking-[-0.5px] pb-[20px] text-white text-[20px]" >09:30 - 10:30</span>
            <div className="pt-[40px] pb-[40px] pl-[40px] flex gap-[12px] backdrop-blur-[25px] items-center pr-[200px] rounded-[20px] border border-[#fff]">
              <div className="h-[14px] w-[14px] bg-[#f3f3f3] rounded-full" />
              <span className=" text-white font-[400] leading-[19px] tracking-[-0.5px] text-[20px]">TED</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="pl-[40px] tracking-[-0.5px] pb-[20px] text-white text-[20px]" >10:30 - 11:30</span>
            <div className="pt-[40px] pb-[40px] pl-[40px] flex gap-[12px] backdrop-blur-[25px] items-center pr-[200px] rounded-[20px] border border-[#fff]">
              <div className="h-[14px] w-[14px] bg-[#f3f3f3] rounded-full" />
              <span className=" text-white font-[400] leading-[19px] tracking-[-0.5px] text-[20px]">Лекторий</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="pl-[40px] tracking-[-0.5px] pb-[20px] text-white text-[20px]" >9:30 - 10:30</span>
            <div className="pt-[40px] pb-[40px] pl-[40px] flex gap-[12px] backdrop-blur-[25px] items-center pr-[200px] rounded-[20px] border border-[#fff]">
              <div className="h-[14px] w-[14px] bg-[#f3f3f3] rounded-full" />
              <span className=" text-white font-[400] leading-[19px] tracking-[-0.5px] text-[20px]">Дискуссия</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="pl-[40px] tracking-[-0.5px] pb-[20px] text-white text-[20px]" >9:30 - 10:30</span>
            <div className="pt-[40px] pb-[40px] pl-[40px] flex gap-[12px] backdrop-blur-[25px] items-center pr-[200px] rounded-[20px] border border-[#fff]">
              <div className="h-[14px] w-[14px] bg-[#f3f3f3] rounded-full" />
              <span className=" text-white font-[400] leading-[19px] tracking-[-0.5px] text-[20px]">Квест</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="pl-[40px] tracking-[-0.5px] pb-[20px] text-white text-[20px]" >9:30 - 10:30</span>
            <div className="pt-[40px] pb-[40px] pl-[40px] flex gap-[12px] backdrop-blur-[25px] items-center pr-[200px] rounded-[20px] border border-[#fff]">
              <div className="h-[14px] w-[14px] bg-[#f3f3f3] rounded-full" />
              <span className=" text-white font-[400] leading-[19px] tracking-[-0.5px] text-[20px]">Презентация</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="pl-[40px] tracking-[-0.5px] pb-[20px] text-white text-[20px]" >9:30 - 10:30</span>
            <div className="pt-[40px] pb-[40px] pl-[40px] flex gap-[12px] backdrop-blur-[25px] items-center pr-[200px] rounded-[20px] border border-[#fff]">
              <div className="h-[14px] w-[14px] bg-[#f3f3f3] rounded-full" />
              <span className=" text-white font-[400] leading-[19px] tracking-[-0.5px] text-[20px]">Квест</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="pl-[40px] tracking-[-0.5px] pb-[20px] text-white text-[20px]" >9:30 - 10:30</span>
            <div className="pt-[40px] pb-[40px] pl-[40px] flex gap-[12px] backdrop-blur-[25px] items-center pr-[200px] rounded-[20px] border border-[#fff]">
              <div className="h-[14px] w-[14px] bg-[#f3f3f3] rounded-full" />
              <span className=" text-white font-[400] leading-[19px] tracking-[-0.5px] text-[20px]">Квест</span>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}