import React from 'react';

/* WordPress Core Gutenberg blocks */
import CoreColumn from '../blocks/core/column';
import CoreColumns from '../blocks/core/columns';
import CoreGroup from '../blocks/core/group';
import CoreImage from '../blocks/core/image';
import CoreParagraph from '../blocks/core/paragraph';
import CoreHeading from '../blocks/core/heading';
import CoreSpacer from '../blocks/core/spacer';
import CoreHtml from '../blocks/core/html';
import CoreLists from '../blocks/core/list';
import CoreTable from '../blocks/core/table';
import CoreQuote from '../blocks/core/quote';
import CoreFile from '../blocks/core/file';
import CoreButtons from '../blocks/core/buttons';
import CoreButton from '../blocks/core/button';
import CoreEmbed from '../blocks/core/embed';

/* ACF Blocks */

import HeroSlider from '../blocks/acf/hero-slider';
import FullHeightHero from '../blocks/acf/full-height-hero';
import FormHero from '../blocks/acf/form-hero';
import TwoColTextImage from '../blocks/acf/two-col-text-image';
import IconContentList from '../blocks/acf/icon-content-list';
import TowColTextList from '../blocks/acf/two-col-text-list';
import CTAModule from '../blocks/acf/cta-module';
import IconContentGrid from '../blocks/acf/icon-content-grid';
import NumberModule from '../blocks/acf/number-module';
import RecentAwards from '../blocks/acf/recent-awards';
import InsightCarousel from '../blocks/acf/insight-carousel';
import UpcomingEventsCarousel from '../blocks/acf/upcoming-events-carousel';
import AudioProdcast from '../blocks/acf/audio-podcast';
import BulletList from '../blocks/acf/bullet-list';
import QA from '../blocks/acf/qa';
import Quote from '../blocks/acf/quote';
import Speakers from '../blocks/acf/speaker';
import Brochure from '../blocks/acf/brochure';
import ButtonPopup from '../blocks/acf/button-popup';
import Brochure2 from '../blocks/acf/brochure2';
import PageHero from '../blocks/acf/page-hero';
import EventHero from '../blocks/acf/event-hero';
import PageHero2 from '../blocks/acf/page-hero-2';
import PageHero2Compact from '../blocks/acf/page-hero-2-compact';
import CareersHero from '../blocks/acf/careers-hero';
import ClientLinks from '../blocks/acf/client-links';
import TwoColContact from '../blocks/acf/two-col-contact';
import OurLeaders from '../blocks/acf/our-leaders';
import OurTeamGrid from '../blocks/acf/our-team-media-grid';
import Separator from '../blocks/acf/separator';
import LogoCards from '../blocks/acf/logo-cards';
import PartnersByCategory from '../blocks/acf/partners-category';
import TwoColContactForm from '../blocks/acf/two-col-contact-form';
import ContactCards from '../blocks/acf/contact-cards';
import TwoColOpenPosition from '../blocks/acf/two-col-open-positions';
import CarrersQuote from '../blocks/acf/careers-quote';
import EmployeesCarousel from '../blocks/acf/employees-carousel';
import OpenPositions from '../blocks/acf/open-positions';
import SocialShare from '../blocks/acf/social-share';
import TextHeading from '../blocks/acf/text-heading';
import LegalText from '../blocks/acf/legal-text';
import OurFeatures from '../blocks/acf/our-features';
import FeaturesGrid from '../blocks/acf/features-grid';
import TwoColCarousel from '../blocks/acf/two-col-carousel';
import TwoColAccordianList from '../blocks/acf/two-col-accordian';
import TwoColAccordianList2 from '../blocks/acf/two-col-accordian-2';
import Pagination from '../blocks/acf/pagination';
import TestimonialCarousel from '../blocks/acf/testimonial-carousel';
import InsightSource from '../blocks/acf/insight-source';
import CTAContentList from '../blocks/acf/cta-content-list';

