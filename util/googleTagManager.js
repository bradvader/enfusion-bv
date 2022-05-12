/*
 * Manually create a GTM page view event: we'll use this to track views
 * after the user has loaded/hydrated and is transitioning between pages
 * with in-app routing.
 */
export const GTMPageView = (url) => {
    const pageEvent = {
        event: 'pageview',
        page: url,
    };

    window && window.dataLayer && window.dataLayer.push(pageEvent);
    return pageEvent;
};

export function gtag() {
    window && window.dataLayer && window.dataLayer.push(arguments);
};