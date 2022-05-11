import React from 'react';

import { Hero } from './index';

export default {
    title: 'Enfusion/Hero',
    component: Hero
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});

Default.args = {
    slides: [
        {
            heading_prefix: {},
            heading_headline: 'Meet Enfusion',
            heading_suffix: '',
            heading_second_headline: 'See clearly. ',
            heading_third_headline: 'Act confidently.',
            heading: '',
            content:
                'Enfusion is the flexible, modern framework for investment management operations. Our seamless, cloud-native platform connects the enterprise from front to back office around a single golden source of data.',
            cta_link: {
                title: 'Watch video',
                url:
                    'https://player.vimeo.com/video/508019099?dnt=1&app_id=122963',
                target: ''
            },
            cta_is_video: '1',
            cta: '',
            background_desktop: {
                id: 565,
                medium_url:
                    'https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/hero-banner-300x167.png',
                src:
                    'https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/hero-banner.png',
                srcSet:
                    'https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/hero-banner-300x167.png 300w, https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/hero-banner-1024x569.png 1024w, https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/hero-banner-768x427.png 768w, https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/hero-banner.png 1440w',
                caption: '',
                alt: '',
                title: 'hero-banner'
            },
            background_mobile: {
                id: 565,
                medium_url:
                    'https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/hero-banner-300x167.png',
                src:
                    'https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/hero-banner.png',
                srcSet:
                    'https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/hero-banner-300x167.png 300w, https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/hero-banner-1024x569.png 1024w, https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/hero-banner-768x427.png 768w, https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/hero-banner.png 1440w',
                caption: '',
                alt: '',
                title: 'hero-banner'
            },
            gradient_overlay: {},
            background_pattern: {},
            style_dark_light: 'dark',
            main_image: {}
        },
        {
            heading_prefix: {},
            heading_headline: 'Latest Update',
            heading_suffix: '',
            heading_second_headline: 'Eiusad tempori ',
            heading_third_headline: 'ancildu etalig.',
            heading: '',
            content:
                'Eorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreeta dolore magna aliqua lorem dolor etalum.',
            cta_link: { title: 'Download Now', url: '#', target: '' },
            cta_is_video: '0',
            cta: '',
            main_image: {
                id: 696,
                medium_url:
                    'https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/Double-Terminal-300x197.png',
                src:
                    'https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/Double-Terminal.png',
                srcSet:
                    'https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/Double-Terminal-300x197.png 300w, https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/Double-Terminal.png 576w',
                caption: '',
                alt: '',
                title: 'Double Terminal'
            },
            background_desktop: {},
            background_mobile: {},
            gradient_overlay: {},
            background_pattern: { class: 'bg-pattern-2' },
            style_dark_light: 'light'
        },
        {
            heading_prefix: { class: 'en-calendar' },
            heading_headline: 'Event',
            heading_suffix: '05.17.21',
            heading_second_headline: 'Register for our',
            heading_third_headline: 'latest webinar.',
            heading: '',
            content:
                'Does your investment management system give you the freedom to focus on generating returns? Discover a modern, efficient approach to investment management systems. ',
            cta_link: { title: 'Register', url: '#', target: '_blank' },
            cta_is_video: '0',
            cta: '',
            main_image: {},
            background_desktop: {},
            background_mobile: {},
            gradient_overlay: { class: 'bg-gradient-12' },
            background_pattern: { class: 'bg-pattern-2-midnight' },
            style_dark_light: 'dark'
        }
    ]
};
