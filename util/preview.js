function isNumber(num) {
    if (typeof num === 'number') {
        return num - num === 0;
    }

    if (typeof num === 'string' && num.trim() !== '') {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
    }

    return false;
}

export function isPreviewPath(contextOrUrl, isDraftPreviewPath = false) {
    if (typeof contextOrUrl === 'string') {
        const urlSplit = contextOrUrl.split('/');

        if (!urlSplit) return false;

        return urlSplit?.[urlSplit.length - 3] === 'preview';
    }

    if (contextOrUrl.params?.page && Array.isArray(contextOrUrl.params?.page)) {
        const { page } = contextOrUrl.params;

        if (page?.[page.length - 3] === 'preview') {
            if (isDraftPreviewPath) {
                return page?.[page.length - 3] === 'draft';
            }

            return true;
        }
    }

    return false;
}

export function getPreviewID(contextOrUrl) {
    if (typeof contextOrUrl === 'string') {
        if (!isPreviewPath(contextOrUrl)) {
            return null;
        }

        const urlSplit = contextOrUrl.split('/');
        const id = urlSplit?.[urlSplit.length - 2];

        if (isNumber(id)) {
            return id;
        }

        return null;
    }

    if (!isPreviewPath(contextOrUrl)) {
        return null;
    }

    if (contextOrUrl.params?.page && Array.isArray(contextOrUrl.params?.page)) {
        const { page } = contextOrUrl.params;
        const id = page?.[page.length - 2];

        if (isNumber(id)) {
            return id;
        }
    }

    return null;
}
