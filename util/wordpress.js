export function makeLinkRelative(link) {
    return new URL(link).pathname;
}

/*
 * Utility function for converting WordPress menu flat data to
 * hierarchical structure found:
 *
 * https://www.wpgraphql.com/docs/menus/#hierarchical-data
 */
export const flatListToHierarchical = (
    data = [],
    { idKey = 'key', parentKey = 'parentId', childrenKey = 'children' } = {}
) => {
    const tree = [];
    const childrenOf = {};

    data.forEach((item) => {
        const newItem = { ...item };
        const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;

        childrenOf[id] = childrenOf[id] || [];
        newItem[childrenKey] = childrenOf[id];
        parentId
            ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
            : tree.push(newItem);
    });

    return tree;
};
