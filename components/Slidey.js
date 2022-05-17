// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


export default function Slidey() {

  function darkNav() {
    let j = document.getElementsByClassName('swiper-slide-active');
    let cl = j[0].classList;
    var n = document.getElementById("main-nav");
    var p = document.getElementById("cont");

    let found = true;
    for (let i = 0; i < cl.length; i++) {
      if (cl[i] == 'dark-nav') {
        found = false;
        n.classList.add("dark-slide");
        n.classList.remove('light-slide');
        p.classList.add('dark');
        p.classList.remove('light');
        break;
      } else {
       
        n.classList.add('light-slide');
        n.classList.remove('dark-slide');
        p.classList.add('light');
        p.classList.remove('dark');
      }
    }

    
  }



  return (

    <Swiper className="w-full h-[800px]"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}

      spaceBetween={50}
      watchSlidesProgress={true}
      slidesPerView={1}
      navigation={false}
      pagination={{ clickable: true, className: 'm-5' }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => darkNav()}
    >

      <SwiperSlide id="slide1" className="light-nav bg-[url('/images/hero-1.png')] bg-cover bg-[center_bottom] bg-no-repeat">
        <div className="w-[1032px] bg-gradient-to-r from-[#101820] absolute h-full !z-0 mix-blend-multiply"></div>
        <div className="w-full bg-gradient-to-b from-[#101820] absolute h-[224px] !z-0 mix-blend-multiply"></div>
        <div className="w-full absolute h-full bg-[url('/images/hero-fill.png')] !z-0 mix-blend-multiply"></div>
        <div className="hero-nav w-full h-[216px] mt-[584px] bg-gradient-to-t from-[#101820] absolute !z-0 mix-blend-multiply"></div>



        <div className="mx-auto flex flex-col max-w-[1120px] lg:flex-row justify-start lg:gap-[160px] mb-14 px-6 xl:px-0 !z-50">
          <div className="lg:w-[672px] lg:h-[434px] mt-[120px] lg:mt-[183px] flex flex-col gap-[20px] !z-50">
            <div id="" className="text-white text-[14px] uppercase leading-[22px] tracking-[2.5px] font-normal"><span className="oh text-[#7D5FFF] font-semibold">O</span> Meet Enfusion</div>
            <div id="" className="text-white text-[40px] md:text-[88px] leading-[48px] md:leading-[96px] lg:w-[672px] lg:h-[192px] tracking-[-0.5px] md:tracking-[-1px] lg:mt-6">See clearly. <br /><span className="text-[#7D5FFF]">Act confidently.</span></div>

            <div id="" className="lg:w-[448px] text-[rgba(255,255,255,0.7)] leading-[26px] tracking-[0.2px] text-[18px]">Enfusion radically simplifies the investment management process by uniting front-, middle-, and back- office functions and services under a single, cloud-native platform built on a shared ‘golden data set’—giving you the freedom to focus on performance.</div>
          </div>

          <div className="flex flex-col gap-5 mt-12 lg:mt-[336px] lg:h-[126px] lg:w-[160px]">
            <svg className="mx-auto backdrop-blur-md rounded-[80px]"



              width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80ZM30 57.3206L60 40L30 22.6795V57.3206Z" fill="white" fillOpacity="0.7" />
            </svg>
            <div className="text-[14px] text-[rgba(255,255,255,0.9)] leading-[22px] tracking-[2.5px] font-normal drop-shadow-[0_0_16px_rgba(0,0,0,0.2)] text-center uppercase">Watch Video</div>
          </div>
        </div>

      </SwiperSlide>
      <SwiperSlide id="slide2" className="bg-white dark-nav">



        <div className="mx-auto flex flex-row gap-8 max-w-[1120px] sm:flex-row justify-between mb-14 px-6 xl:px-0">
          <div className="w-[672px] h-[444px] mt-[118px] lg:mt-[183px] flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div id="" className="text-[#1E1A34] text-[14px] uppercase leading-[22px] tracking-[2.5px] font-semibold"><span className="oh text-[#7D5FFF] font-semibold">O</span> Latest Update</div>
              <div id="" className="text-[#1E1A34] text-[40px] lg:text-[88px] leading-[48px] lg:leading-[96px] tracking-[-0.5] lg:tracking-[-1px] mt-6">Eiusad tempori <br /><span className="text-[#7D5FFF]">ancildu etalig.</span></div>

              <div id="" className="w-[448px] text-[rgba(30,26,52,0.7)] leading-[26px] tracking-[0.2px] text-[18px]">Eorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreeta dolore magna aliqua lorem dolor etalum.</div>

            </div>
            <div className="bg-[#7D5FFF] w-[143px] text-white py-[9px] px-[4] justify-center text-center text-[15px] leading-[22px] tracking-[0.2px] rounded-[40px]">Download Now</div>
          </div>

          <div className="absolute mt-[211px] bg-[url('/images/devices.png')] h-[477px] w-[1044.75px] bg-cover ml-[720px]"></div>

        </div>

      </SwiperSlide>
      <SwiperSlide id="slide3" className="light-nav bg-[url('/images/hero3-mobile.png')] md:bg-[url('/images/bg-flip.png')] bg-cover">
        <div className="mx-auto flex flex-row gap-8 max-w-[1120px] sm:flex-row justify-between mb-14 px-6 xl:px-0">
          <div className="w-[672px] h-[444px] mt-[118px] lg:mt-[183px] flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div id="" className="text-[#1E1A34] flex flex-row gap-4 items-center justify-start text-[14px] uppercase leading-[22px] tracking-[2.5px] font-semibold">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 6H32C34.2092 6 36 7.7908 36 10V34C36 36.2092 34.2092 38 32 38H8C5.7908 38 4 36.2092 4 34V10C4 7.7908 5.7908 6 8 6Z" stroke="#7D5FFF" strokeWidth="2" strokeMiterlimit="8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M28 2V10" stroke="#7D5FFF" strokeWidth="2" strokeMiterlimit="8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 2V10" stroke="#7D5FFF" strokeWidth="2" strokeMiterlimit="8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 14H36" stroke="#7D5FFF" strokeWidth="2" strokeMiterlimit="8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 22H16" stroke="#7D5FFF" strokeWidth="2" strokeMiterlimit="8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M24 22H30" stroke="#7D5FFF" strokeWidth="2" strokeMiterlimit="8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 30H16" stroke="#7D5FFF" strokeWidth="2" strokeMiterlimit="8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M24 30H30" stroke="#7D5FFF" strokeWidth="2" strokeMiterlimit="8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="text-white">Event <span className="text-[rgba(255,255,255,0.4)]">&nbsp;&#47;&nbsp;Mar.17.22</span></div>
              </div>
              <div id="" className="text-white text-[40px] lg:text-[88px] leading-[48px] lg:leading-[96px] tracking-[-0.5] lg:tracking-[-1px] mt-6">Register for our<br /><span className="text-[#7D5FFF]">latest webinar.</span></div>

              <div id="" className="w-[448px] text-[rgba(255,255,255,0.7)] leading-[26px] tracking-[0.2px] text-[18px]">Does your investment management system give you the freedom to focus on generating returns? Discover a modern, efficient approach to investment management systems.</div>

            </div>
            <div className="bg-[#7D5FFF] w-[143px] text-white py-[9px] px-[4] justify-center text-center text-[15px] leading-[22px] tracking-[0.2px] rounded-[40px]">Download Now</div>
          </div>

          <div className="absolute mt-[211px] bg-[url('/images/dots-dark.svg')] h-[477px] w-[1044.75px] bg-cover ml-[720px]"></div>

        </div>
      </SwiperSlide>
    </Swiper>
  );
};