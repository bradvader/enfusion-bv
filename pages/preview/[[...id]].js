import { getMenus } from '../../lib/menus';
import { getDefaults } from '../../lib/defaults';
import { getThemeAssets } from '../../lib/themeAssets';
import { getPage } from '../../lib/pages';

import Page from '../[[...page]]';

export default Page;

export async function getServerSideProps(context) {
    const postId = context.params.id[0];

    let pageData = await getPage(null, postId);
    if (!pageData || !pageData.contentNode) {
        return {
            notFound: true
        };
    }

    const {
        title,
        blocks,
        blocksJSON,
        contentType: {
            node: { name: contentType }
        },
        acf_post_event,
        seo,
        date = '',
        link = '',
        relatedPosts,
        categories
    } = pageData.contentNode;
    const menus = {};

    (getMenus(pageData)).map((menu) => (menus[menu.slug] = menu));
    let options = pageData.options.acf_site_options;
    let defaults = getDefaults(pageData);
    
    const themeAssets = {};
    (getThemeAssets(pageData)).map(
        (item) => (themeAssets[item.id] = item.acf_post_type_theme_assets)
    );

    const props = {
        title,
        link,
        blocks,
        menus,
        options,
        relatedPosts,
        contentType,
        themeAssets,
        categories: pageData?.contentNode?.categories || [],
        defaults,
        layoutType: pageData?.contentNode?.postFields?.layoutType || 'default',
        mediaContactHide:
            pageData?.contentNode?.postFields?.mediaContactHide || '0',
        mediaContact:
            pageData?.contentNode?.mediaContact?.mediaContactSettings || {},
        optionHideCta:
            pageData?.contentNode?.optionHideCta?.hideCtaModule || '0',
        acf_post_event: pageData?.contentNode?.acf_post_event || [],
        date,
        seo: {
            title
        },
        perPageFields: pageData?.contentNode?.perPageFields || null
    };

    return { props: props };
}
