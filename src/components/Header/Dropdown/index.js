import React, { useEffect, useRef, useState } from 'react';
import { Transition } from '@headlessui/react';
import NextNavLink from '../../../util/NextNavLink';
import { useDebounce, useClickOutside } from '../../../../util/hooks';

/* A single, simple Tailwind UI dropdown menu */
export function Language({ menuItem, sticky, bottom = false }) {
    const ref = useRef();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useClickOutside(ref, () => setTimeout(() => setDropdownOpen(false)));

    return (
        <div className="relative">
            <button
                type="button"
                className={`inline-flex items-center   outline-none focus:outline-none lead opacity-80 hover:opacity-100 transition-all ${
                    sticky ? 'text-purple-midnight' : 'text-white'
                }`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                <span>{menuItem.title}</span>
                <svg
                    className="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <Transition
                show={dropdownOpen}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div
                    ref={ref}
                    className={`absolute z-10 pt-6 pb-4  transform  bg-white shadow ${
                        bottom
                            ? 'bottom-0 top-auto mb-10'
                            : '-translate-x-1/2 mt-8'
                    }`}
                >
                    <p className="px-8 label mb-1.5">Language</p>
                    <div className="flex flex-col">
                        {menuItem.children.map((childMenuItem, index) => (
                            <NextNavLink
                                key={index}
                                href={childMenuItem.path || childMenuItem.url}
                                target={childMenuItem.target}
                            >
                                <a
                                    onClick={() => setDropdownOpen(false)}
                                    className="block text-purple-midnight opacity-70 lead hover:opacity-100 whitespace-nowrap px-8 py-1.5 hover:bg-gray-18"
                                >
                                    {childMenuItem.title}
                                </a>
                            </NextNavLink>
                        ))}
                    </div>
                </div>
            </Transition>
        </div>
    );
}

/* A single, simple Tailwind UI dropdown menu */
export function Dropdown(menuItem) {
    const ref = useRef();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useClickOutside(ref, () => setTimeout(() => setDropdownOpen(false)));

    return (
        <div className="relative">
            <button
                type="button"
                className="inline-flex items-center text-white outline-none focus:outline-none lead opacity-80 hover:opacity-100"
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                <span>{menuItem.title}</span>
                <svg
                    className="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <Transition
                show={dropdownOpen}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div
                    ref={ref}
                    className="absolute z-10 pt-6 pb-4 mt-8 transform -translate-x-1/2 bg-white shadow"
                >
                    <p className="px-8 label mb-1.5">Language</p>
                    <div className="flex flex-col">
                        {menuItem.children.map((childMenuItem, index) => (
                            <NextNavLink
                                key={index}
                                href={childMenuItem.url || childMenuItem.path}
                                target={childMenuItem.target}
                            >
                                <a
                                    onClick={() => setDropdownOpen(false)}
                                    className="block text-purple-midnight opacity-70 lead hover:opacity-100 whitespace-nowrap px-8 py-1.5 hover:bg-gray-18"
                                >
                                    {childMenuItem.title}
                                </a>
                            </NextNavLink>
                        ))}
                    </div>
                </div>
            </Transition>
        </div>
    );
}
