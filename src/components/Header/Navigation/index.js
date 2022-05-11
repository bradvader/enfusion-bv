import React, { useEffect, useRef, useState } from 'react';
import { Transition } from '@headlessui/react';

import NextNavLink from '../../../util/NextNavLink';
import { Dropdown, Language } from '../Dropdown';

import { useDebounce, useClickOutside } from '../../../../util/hooks';
import { gtag } from '../../../../util/googleTagManager';

/* An example Tailwind UI menu supporting sub-items as dropdowns */
function Navigation({
    menuItems,
    menuItemsCta,
    language,
    social,
    sticky,
    options,
    variant,
    layoutType,
    footer,
    headerTheme = '',
    hideMenu,
}) {
    //For mobile menu
    const [showMenu, setShowMenu] = useState(false);
    const [CTAOpen, setCTAOpen] = useState(false);

    //for search results
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const debouncedQuery = useDebounce(searchQuery, 500);

    const ref = useRef();
    const searchRef = useRef();

    useEffect(async () => {
        if (debouncedQuery && debouncedQuery.length > 2) {
            const resp = await fetch(
                '/api/search?' +
                    new URLSearchParams({
                        q: searchQuery
                    })
            );
            const json = await resp.json();

            if (json.response !== 'SUCCESS') {
                setSearchResults([]);
                setShowSearchResults(false);

                return;
            }

            setSearchResults(json.results);
            setShowSearchResults(true);
        } else {
            setSearchResults([]);
            setShowSearchResults(false);
        }
    }, [debouncedQuery]);

    function resetSearch() {
        setShowSearchResults(false);
        setSearchQuery('');
    }

    // useClickOutside(ref, () => setShowMenu(false));
    useClickOutside(searchRef, () => setShowSearchResults(false));

    let menuIconColorTheme =
        (sticky && !showMenu) || (!variant && !showMenu)
            ? 'bg-purple-midnight'
            : 'bg-white';

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full px-6 py-4 z-[99] transition-all duration-400 ${
                    sticky && !showMenu ? 'bg-white bg-opacity-100' : ''
                } ${!variant && !showMenu && !sticky ? '' : ''}  ${
                    sticky && !showMenu ? 'shadow-nav' : ''
                } ${!showMenu && headerTheme}`}
            >
                <div className="flex items-center justify-between ">
                    <div>
                        <NextNavLink href="/">
                            <a
                                className="flex"
                                onClick={(e) => {
                                    setShowMenu(false);
                                }}
                            >
                                <span className="sr-only">Enfusion</span>
                                <img
                                    className="w-100% lg:max-w-[139px] max-w-[116px]"
                                    src={
                                        (sticky && !showMenu) ||
                                        (!variant && !showMenu)
                                            ? '/images/enfusion-logo-dark.svg'
                                            : '/images/enfusion-logo-white.svg'
                                    }
                                    alt="Enfusion"
                                />
                            </a>
                        </NextNavLink>


                    </div>

                    { !hideMenu && (
                    <div className="-mr-1 lg:hidden">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowMenu(!showMenu);
                            }}
                            className={`flex items-center   lead opacity-80 hover:opacity-100 ${
                                (sticky && !showMenu) || (!variant && !showMenu)
                                    ? 'text-purple-midnight'
                                    : 'text-white'
                            }`}
                        >
                            <span className="min-w-[42px]">
                                {!showMenu ? `Menu` : 'Close'}
                            </span>
                            <span
                                className={`${
                                    showMenu ? 'icon-expaded' : 'icon-collapse'
                                } relative h-6 w-6 flex-col justify-between items-center flex ml-3`}
                            >
                                <span
                                    className={`absolute inline-block w-1 h-1 rounded-10 ${menuIconColorTheme}`}
                                />
                                <span
                                    className={`relative top-0 inline-block w-1 h-1 rounded-10 ${menuIconColorTheme}`}
                                />
                                <span
                                    className={`inline-block w-1 h-1 rounded-10 ${menuIconColorTheme}`}
                                />
                                <span
                                    className={`relative bottom-0 inline-block w-1 h-1 rounded-10 ${menuIconColorTheme}`}
                                />
                                <span
                                    className={`absolute bottom-0 inline-block w-1 h-1 rounded-10 ${menuIconColorTheme}`}
                                />
                            </span>
                        </a>
                    </div>
                )}

                    { !hideMenu && (
                    <div className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-end">
                        <nav className="items-center hidden space-x-8 lg:flex">
                            {menuItemsCta.map((menuItem, index) =>
                                menuItem.children.length ? (
                                    <Dropdown key={index} {...menuItem} />
                                ) : (
                                    <NextNavLink
                                        key={index}
                                        href={menuItem.url || menuItem.path}
                                        target={menuItem.target}
                                    >
                                        <a
                                            onClick={(e) => {
                                                setShowMenu(false);
                                            }}
                                            className={`  lead opacity-80 hover:opacity-100 ${
                                                (sticky && !showMenu) ||
                                                (!variant && !showMenu)
                                                    ? 'text-purple-midnight'
                                                    : 'text-white'
                                            }`}
                                        >
                                            {menuItem.title}
                                        </a>
                                    </NextNavLink>
                                )
                            )}

                            {/* {language.map((menuItem, index) => (
                                <Language
                                    key={index}
                                    menuItem={menuItem}
                                    sticky={
                                        (sticky && !showMenu) ||
                                        (!variant && !showMenu)
                                    }
                                />
                            ))} */}

                            {options.topCtaButton.title && (
                                <NextNavLink
                                    href={options?.topCtaButton?.url}
                                    target={options?.topCtaButton?.target}
                                >
                                    <a
                                        // onClick={(e) => {
                                        //     e.preventDefault();
                                        //     setCTAOpen(true);
                                        // }}

                                        className="cursor-pointer btn btn--primary"
                                    >
                                        {options?.topCtaButton?.title}
                                    </a>
                                </NextNavLink>
                            )}

                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowMenu(!showMenu);
                                }}
                                className={`flex items-center font-medium  lead opacity-80 hover:opacity-100 ${
                                    (sticky && !showMenu) ||
                                    (!variant && !showMenu)
                                        ? 'text-purple-midnight'
                                        : 'text-white'
                                }`}
                            >
                                <span className="min-w-[42px]">
                                    {!showMenu ? `Menu` : 'Close'}
                                </span>
                                <span
                                    className={`${
                                        showMenu
                                            ? 'icon-expaded'
                                            : 'icon-collapse'
                                    } relative h-6 w-6 flex-col justify-between items-center flex ml-3`}
                                >
                                    <span
                                        className={`absolute inline-block w-1 h-1 rounded-10 transition-all ${menuIconColorTheme}`}
                                    />
                                    <span
                                        className={`relative top-0 inline-block w-1 h-1 rounded-10 transition-all ${menuIconColorTheme}`}
                                    />
                                    <span
                                        className={`inline-block w-1 h-1 rounded-10 transition-all ${menuIconColorTheme}`}
                                    />
                                    <span
                                        className={`relative bottom-0 inline-block w-1 h-1 rounded-10 transition-all ${menuIconColorTheme}`}
                                    />
                                    <span
                                        className={`absolute bottom-0 inline-block w-1 h-1 rounded-10 transition-all ${menuIconColorTheme}`}
                                    />
                                </span>
                            </a>
                        </nav>


                    </div>
                    )}

                </div>

            </header>
            <Transition
                show={showMenu}
                className="relative z-[11]"
                enter="duration-200 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div className="fixed top-0 left-0 z-10 flex flex-col justify-between w-screen max-h-screen min-h-screen overflow-auto bg-cover bg-gradient-10">
                    <div className="container">
                        <div className="fixed top-0 left-0 flex items-center justify-between w-full p-6 pt-20 lg:hidden bg-gradient-to-b from-black via-black to-black-0 z-[2]"></div>
                        <div className="grid flex-row flex-wrap w-full gap-10 pb-32 mb-10 md:gap-8 lg:justify-center sm:grid-cols-2 lg:grid-cols-4 lg:pt-40 pt-28 lg:pb-0">
                            <div className="flex items-center mb-1 space-x-4 sm:col-span-2 lg:hidden">
                                <NextNavLink href="/clients">
                                    <a
                                        onClick={() => setShowMenu(false)}
                                        className="flex items-center font-medium text-white lead icon-circle"
                                    >
                                        Clients
                                        <span className="relative h-4 ml-4">
                                            <i className="inline-block en-long-arrow text-32 leading-18 relative z-[1]"></i>

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
                                                    className="icon-circle__fill"
                                                ></circle>
                                            </svg>
                                        </span>
                                    </a>
                                </NextNavLink>
                                {footer.footerLink2 && (
                                    <div className="lg:pr-5">
                                        <a
                                            href={footer.footerLink2?.url}
                                            target={footer.footerLink2?.target}
                                            className="flex items-center font-medium text-white lead icon-circle"
                                        >
                                            {footer.footerLink2?.title}
                                            <span className="relative h-4 ml-3">
                                                <i className="inline-block en-long-arrow text-32 leading-18 relative z-[1]"></i>

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
                                                        className="icon-circle__fill"
                                                    ></circle>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                )}
                            </div>
                            {menuItems.map((menuItem, index) => (
                                <div
                                    className={`flex flex-col lg:flex-1  w-full space-y-11 ${
                                        index === 3
                                            ? 'lg:border-l lg:border-opacity-30 lg:border-white lg:pl-24'
                                            : ''
                                    }`}
                                    key={index}
                                >
                                    {menuItem.children.map(
                                        (childMenuItem, index) => (
                                            <div key={index} className="">
                                                <p className="mb-3 font-medium text-white label">
                                                    {childMenuItem.title}
                                                </p>
                                                <ul className="flex flex-col space-y-3 lead">
                                                    {childMenuItem.children.map(
                                                        (item, i) => (
                                                            <li key={i}>
                                                                <NextNavLink
                                                                    href={
                                                                        item.path ||
                                                                        item.url
                                                                    }
                                                                    target={
                                                                        item.target
                                                                    }
                                                                >
                                                                    <a
                                                                        onClick={() =>
                                                                            setShowMenu(
                                                                                false
                                                                            )
                                                                        }
                                                                        className="text-white opacity-70 hover:opacity-100"
                                                                    >
                                                                        {
                                                                            item.title
                                                                        }
                                                                    </a>
                                                                </NextNavLink>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        )
                                    )}

                                    {index === 3 && (
                                        <div className="flex flex-row items-center pt-2 space-x-4 text-20 leading-20">
                                            {social &&
                                                social.map((item, index) => (
                                                    <a
                                                        key={index}
                                                        href={item.link}
                                                        className="text-white opacity-70 hover:opacity-100"
                                                        target="_blank"
                                                    >
                                                        <i
                                                            className={`en-${item.social}`}
                                                        ></i>
                                                    </a>
                                                ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    {options.ctaHeading && (
                        <Banner
                            heading={options.ctaHeading}
                            cta={options.ctaBannerLink}
                        />
                    )}

                    <div className="fixed bottom-0 left-0 flex items-center justify-between w-full p-6 pt-24 lg:hidden bg-gradient-to-t from-black to-black-0 z-[99]">
                        {/* {language.map((menuItem, index) => (
                            <Language
                                key={index}
                                menuItem={menuItem}
                                sticky={sticky && !showMenu}
                                bottom={true}
                            />
                        ))} */}
                        <div></div>
                        {options?.topCtaButton?.title && (
                            <NextNavLink
                                href={options?.topCtaButton?.url}
                                target={options?.topCtaButton?.target}
                            >
                                <a
                                    // onClick={(e) => {
                                    //     e.preventDefault();
                                    //     setCTAOpen(true);
                                    // }}

                                    className="cursor-pointer btn btn--primary"
                                >
                                    {options?.topCtaButton?.title}
                                </a>
                            </NextNavLink>
                        )}
                    </div>
                </div>
            </Transition>
            <Transition
                show={CTAOpen}
                className="fixed top-0 left-0 z-[999] w-screen max-h-screen min-h-screen"
                enter="duration-200 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div className="w-screen max-h-screen min-h-screen bg-white bg-cover">
                    <div className="fixed right-6 top-7">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setCTAOpen(!CTAOpen);
                            }}
                            className={`flex items-center lead opacity-80 hover:opacity-100 xl:text-purple-midnight text-white cursor-pointer`}
                        >
                            <span className="min-w-[42px]">Close</span>
                            <span
                                className={`icon-expaded  relative h-6 w-6 flex-col justify-between items-center flex ml-3`}
                            >
                                <span
                                    className={`absolute inline-block w-1 h-1 rounded-10 xl:bg-purple-midnight bg-white`}
                                />
                                <span
                                    className={`relative top-0 inline-block w-1 h-1 rounded-10 xl:bg-purple-midnight bg-white`}
                                />
                                <span
                                    className={`inline-block w-1 h-1 rounded-10 xl:bg-purple-midnight bg-white`}
                                />
                                <span
                                    className={`relative bottom-0 inline-block w-1 h-1 rounded-10 xl:bg-purple-midnight bg-white`}
                                />
                                <span
                                    className={`absolute bottom-0 inline-block w-1 h-1 rounded-10 xl:bg-purple-midnight bg-white`}
                                />
                            </span>
                        </a>
                    </div>
                    <iframe
                        loading="lazy"
                        sandbox="allow-downloads allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation-by-user-activation allow-same-origin"
                        src={options?.topCtaButton?.url}
                        data-src=""
                        width="100%"
                        height="100%"
                        type="text/html"
                        frameborder="0"
                        className="w-screen max-h-screen min-h-screen"
                        allowtransparency="true"
                    />
                </div>
            </Transition>
        </>
    );
}

// Desktop menu Bottom Baner
// Content can be changed from Option page
function Banner({ heading, cta }) {
    return (
        <div className="hidden py-6 bg-center bg-cover bg-gradient-3 lg:block">
            <div className="container flex flex-row items-center justify-between">
                <h5 className="text-white">{heading}</h5>
                {cta && (
                    <a
                        target={cta.target}
                        href={cta.url}
                        className="flex items-center font-medium text-white lead icon-circle"
                    >
                        {cta.title}
                        <span className="relative flex items-center h-4 ml-4">
                            <i className="inline-block en-long-arrow text-32 leading-18 relative z-[1]"></i>

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
                                    className="icon-circle__fill"
                                ></circle>
                            </svg>
                        </span>
                    </a>
                )}
            </div>
        </div>
    );
}
export default Navigation;
