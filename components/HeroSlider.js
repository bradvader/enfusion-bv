/* This example requires Tailwind CSS v2.0+ */


// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   slidersPerView: 'auto',

//   loop: true,
// spaceBetween:0,
// effect: 'fade',
// fadeEffect: {
//   crossFade: true
// },
//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },


//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });
var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  speed: 1000,
  autoplay: false,
  effect: 'fade',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 200,
      modifier: 1,
      slideShadows: false,
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

});

const navigation = [
  { name: 'For Fund Launches', href: '#' },
  { name: 'Clients', href: '#' },
  { name: 'A', href: '#' },
  { name: 'Talk to us', href: '#' },
];

/*OLD STUFF*/
/*  
        */

export default function HeroSlider() {
  return (
    // <div className="w-full h-[800px]">
    //   <div className="swiper w-full">

    //     <div className="swiper-wrapper">

    //       <div className="swiper-slide bg-[url('/images/hero-1.png')] bg-cover">
    //         <div className="w-[1032px] bg-gradient-to-r from-[#101820] absolute h-full -z-10 mix-blend-multiply"></div>
    //         <div className="w-full bg-gradient-to-b from-[#101820] absolute h-[224px] -z-10 mix-blend-multiply"></div>
    //         <div className="w-full absolute h-full bg-[url('/images/hero-fill.png')] -z-20 mix-blend-multiply"></div>
    //         <div className="hero-nav w-full h-[216px] mt-[584px] bg-gradient-to-t from-[#101820] absolute z-0 mix-blend-multiply"></div>

    //         <div className="flex-row my-[183px] h-[434px] ml-40 w-[672px] z-40">

    //           <div className="frame-99-text1 text-white uppercase tracking-[2.5px] text-[14px]"><span className="text-[#7D5FFF] font-bold">O</span> Meet Enfusion</div>
    //           <div className="frame-99-text2 text-[88px] leading-[96px] tracking-[-1px] text-white h-[192px] mt-8">See clearly.<br /><span className="text-[#7d5fff]">Act confidently.</span></div>
    //           <div className="frame-99-text3 text-[rgba(255,255,255,0.7)] mt-8 text-[18px] w-[448px] leading-[26px] tracking-[0.2px]">Enfusion radically simplifies the investment management process by uniting front-, middle-, and back- office functions and services under a single, cloud-native platform built on a shared ‘golden data set’—giving you the freedom to focus on performance.</div>
    //         </div>
  

    //       </div>
          {/* <div className="swiper-slide bg-[url('/images/hero-1.png')] bg-cover">
            <div className="w-[1032px] bg-gradient-to-r from-[#101820] absolute h-full -z-10 mix-blend-multiply"></div>
            <div className="w-full bg-gradient-to-b from-[#101820] absolute h-[224px] -z-10 mix-blend-multiply"></div>
            <div className="w-full absolute h-full bg-[url('/images/hero-fill.png')] -z-20 mix-blend-multiply"></div>
            <div className="hero-nav w-full h-[216px] mt-[584px] bg-gradient-to-t from-[#101820] absolute z-0 mix-blend-multiply"></div>

            <div className="flex-row my-[183px] h-[434px] ml-40 w-[672px] z-40">

              <div className="frame-99-text1 text-white uppercase tracking-[2.5px] text-[14px]"><span className="text-[#7D5FFF] font-bold">O</span> Meet Enfusion</div>
              <div className="frame-99-text2 text-[88px] leading-[96px] tracking-[-1px] text-white h-[192px] mt-8">See clearly.<br /><span className="text-[#7d5fff]">Act confidently.</span></div>
              <div className="frame-99-text3 text-[rgba(255,255,255,0.7)] mt-8 text-[18px] w-[448px] leading-[26px] tracking-[0.2px]">Enfusion radically simplifies the investment management process by uniting front-, middle-, and back- office functions and services under a single, cloud-native platform built on a shared ‘golden data set’—giving you the freedom to focus on performance.</div>
            </div>
  

          </div> */}
          // <div className="swiper-slide bg-[url('/images/bg-flip.png')] bg-cover">
          //   <div className="w-[1032px] bg-gradient-to-r from-[#101820] absolute h-full -z-10 mix-blend-multiply"></div>
          //   <div className="w-full bg-gradient-to-b from-[#101820] absolute h-[224px] -z-10 mix-blend-multiply"></div>
          //   <div className="w-full absolute h-full bg-[url('/images/hero-fill.png')] -z-20 mix-blend-multiply"></div>
          //   <div className="hero-nav w-full h-[216px] mt-[584px] bg-gradient-to-t from-[#101820] absolute z-0 mix-blend-multiply"></div>

          //   <div className="flex-row my-[183px] h-[434px] ml-40 w-[672px] z-40">

          //     <div className="frame-99-text1 text-white uppercase tracking-[2.5px] text-[14px]"><span className="text-[#7D5FFF] font-bold">O</span> Meet Enfusion</div>
          //     <div className="frame-99-text2 text-[88px] leading-[96px] tracking-[-1px] text-white h-[192px] mt-8">See clearly.<br /><span className="text-[#7d5fff]">Act confidently.</span></div>
          //     <div className="frame-99-text3 text-[rgba(255,255,255,0.7)] mt-8 text-[18px] w-[448px] leading-[26px] tracking-[0.2px]">Enfusion radically simplifies the investment management process by uniting front-, middle-, and back- office functions and services under a single, cloud-native platform built on a shared ‘golden data set’—giving you the freedom to focus on performance.</div>
          //   </div>
  

          // </div>
         

       // </div>
<div>
            <div className="swiper-container">
          
                <div className="swiper-wrapper">
                
                    <div className="swiper-slide">
                        <img src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/10.jpg" alt=""
                        />
                    </div>
                    <div className="swiper-slide">
                        <img src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/11.jpg" alt=""
                        />
                    </div>
                    <div className="swiper-slide">
                        <img src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/12.jpg" alt=""
                        />
                    </div>
                </div>
        <div className="swiper-button-prev"></div>
    <div className="swiper-button-next"></div>


    </div>
  )
}