export const blockNameToComponent = {
    'acf/page-hero-slider-block': HeroSlider,
    'acf/two-col-text-image': TwoColTextImage,
    'acf/icon-content-list': IconContentList,
    'acf/two-col-text-list': TowColTextList,
    'acf/cta-module': CTAModule,
    'acf/icon-content-grid': IconContentGrid,
    'acf/number-module': NumberModule,
    'acf/recent-awards': RecentAwards,
    'acf/insight-carousel': InsightCarousel,
    'acf/upcoming-events-carousel': UpcomingEventsCarousel,
    'acf/audio-podcast': AudioProdcast,
    'acf/enfusion-bullet-list': BulletList,
    'acf/enfusion-qa': QA,
    'acf/enfusion-quoteblock': Quote,
    'acf/enfusion-speaker-list': Speakers,
    'acf/brochure': Brochure,
    'acf/brochure2': Brochure2,
    'acf/page-hero': PageHero,
    'acf/event-hero': EventHero,
    'acf/page-hero-2': PageHero2,
    'acf/page-hero-2-compact': PageHero2Compact,
    'acf/careers-hero': CareersHero,
    'acf/client-links': ClientLinks,
    'acf/two-col-contact-block': TwoColContact,
    'acf/meet-our-leaders': OurLeaders,
    'acf/our-team-media-grid': OurTeamGrid,
    'acf/separator': Separator,
    'acf/logo-cards': LogoCards,
    'acf/partners-block': PartnersByCategory,
    'acf/two-col-contact-form': TwoColContactForm,
    'acf/contact-cards': ContactCards,
    'acf/careers-two-col-open-positions': TwoColOpenPosition,
    'acf/careers-quote-block': CarrersQuote,
    'acf/careers-our-employees-carousel': EmployeesCarousel,
    'acf/open-positions': OpenPositions,
    'acf/full-height-hero': FullHeightHero,
    'acf/form-hero': FormHero,
    'acf/social-share': SocialShare,
    'acf/text-heading': TextHeading,
    'acf/features-two-col-grid': FeaturesGrid,
    'acf/two-col-carousel': TwoColCarousel,
    'acf/two-col-accordion-list': TwoColAccordianList,
    'acf/two-col-list-accordion-2': TwoColAccordianList2,
    'acf/pagination': Pagination,
    'acf/testimonial-carousel': TestimonialCarousel,
    'acf/enfusion-insight-source': InsightSource,
    'acf/our-features': OurFeatures,
    'acf/legal-text': LegalText,
    'acf/button-popup': ButtonPopup,
    'acf/cta-content-list': CTAContentList,

    'core/column': CoreColumn,
    'core/columns': CoreColumns,
    'core/group': CoreGroup,
    'core/image': CoreImage,
    'core/paragraph': CoreParagraph,
    'core/spacer': CoreSpacer,
    'core/heading': CoreHeading,
    'core/html': CoreHtml,
    'core/list': CoreLists,
    'core/table': CoreTable,
    'core/quote': CoreQuote,
    'core/file': CoreFile,
    'core/button': CoreButton,
    'core/buttons': CoreButtons,
    'core/embed': CoreEmbed
};

export function renderGutenbergBlocks(blocks, pageProps = {}) {
    return blocks.map((block, index) => {
        const blockAttributes = JSON.parse(block.attributesJSON);
        const BlockComponent = blockNameToComponent[block.name];

        if (!BlockComponent) {
            /* Tried to render a block without a local equivalent */
            return null;
        }

        return (
            <BlockComponent
                key={index}
                data={{}} /* Set a default on ACF data objects */
                {...blockAttributes}
                pageProps={pageProps}
            >
                {renderGutenbergBlocks(block.innerBlocks, pageProps)}
            </BlockComponent>
        );
    });
}

/* Utility function to reconstruct repeater fields' array client-side */
export function extractRepeaterField(data, fieldName) {
    if (!fieldName in data) {
        return null;
    }

    const topItem = data[fieldName];
    const dataKeys = Object.keys(data);
    const results = [];

    for (let i = 0; i < topItem; i++) {
        const re = new RegExp(`^${fieldName}_${i}_(.*)$`);
        const fields = {};

        for (const dataKey of dataKeys) {
            const matches = re.exec(dataKey);

            if (matches) {
                const [unmodifiedKey, fieldKey] = matches;

                fields[fieldKey] = data[unmodifiedKey];
            }
        }

        results.push(fields);
    }

    return results;
}
