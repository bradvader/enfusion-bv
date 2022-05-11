import React, { useState, useEffect } from 'react';
// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import NextNavLink from '../../util/NextNavLink';
import { Transition } from '@headlessui/react';

import { useAppContext } from '../../../util/context';
import { useWindowDimensions } from '../../../util/hooks';

import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Pagination, Autoplay]);
import ReactPlayer from 'react-player';

export const Hero = ({ className = '', anchor = '', slides }) => {
    const context = useAppContext();

    const [modalState, setModalState] = useState({ open: false, details: {} });
    const [showMobile, setShowMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setShowMobile(useWindowDimensions().width > 1024 ? false : true);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [useWindowDimensions().width]);

    return (
        <div
            className={`${className} md:h-screen md:min-h-[800px]  relative`}
            id={anchor}
        >
            <Swiper
                autoplay={{
                    delay: 8000
                }}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{
                    el: '.swiper-custom-pagination',
                    clickable: true
                }}
                onSlideChange={(e) => {
                    context.toggleDarkMode(
                        slides[e.activeIndex].style_dark_light === 'light'
                            ? false
                            : true
                    );

                    let target = document.getElementById(
                        'swipte-pagination-number-curr'
                    );
                    target.innerHTML = e.activeIndex + 1;
                }}
                onSwiper={(swiper) => {
                    let total = document.getElementById(
                        'swipte-pagination-number-total'
                    );
                    context.toggleDarkMode(true);
                    context.toggleHeaderTheme('');
                    let length = swiper.slides.length;

                    total.innerHTML = length;
                }}
                className={`${context?.dark ? '' : 'swiper-light'} h-full`}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide className="h-auto-important" key={index}>
                        <div
                            className={`flex items-center  h-full bg-cover overflow-hidden relative bg-center ${
                                slide.gradient_overlay.class
                                    ? slide.gradient_overlay.class
                                    : 'bg-gray-19'
                            }`}
                            style={
                                slide.background_desktop.src && {
                                    backgroundImage: `url(${
                                        !showMobile
                                            ? slide.background_desktop.src
                                            : slide?.background_mobile?.src ||
                                              slide.background_desktop.src
                                    })`
                                }
                            }
                        >
                            <div className="container relative z-[1] md:h-auto h-full">
                                <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-0 md:py-0 py-28">
                                    <div className="col-span-1 md:col-span-7">
                                        {slide.heading_headline && (
                                            <p
                                                className={`flex items-center md:mb-8 mb-5 font-medium  label is-animated ${
                                                    slide.style_dark_light ===
                                                    'dark'
                                                        ? 'text-white'
                                                        : 'text-purple-midnight'
                                                }`}
                                            >
                                                {slide.heading_prefix.class ? (
                                                    <i
                                                        className={`${slide.heading_prefix.class} text-40 text-purple mr-4`}
                                                    ></i>
                                                ) : (
                                                    <i className="inline-block w-3 h-3 mr-3 border-2 rounded-10 border-purple"></i>
                                                )}
                                                {slide.heading_headline}
                                                {slide.heading_suffix && (
                                                    <span className="opacity-40">
                                                        <span className="px-2">
                                                            /
                                                        </span>
                                                        {slide.heading_suffix}
                                                    </span>
                                                )}
                                            </p>
                                        )}
                                        <h1 className="mb-5 md:mb-8 is-animated">
                                            {slide.heading_second_headline && (
                                                <span
                                                    className={`${
                                                        slide.style_dark_light ===
                                                        'dark'
                                                            ? 'text-white'
                                                            : 'text-purple-midnight'
                                                    }`}
                                                >
                                                    {
                                                        slide.heading_second_headline
                                                    }
                                                </span>
                                            )}

                                            {slide.heading_third_headline && (
                                                <span
                                                    className={`${
                                                        slide.style_dark_light ===
                                                        'dark'
                                                            ? 'text-purple'
                                                            : 'text-purple'
                                                    }`}
                                                >
                                                    <br />
                                                    {
                                                        slide.heading_third_headline
                                                    }
                                                </span>
                                            )}
                                        </h1>
                                        <div
                                            className={`lead lead--large opacity-70 lg:max-w-md is-animated ${
                                                slide.style_dark_light ===
                                                'dark'
                                                    ? 'text-white'
                                                    : 'text-purple-midnight'
                                            }`}
                                            dangerouslySetInnerHTML={{
                                                __html: slide.content
                                            }}
                                        />
                                        {slide.cta_is_video === '0' ? (
                                            <a
                                                href={slide.cta_link.url}
                                                className="mt-8 md:mt-12 btn btn--primary is-animated"
                                                target={slide.cta_link.target}
                                            >
                                                {slide.cta_link.title}
                                            </a>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                    <div className="md:col-span-5">
                                        <div
                                            className={`relative flex items-center justify-center  min-h-full md:left-auto md:w-auto md:static ${
                                                slide?.main_image?.src
                                                    ? 'w-screen'
                                                    : ''
                                            }`}
                                        >
                                            {slide?.main_image?.src && (
                                                <div className="md:absolute w-screen transform md:max-w-[50vw] md:left-1/2 md:translate-x-[8.33vw] md:pr-[8.33vw] md:pl-6 md:right-auto relative">
                                                    <img
                                                        src={
                                                            slide?.main_image
                                                                ?.src
                                                        }
                                                        alt={
                                                            slide?.main_image
                                                                ?.title ||
                                                            'Enfusion'
                                                        }
                                                        className="w-full is-animated"
                                                    />
                                                </div>
                                            )}
                                            {slide.cta_is_video === '1' ? (
                                                <>
                                                    <a
                                                        className="flex flex-col items-center justify-center font-medium text-center text-white label is-animated"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setModalState({
                                                                open: true,
                                                                details: slide
                                                            });
                                                        }}
                                                        href=""
                                                    >
                                                        <img
                                                            src="/images/icons/play.svg"
                                                            alt=""
                                                            width={80}
                                                            className="mb-6"
                                                        />
                                                        {slide.cta_link.title}
                                                    </a>
                                                </>
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {slide.background_pattern.class && (
                                <div
                                    className={`${slide.background_pattern.class} max-w-[1500px] w-full h-full md:max-h-[670px] max-h-[570px] bg-cover -bottom-10 md:-right-1/2 -right-12 absolute z-0`}
                                ></div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="sticky bottom-0 left-0 z-10 flex items-center justify-between w-full sticky-mobile">
                <div className="absolute swiper-custom-pagination"></div>
                <div className="absolute z-[2] transform rotate-90 -translate-x-1/2 swipte-down-arrow left-1/2 bottom-12">
                    <a
                        href="#welcome"
                        className="flex items-center font-medium lead icon-circle"
                    >
                        <span className="relative flex items-center h-4 ml-4">
                            <i
                                className={`inline-block en-long-arrow text-32 leading-18 relative z-[1] transition ${
                                    context?.dark
                                        ? 'text-white'
                                        : 'text-purple-midnight'
                                }`}
                            ></i>

                            <svg
                                width="32"
                                height="32"
                                className="absolute -right-3 -top-2 icon-circle__circle"
                            >
                                <circle
                                    cx="16"
                                    cy="16"
                                    r="15"
                                    className="icon-circle__base"
                                ></circle>
                                <circle
                                    cx="16"
                                    cy="16"
                                    r="15"
                                    style={{
                                        stroke: context?.dark
                                            ? '#fff'
                                            : '#1E1A34'
                                    }}
                                    className="icon-circle__fill"
                                ></circle>
                            </svg>
                        </span>
                    </a>
                </div>
                <div
                    id="swipte-pagination-number"
                    className={`absolute z-[2] flex items-center font-medium text-center bottom-7 right-6 label transition ${
                        context?.dark ? 'text-white' : 'text-purple-midnight'
                    }`}
                >
                    <span
                        id="swipte-pagination-number-curr"
                        className="inline-block w-2.5"
                    >
                        1
                    </span>
                    <span className="inline-block w-2.5">/</span>

                    <span
                        id="swipte-pagination-number-total"
                        className="inline-block w-2.5"
                    >
                        1
                    </span>
                </div>
            </div>
            <Transition
                className="relative z-[100]"
                show={modalState.open}
                enter="duration-200 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div className="fixed top-0 left-0 flex flex-col w-full h-full min-h-screen bg-gradient-11 lg:pb-36">
                    <div className="flex items-center justify-between px-6 pt-4 pb-6 lg:pb-16 lg:pt-9 flex-0">
                        <h5 className="text-white">Video --- Meet Enfusion</h5>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setModalState({
                                    open: false,
                                    details: {}
                                });
                            }}
                            className={`flex items-center font-medium  lead opacity-80 hover:opacity-100 ${
                                !modalState.open
                                    ? 'text-purple-midnight'
                                    : 'text-white'
                            }`}
                        >
                            <span className="min-w-[42px]">
                                {!modalState.open ? `Menu` : 'Close'}
                            </span>
                            <span
                                className={`${
                                    modalState.open
                                        ? 'icon-expaded'
                                        : 'icon-collapse'
                                } relative h-6 w-6 flex-col justify-between items-center flex ml-3`}
                            >
                                <span
                                    className={`absolute inline-block w-1 h-1 rounded-10 ${
                                        !modalState.open
                                            ? 'bg-purple-midnight'
                                            : 'bg-white'
                                    }`}
                                ></span>
                                <span
                                    className={`relative top-0 inline-block w-1 h-1 rounded-10 ${
                                        !modalState.open
                                            ? 'bg-purple-midnight'
                                            : 'bg-white'
                                    }`}
                                ></span>
                                <span
                                    className={`inline-block w-1 h-1 rounded-10 ${
                                        !modalState.open
                                            ? 'bg-purple-midnight'
                                            : 'bg-white'
                                    }`}
                                ></span>
                                <span
                                    className={`relative bottom-0 inline-block w-1 h-1 rounded-10 ${
                                        !modalState.open
                                            ? 'bg-purple-midnight'
                                            : 'bg-white'
                                    }`}
                                ></span>
                                <span
                                    className={`absolute bottom-0 inline-block w-1 h-1 rounded-10 ${
                                        !modalState.open
                                            ? 'bg-purple-midnight'
                                            : 'bg-white'
                                    }`}
                                ></span>
                            </span>
                        </a>
                    </div>
                    <div className="flex-1 px-6 lg:px-40 ">
                        <ReactPlayer
                            width="100%"
                            height="100%"
                            className=""
                            url={modalState?.details?.cta_link?.url}
                            controls={true}
                        />
                    </div>
                </div>
            </Transition>
        </div>
    );
};
export default Hero;
