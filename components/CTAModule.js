import React, { useState } from 'react';

// const comp_args = {
//     heading: 'Gain a clear advantage.',
//     cta: { title: 'Talk To Us', url: '#', target: '' },
//     fluid: '0',
//     light_dark: 'Light',
//     background: {
//         id: 791,
//         medium_url:
//             'https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/GettyImages-1036208856-1-300x75.png',
//         src:
//             'https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/GettyImages-1036208856-1.png',
//         srcSet:
//             'https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/GettyImages-1036208856-1-300x75.png 300w, https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/GettyImages-1036208856-1-1024x256.png 1024w, https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/GettyImages-1036208856-1-768x192.png 768w, https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/GettyImages-1036208856-1.png 1120w',
//         caption: '',
//         alt: '',
//         title: 'GettyImages-1036208856 1'
//     }
// };
export const CTAModule = ({
    className = '',
    anchor = '',
    heading = 'Gain a clear advantage.',
    cta = { title: 'Talk To Us', url: '#', target: '' },
    fluid = '0',
    light_dark = 'Light',
    background = {
        id: 791,
        medium_url:
            'GettyImages-1036208856-1-300x75.png',
        src:
            'GettyImages-1036208856-1.png',
        srcSet:
            'https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/GettyImages-1036208856-1-300x75.png 300w, https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/GettyImages-1036208856-1-1024x256.png 1024w, https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/GettyImages-1036208856-1-768x192.png 768w, https://enfusion-api.webworkinprogress.com/wp-content/uploads/2021/04/GettyImages-1036208856-1.png 1120w',
        caption: '',
        alt: '',
        title: 'GettyImages-1036208856 1'
    }
}) => {
    return (
        <div
            className={`overflow-hidden  relative  wow fadeInUp ${className}`}
            id={anchor}
        >
            <div
                className={`${fluid === '1' ? 'bg-cover py-4' : 'container'}`}
                style={
                    background && fluid === '1'
                        ? {
                              backgroundImage: `url(${
                                  background?.src || background?.mediaItemUrl
                              })`
                          }
                        : {}
                }
            >
                <div
                    className={`lg:flex items-center justify-between  bg-cover md:py-28 py-10 lg:text-left text-center ${
                        fluid !== '1' ? 'lg:px-24 px-8' : 'container'
                    }`}
                    style={
                        background && fluid !== '1'
                            ? {
                                  backgroundImage: `url(${
                                      background?.src ||
                                      background?.mediaItemUrl
                                  })`
                              }
                            : {}
                    }
                >
                    {heading && (
                        <h3
                            className={`lg:mb-0 mb-8 wow fadeInUp md:h3 h4 ${
                                light_dark === 'Light'
                                    ? 'text-white'
                                    : 'text-purple-midnight'
                            }`}
                            dangerouslySetInnerHTML={{ __html: heading }}
                        />
                    )}
                    {cta && (
                        
                            <a
                                className={`${
                                    light_dark === 'Light'
                                        ? 'btn--white'
                                        : 'btn--midnight'
                                } btn md:btn--lg wow fadeInUp`}
                            >
                                {cta.title}
                            </a>
                        
                    )}
                </div>
            </div>
        </div>
    );
};
export default CTAModule;
