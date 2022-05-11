import React, { useEffect, useState, useContext } from 'react';

import Navigation from '../Header/Navigation';

import { useAppContext } from '../../../util/context';
import GDPR from './GDPR';
import Desclaimer from '../Desclaimer';

// wow js init
const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wow.js') : null;

export default function Header(props) {

    //console.log(props);

    const context = useAppContext();
    const { menus, options, layoutType, defaults,acf_page_layout} = props;
    let menuItemsCta = [],
        languageMenu = [],
        menuItems = [],
        hideMenu = 0;


    if (menus['small-header-menu']) {
        menuItemsCta = menus['small-header-menu'].menuItems;
    }
    if (menus['language-menu']) {
        languageMenu = menus['language-menu'].menuItems;
    }
    if (menus['main-menu']) {
        menuItems = menus['main-menu'].menuItems;
    }


    try {
        if(acf_page_layout['pageLayout'].includes('hidemainmenu')){
            hideMenu=1;
        }
    } catch (error) {

    }

    //check window dom
    const hasWindow = typeof window !== 'undefined';
    //Sticky menu
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        function afterReveal(el) {
            el.setAttribute('animated', true);
        }

        new WOW({
            callback: afterReveal
        }).init();

        function handleSticky() {
            var y = hasWindow ? window.scrollY : 0;

            if (y > 150) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }

        locateHref();
        anchorScroll();
        window.addEventListener('scroll', handleSticky);
        return () => {
            window.removeEventListener('scroll', handleSticky);
        };
    }, []);

    if (typeof window !== 'undefined') {
        window.addEventListener('load', locateHref);
        window.addEventListener('load', anchorScroll);
    }
    //Smooth scroll on anchor with offset
    function anchorScroll() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            if (anchor.getAttribute('href').length > 2) {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    let yOffset = -70;
                    let element = document.querySelector(
                        this.getAttribute('href')
                    );
                    if (
                        element === '#' ||
                        element === '#!' ||
                        !element ||
                        element === '' ||
                        element.length === 0
                    ) {
                        return;
                    }
                    let y =
                        element.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                    window.scrollTo({
                        top: y,
                        behavior: 'smooth'
                    });
                });
            }
        });
    }

    //Smooth scroll on load with offset
    function locateHref() {
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
            const currUrl = window.location.href;
            if (currUrl.search('#') !== -1) {
                if (currUrl.split('#')[1] && currUrl.split('#')[1].length > 1) {
                    let yOffset = -70;
                    let target = currUrl.split('#')[1];
                    target = document.getElementById(target);
                    if (target) {
                        let y =
                            target.getBoundingClientRect().top +
                            window.pageYOffset +
                            yOffset;
                        window.scrollTo({
                            top: y,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        }
    }

    useEffect(() => {
        document.querySelectorAll('a').forEach((elem) => {
            let linkhn = elem.hostname.split('.').reverse();
            let linkHref = linkhn[1] + '.' + linkhn[0];
            let is =
                !elem.href.match(/^mailto\:/) &&
                !elem.href.match(/^tel\:/) &&
                linkHref !== 'enfusion.com' &&
                linkHref !== 'enfusionsystems.com' &&
                linkHref !== 'webworkinprogress.com' &&
                linkHref !== 'q4web.com' &&
                linkhn[1] !== undefined;
            let href = elem.getAttribute('href');
            if (is) {
                elem.addEventListener('click', (e) => {
                    isExternal(e, href);
                });
            }
            function isExternal(e, href) {
                e.preventDefault();
                e.stopPropagation();
                context.toggleDisclaimer(true);
                context.toggleDisclaimerContent(
                    'You are leaving Enfusion’s website. You may return to the Enfusion website by using the “Back” button on your Web browser toolbar, or by closing the window to the third-party website that you have opened. Do you wish to continue?'
                );
                context.toggleDisclaimerLink(href);
            }
        });
    });

    return (
        <>
            <Desclaimer />
            <Navigation
                menuItemsCta={menuItemsCta}
                language={languageMenu}
                menuItems={menuItems}
                social={options.socialMediaLinks}
                options={options.mainMenuOptions.header}
                footer={options.mainMenuOptions.footer}
                sticky={sticky}
                variant={context?.dark}
                headerTheme={context?.headerTheme}
                layoutType={layoutType}
                hideMenu={hideMenu}
            />
            <GDPR content={defaults?.gdrpCookieNotice?.acf_options_GDPR} />
        </>
    );
}
