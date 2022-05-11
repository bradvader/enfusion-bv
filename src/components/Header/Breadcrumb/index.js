import React from 'react';

import NextNavLink from '../../../util/NextNavLink';
import { makeLinkRelative } from '../../../util/wordpress';

export default function Breadcrumb({ breadcrumbs }) {
    return (
        <nav className="" aria-label="Breadcrumb">
            <ol className="flex items-center">
                {breadcrumbs?.map((breadcrumb, index) => (
                    <li
                        key={index}
                        className="flex items-center font-medium label"
                    >
                        <span
                            className={
                                index === 0 ? 'hidden' : 'inline-block px-3'
                            }
                        >
                            /
                        </span>
                        <i
                            className={`inline-block w-2.5 min-w-[0.66rem] h-2.5 mr-3 border-2 rounded-10 border-purple  ${
                                index !== 0 ? 'hidden' : ''
                            }`}
                        ></i>

                        <NextNavLink
                            passHref
                            href={makeLinkRelative(breadcrumb.url)}
                        >
                            <a
                                className="block max-w-[150px] overflow-hidden md:max-w-xs text-purple-midnight whitespace-nowrap overflow-ellipsis hover:text-purple"
                                dangerouslySetInnerHTML={{
                                    __html: breadcrumb?.text
                                }}
                            ></a>
                        </NextNavLink>
                    </li>
                ))}
            </ol>
        </nav>
    );
}
