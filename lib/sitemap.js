import { getPages } from './pages';

export async function getSitemapData() {
    const SITEMAP_ROOT_URL = process.env.SITEMAP_ROOT_URL || '';
    const rootUrlWithTrailingSlash = SITEMAP_ROOT_URL + '/';


    const excludeContentTypes = ['Award', 'Testimonial'];

    const pages = (await getPages()).filter(page => !excludeContentTypes.includes(page.__typename)).map((page) => page);

    const routeMap = new Map();

    for(const { seo: { canonical, title, opengraphModifiedTime } } of pages) {
        if(!canonical || !canonical.length) {
            /* Yoast reports an empty canonical URL for noindex pages, so skip them */
            continue;
        }

        /* Canonical will be relative to WordPress API, not the output */
        const path = SITEMAP_ROOT_URL + new URL(canonical).pathname;
        routeMap.set(path, { title: title, lastmod: opengraphModifiedTime });
    }

    const routes = routeMap.keys();
    let links = [];
    let rootRoute = null;

    for(const route of routes) {
        const data = routeMap.get(route);

        if(route !== rootUrlWithTrailingSlash) {
            links.push({
                url: route,
                ...data
            });
        } else {
            rootRoute = { url: route, ...data };
        }
    }

    if(rootRoute) {
        links = [rootRoute, ...links];
    }

    return links;
}
