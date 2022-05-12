import { gql } from 'graphql-request';

const GET_INSIGHTS = gql`
    query GetInsights {
        themeassets(first: 50000) {
            nodes {
                title
                id: databaseId
                acf_post_type_theme_assets {
                    class
                }
            }
        }
        options {
            acf_site_options {
                gaId
                gtmId
                inTheNewsMedia {
                    enable
                    email
                    heading
                    name
                    phone
                    subHeading
                    irLink {
                        title
                        target
                        url
                    }
                }
                mediaContactSettings {
                    contact {
                        company
                        email
                        name
                        position
                    }
                }
                mainMenuOptions {
                    footer {
                        footerCopyright
                        footerLink {
                            target
                            title
                            url
                        }
                        footerLink2 {
                            target
                            title
                            url
                        }
                        footerLogo {
                            mediaItemUrl
                        }
                    }
                    header {
                        ctaBannerLink {
                            target
                            title
                            url
                        }
                        ctaHeading
                        topCtaButton {
                            target
                            title
                            url
                        }
                    }
                }
                socialMediaLinks {
                    link
                    social
                }
                upcomingEventsCta {
                    heading
                    cta {
                        title
                        target
                        url
                    }
                    background {
                        mediaItemUrl
                    }
                }
            }
        }
        menus {
            nodes {
                key: databaseId
                name
                slug
                locations
                menuItems(first: 1000) {
                    nodes {
                        key: databaseId
                        title: label
                        target
                        path
                        url
                        parentId: parentDatabaseId
                        label
                    }
                }
            }
        }
        contactCard {
            acf_contact_cards {
                fieldGroupName
                mainHeading
                topHeading
                contactCards {
                    address
                    fieldGroupName
                    location
                    phoneNumber1
                    phoneNumber2
                    directionsLink {
                        target
                        title
                        url
                    }
                }
            }
        }
        insightsCarousel {
            acf_insights_carousel {
                cta {
                    target
                    title
                    url
                }
                fieldGroupName
                mainHeading
                topHeading
            }
        }
        recentAwards {
            acf_recent_awards {
                fieldGroupName
                mainHeading
                topHeading
                selectCustomAwards {
                    ... on Award {
                        awardId
                    }
                }
                styleOptions {
                    background {
                        ... on Themeasset {
                            themeassetId
                        }
                    }
                    fieldGroupName
                    lightDark
                }
                cta {
                    target
                    title
                    url
                }
            }
        }
        gdrpCookieNotice {
            acf_options_GDPR {
                gdprFixedFooter {
                    gdprDescription
                }
                gdprModal {
                    necessaryCookiesDescription
                    nonNecessaryCookiesDescription
                    privacyPolicy
                }
            }
        }
        footerCtaModule {
            acf_cta_module {
                cta {
                    target
                    title
                    url
                }
                heading
                styleOptions {
                    lightdark
                    styleFluidWidth
                    backgroundImage {
                        altText
                        mediaItemUrl
                    }
                }
            }
        }
        numberModule {
            acf_number_module {
                mainHeading
                numberGrid {
                    content
                    heading
                    number
                    suffix
                }
                styleOptions {
                    background {
                        ... on Themeasset {
                            id
                            acf_post_type_theme_assets {
                                class
                            }
                        }
                    }
                    lightDark
                }
                topHeading
            }
        }
        iconContentGrid {
            acf_icon_content_grid {
                mainHeading
                sectionContent
                topHeading
                styleOptions {
                    background {
                        ... on Themeasset {
                            id
                            acf_post_type_theme_assets {
                                class
                            }
                        }
                    }
                    lightDark
                }
                grid {
                    content
                    heading
                    icon {
                        ... on Themeasset {
                            id
                            acf_post_type_theme_assets {
                                class
                            }
                        }
                    }
                    link {
                        target
                        title
                        url
                    }
                }
            }
        }
        ctaModule {
            acf_cta_module {
                heading
                cta {
                    target
                    title
                    url
                }
                styleOptions {
                    lightdark
                    styleFluidWidth
                    backgroundImage {
                        mediaItemUrl
                    }
                }
            }
        }
        greenhouseApiOptions {
            acf_greenhouse_api {
                greenhouseJsonData
            }
        }
        contentNodes(
            first: 50000
            where: { contentTypes: [POST], status: PUBLISH }
        ) {
            nodes {
                uri
                ... on Post {
                    title
                    excerpt
                    date
                    postId
                    seo {
                        canonical
                        title
                        opengraphModifiedTime
                        opengraphType
                        opengraphImage {
                            sourceUrl
                            altText
                            mediaDetails {
                                width
                                height
                            }
                        }
                        opengraphDescription
                        opengraphAuthor
                        opengraphTitle
                        metaDesc
                        breadcrumbs {
                            url
                            text
                        }
                    }
                    categories {
                        edges {
                            node {
                                categoryId
                                name
                                id
                                slug
                            }
                        }
                    }
                    featuredImage {
                        node {
                            mediaItemUrl
                            srcSet
                            altText
                        }
                    }
                }
            }
        }
        homeSeoContent: contentNode(id: "/", idType: URI) {
            ... on Page {
                seo {
                    opengraphImage {
                        sourceUrl
                        altText
                        mediaDetails {
                            width
                            height
                        }
                    }
                }
            }
        }
        categories(first: 50000) {
            nodes {
                name
                id
                slug
                parentId: parentDatabaseId
                key: databaseId
            }
        }
    }
`;

export default GET_INSIGHTS;
