import React, { useEffect, useRef, useState } from 'react';
import { Transition } from '@headlessui/react';

const ISSERVER = typeof window !== 'undefined';

function GDPR({ content }) {
    const [showGDPR, setShowGDPR] = useState(false);

    const [showNecessary, setShowNecessary] = useState(false);
    const [showNonNecessary, setShowNonNecessary] = useState(false);

    const [reviewCookieState, setReviewCookie] = useState('0');
    const [enableCookieState, setEnableCookie] = useState('0');

    useEffect(() => {
        let reviewCookie = localStorage.getItem('reviewCookie');
        let enableCookie = localStorage.getItem('enableCookie');
        // Store the review cookie status
        if (reviewCookie === undefined || reviewCookie === null) {
            localStorage.setItem('reviewCookie', '0');
            setReviewCookie('0');
        } else if (reviewCookie === '1') {
            setReviewCookie('1');
        }
        // Store the cookie status
        if (enableCookie === undefined || enableCookie === null) {
            localStorage.setItem('enableCookie', '0');
            setEnableCookie('0');
        } else if (enableCookie === '1') {
            setEnableCookie('1');
            window.INSERT_TRACKING();
        }
        // Check cookie enable
        if (enableCookieState === '1') {
            window.INSERT_TRACKING();
        }
    }, []);

    function updateLocalStorage(e) {
        e.stopPropagation();
        let enableCookie = localStorage.getItem('enableCookie');
        localStorage.setItem('enableCookie', enableCookie === '0' ? '1' : '0');
        setEnableCookie(enableCookie === '0' ? '1' : '0');

        if (localStorage.getItem('enableCookie') === '1') {
            window.INSERT_TRACKING();
        }
    }

    return (
        <>
            {reviewCookieState === '0' ? (
                <div className="fixed bottom-0 left-0 w-full h-auto lg:py-4 py-6 bg-center z-[11] bg-gradient-12">
                    <div className="container my-1">
                        <div className="items-center justify-between lg:flex">
                            <div
                                className="mb-6 text-white lead lg:mb-0"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        content?.gdprFixedFooter
                                            ?.gdprDescription
                                }}
                            />
                            <div className="grid grid-cols-2 gap-4 lg:block">
                                <a
                                    href=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setShowGDPR(true);
                                    }}
                                    className="w-full px-2 text-white lg:px-6 btn btn--o-primary lg:w-auto"
                                >
                                    Cookie Settings
                                </a>
                                <a
                                    href=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                        localStorage.setItem(
                                            'reviewCookie',
                                            '1'
                                        );
                                        setReviewCookie('1');

                                        localStorage.setItem(
                                            'enableCookie',
                                            '1'
                                        );
                                        setEnableCookie('1');
                                        window.INSERT_TRACKING();
                                    }}
                                    className="w-full px-2 lg:px-6 lg:ml-4 btn btn--primary lg:w-auto"
                                >
                                    Accept
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
            <Transition
                show={showGDPR}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-200 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                className="fixed top-0 left-0 w-full h-full   z-[99]"
            >
                <div
                    className="absolute top-0 left-0 w-full h-full min-h-screen bg-black bg-opacity-50"
                    onClick={(e) => {
                        e.preventDefault();
                        setShowGDPR(false);
                        localStorage.setItem('reviewCookie', '1');
                        setReviewCookie('1');
                    }}
                ></div>
                <div className="container absolute max-h-[95%] p-6 overflow-auto transform -translate-x-1/2 -translate-y-1/2 bg-white md:p-8 md:max-w-2xl left-1/2 top-1/2">
                    <div className="flex justify-end">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowGDPR(false);
                                localStorage.setItem('reviewCookie', '1');
                                setReviewCookie('1');
                            }}
                            className="flex items-center font-medium lead text-purple-midnight"
                        >
                            <span className="min-w-[42px]">Close</span>
                            <span
                                className={`icon-expaded relative h-6 w-6 flex-col justify-between items-center flex ml-3`}
                            >
                                <span
                                    className={`absolute inline-block w-1 h-1 rounded-10 bg-purple-midnight`}
                                ></span>
                                <span
                                    className={`relative top-0 inline-block w-1 h-1 rounded-10 bg-purple-midnight`}
                                ></span>
                                <span
                                    className={`inline-block w-1 h-1 rounded-10 bg-purple-midnight`}
                                ></span>
                                <span
                                    className={`relative bottom-0 inline-block w-1 h-1 rounded-10 bg-purple-midnight`}
                                ></span>
                                <span
                                    className={`absolute bottom-0 inline-block w-1 h-1 rounded-10 bg-purple-midnight`}
                                ></span>
                            </span>
                        </a>
                    </div>
                    <p className="mb-4 lead lead--large">Privacy Policy</p>
                    <div
                        className="lead opacity-70"
                        dangerouslySetInnerHTML={{
                            __html: content?.gdprModal?.privacyPolicy
                        }}
                    />
                    <div
                        className="flex justify-between px-5 py-4 mt-10 cursor-pointer bg-gray-18 rounded-30"
                        onClick={(e) => {
                            e.preventDefault();
                            setShowNecessary(!showNecessary);
                        }}
                    >
                        <div className="flex items-center lead">
                            <i
                                className={`inline-block mr-4 en-caret-down opacity-20 text-14 transform ${
                                    showNecessary ? 'rotate-180' : ''
                                }`}
                            ></i>
                            Necessary
                        </div>
                        <div className="lead lead--small">Always Enabled</div>
                    </div>
                    <Transition show={showNecessary}>
                        <div
                            className="px-5 py-3 lead opacity-70"
                            dangerouslySetInnerHTML={{
                                __html:
                                    content?.gdprModal
                                        ?.necessaryCookiesDescription
                            }}
                        />
                    </Transition>
                    <div
                        className="flex justify-between px-5 py-4 mt-6 cursor-pointer bg-gray-18 rounded-30"
                        onClick={(e) => {
                            setShowNonNecessary(!showNonNecessary);
                        }}
                    >
                        <div className="flex items-center flex-1 lead">
                            <i
                                className={`inline-block mr-4 en-caret-down opacity-20 text-14 transform ${
                                    enableCookieState === '1'
                                        ? 'rotate-180'
                                        : ''
                                }`}
                            ></i>
                            Non-Necessary
                        </div>
                        <div
                            className="lead lead--small"
                            onClick={(e) => updateLocalStorage(e)}
                        >
                            {enableCookieState === '1' ? 'Enabled' : 'Disabled'}

                            <div className="relative inline-block w-10 mr-2 align-middle select-none transition-all duration-200 ease-in ml-4 z-[1]">
                                <div
                                    className={`toggle-checkbox absolute block w-5 h-5 rounded-20 bg-white appearance-none cursor-pointer m-0.5 border-none transition-all  ${
                                        enableCookieState === '1'
                                            ? 'right-0'
                                            : 'right-auto'
                                    }`}
                                />
                                <label
                                    className={`toggle-label block overflow-hidden h-6 rounded-20  cursor-pointer transition-all ${
                                        enableCookieState === '1'
                                            ? 'bg-purple'
                                            : 'bg-gray-14'
                                    }`}
                                ></label>
                            </div>
                        </div>
                    </div>
                    <Transition show={showNonNecessary}>
                        <div
                            className="px-5 py-3 lead opacity-70"
                            dangerouslySetInnerHTML={{
                                __html:
                                    content?.gdprModal
                                        ?.nonNecessaryCookiesDescription
                            }}
                        />
                    </Transition>
                </div>
            </Transition>
        </>
    );
}
export default GDPR;
