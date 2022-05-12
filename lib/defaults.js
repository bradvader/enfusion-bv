import { existsSync, readFileSync, writeFileSync } from 'fs';
import { GraphQLClient, gql } from 'graphql-request';

import { createAuthToken } from '../util/auth';

export function getDefaults(pageData) {
    return {
        contactCard: pageData.contactCard,
        insightsCarousel: pageData.insightsCarousel,
        recentAwards: pageData.recentAwards,
        gdrpCookieNotice: pageData.gdrpCookieNotice,
        footerCtaModule: pageData.footerCtaModule,
        numberModule: pageData.numberModule,
        iconContentGrid: pageData.iconContentGrid,
        ctaModule: pageData.ctaModule,
        greenhouseApiOptions: pageData.greenhouseApiOptions
    };
}