import { useState, useRef, useEffect } from 'react';

// Data
import data from './data.json';

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (

    <div className="car-container w-[1120px] mx-auto mb-32">
    <div className="carousel my-12 mx-auto ">



      <div className="relative overflow-hidden w-[1440px] mx-auto">
  
        <div
          ref={carousel}
          className="carousel-container relative flex gap-[32px] overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.resources.map((resource, index) => {
            return (
        
              <div
                key={index}
                className="carousel-item text-center relative w-[352px] h-[394px] snap-start "
              >

                <a
                  href={resource.link}
                  className="w-[352px] h-[394px] flex flex-col justify-between gap-6 z-0"
                
                >
                    <div className="meta flex flex-row justify-start text-[12px] leading-[18px] tracking-[2.5px] uppercase gap-[12px] font-semibold">
                        <div className="text-[#1e1a34]">{resource.cat}</div>
                        <div className="text-[rgba(30,26,52,0.5)]">&#47;</div>
                        <div className="text-[rgba(30,26,52,0.5)]">{resource.date}</div>
                    
                        </div>
                  <img
                    src={resource.imageUrl || ''}
                    alt={resource.title}
                    className="h-[352px] w-[352px] self-end"
                  />
                  <div className="flex flex-col absolute p-8">
                    <div className="absolute z-30 h-[60px] w-[60px] mt-8"><img
                    src={resource.icon}
                    />
                    </div>
                      <div className="text-[18px] text-left leading-[26px] tracking-[0.2px] text-[rgba(255,255,255,0.8)] mt-[208px] z-20">{resource.blurb}</div>
                      <div className="flex flex-row mt-6 gap-4">
                      <div className="text-[#99b0f6] text-[15px] leading-[22px] tracking-[0.2px] font-medium z-20">Read More</div>
            <div className="w-8 h-[12px] text-[#99b0f6] self-center z-20">
                <svg className="" width="32" height="12" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27 13L33 6.9993M33 6.9993L27 1M33 6.9993L1 6.9993" stroke="#99b0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </div>

                      </div>
                  </div>
                  <div className="absolute mt-24 self-end h-[306px] w-[352px] bg-gradient-to-t from-[#101820] to-[rgba(30,26,2,0)] mix-blend-multiply"></div>
                </a>

                {/* <a
                  href={resource.link}
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                > */}
                  {/* <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.title}
                  </h3> */}
                {/* </a> */}
              </div>
            );
          })}
 
        </div>
        <div className="flex flex-row justify-between w-[1088px] h-32 items-center">
          <button
            onClick={movePrev}
            className="text-white w-10 h-full text-center opacity-100 hover:opacity-80 disabled:opacity-100 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
<svg className="rotate-180" width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27 13L33 6.9993M33 6.9993L27 1M33 6.9993L1 6.9993" stroke="rgba(30,26,52,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

            <span className="sr-only">Prev</span>
          </button>
          <div className="flex flex-row h-2 w-12 justify-between z-50">
              <div className="w-2 h-2 bg-[#1e1a34] rounded-full"></div>
              <div className="w-2 h-2 bg-[#1e1a34] rounded-full"></div>
              <div className="w-2 h-2 bg-[#1e1a34] rounded-full"></div>
            </div>
          <button
            onClick={moveNext}
            className="text-white w-10 h-full text-center opacity-100 hover:opacity-80 disabled:opacity-100 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
<svg width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27 13L33 6.9993M33 6.9993L27 1M33 6.9993L1 6.9993" stroke="rgba(30,26,52,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Carousel;