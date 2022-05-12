import { flatListToHierarchical } from "../util/wordpress";

export function getMenus(results) {
    return results.menus.nodes.map(({ key, name, slug, locations, menuItems }) => ({
        key,
        name,
        slug,
        locations,
        menuItems: flatListToHierarchical(menuItems.nodes)
    }));
}
