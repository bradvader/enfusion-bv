import Router from 'next/router';
import { useEffect, useState } from 'react';

/*
 * Debounce hook from: https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
 */
export const useDebounce = function (value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    return debouncedValue;
};

/*
 * On each Next router transition, run callback.
 */
export const useRouteChange = function (callback) {
    useEffect(() => {
        const handleRouteChange = (url) => callback(url);
        const handleRouteHref = () => {
            if (typeof window !== 'undefined') {
                window.scrollTo(0, 0);
                const currUrl = window.location.href;
                if (currUrl.search('#') !== -1) {
                    if (
                        currUrl.split('#')[1] &&
                        currUrl.split('#')[1].length > 1
                    ) {
                        let yOffset = -70;
                        let target = currUrl.split('#')[1];
                        target = document.getElementById(target);
                        if (target) {
                            let y =
                                target.getBoundingClientRect().top +
                                window.pageYOffset +
                                yOffset;

                            setTimeout(() => {
                                window.scrollTo({
                                    top: y,
                                    behavior: 'smooth'
                                });
                            }, 10);
                        }
                    }
                }
            }
        };
        Router.events.on('routeChangeComplete', handleRouteChange);
        Router.events.on('routeChangeComplete', handleRouteHref);

        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange);
            Router.events.off('routeChangeComplete', handleRouteHref);
        };
    }, []);
};

/*
 * If a user clicks outside the ref element, run callback.
 */
export const useClickOutside = function (ref, callback) {
    const onClick = (ev) => {
        if (ref.current && !ref.current.contains(ev.target)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener('click', onClick);

        return () => {
            document.removeEventListener('click', onClick);
        };
    }, []);
};

/*
 * window size on resize and load
 */
export const useWindowDimensions = () => {
    const hasWindow = typeof window !== 'undefined';

    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
        width,
        height
    };
};
