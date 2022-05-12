import React from 'react';

/* Shortcodes */
import {
    ExampleContainerShortcode,
    ExampleColumnsShortcode,
    ExampleColumnShortcode
} from '../shortcodes/example';

export const shortcodeToComponent = {
    sd_example_container: ExampleContainerShortcode,
    sd_example_columns: ExampleColumnsShortcode,
    sd_example_column: ExampleColumnShortcode
};

export function renderShortcodes(shortcodes, pageProps = {}) {
    if (!shortcodes) {
        return null;
    }

    return shortcodes.map((shortcode, index) => {
        /*
         * If the shortcode content is not already a tree, then it is wrapped
         * in a tagless root, so immediately render its children instead.
         */
        if (!shortcode.name && shortcode.children.length) {
            return renderShortcodes(shortcode.children, pageProps);
        }

        const ShortcodeComponent = shortcodeToComponent[shortcode.name];

        if (!ShortcodeComponent) {
            /* Tried to render a block without a local equivalent */
            return null;
        }

        return (
            <ShortcodeComponent
                key={index}
                {...shortcode.attributes}
                content={shortcode.content}
                pageProps={pageProps}
            >
                {renderShortcodes(shortcode.children, pageProps)}
            </ShortcodeComponent>
        );
    });
}
