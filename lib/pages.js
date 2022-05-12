import { GraphQLClient, gql } from 'graphql-request';
import { createAuthToken } from '../util/auth';

import GET_INSIGHTS from './queries/GET_INSIGHTS';
import GET_NEWS from './queries/GET_NEWS';
import GET_AWARDS from './queries/GET_AWARDS';
import GET_EVENTS from './queries/GET_EVENTS';

export async function getInsights() {
    const headers = {};

    if (process.env.HTTP_AUTH_REQUIRED) {
        headers.authorization = createAuthToken();
    }

    const graphQLClient = new GraphQLClient(process.env.GRAPHQL_ENDPOINT, {
        headers
    });

    const results = await graphQLClient.request(GET_INSIGHTS);

    return results;
}
export async function getNews() {
    const headers = {};

    if (process.env.HTTP_AUTH_REQUIRED) {
        headers.authorization = createAuthToken();
    }

    const graphQLClient = new GraphQLClient(process.env.GRAPHQL_ENDPOINT, {
        headers
    });

    const results = await graphQLClient.request(GET_NEWS);

    return results;
}
export async function getAwards() {
    const headers = {};

    if (process.env.HTTP_AUTH_REQUIRED) {
        headers.authorization = createAuthToken();
    }

    const graphQLClient = new GraphQLClient(process.env.GRAPHQL_ENDPOINT, {
        headers
    });

    const results = await graphQLClient.request(GET_AWARDS);

    return results;
}
export async function getEvents() {
    const headers = {};

    if (process.env.HTTP_AUTH_REQUIRED) {
        headers.authorization = createAuthToken();
    }

    const graphQLClient = new GraphQLClient(process.env.GRAPHQL_ENDPOINT, {
        headers
    });

    const results = await graphQLClient.request(GET_EVENTS);

    return results;
}

export async function getPages() {
    const query = gql`
            query GetContentNodes {
                contentNodes(
                    first: 50000
                    where: { contentTypes: [PAGE, POST, AWARDS, NEWS, EVENTS] }
                ) {
                    nodes {
                        uri

                        ... on Award {
                            seo {
                                canonical
                                title
                                opengraphModifiedTime
                            }
                        }

                        ... on Post {
                            seo {
                                canonical
                                title
                                opengraphModifiedTime
                            }
                        }
                        ... on Event {
                            seo {
                                canonical
                                title
                                opengraphModifiedTime
                            }
                        }
                        ... on News {
                            seo {
                                canonical
                                title
                                opengraphModifiedTime
                            }
                        }

                        ... on Page {
                            seo {
                                canonical
                                title
                                opengraphModifiedTime
                            }
                            perPageFields {
                                customJavascript
                            }
                        }
                    }
                }
            }
        `,
        headers = {};

    if (process.env.HTTP_AUTH_REQUIRED) {
        headers.authorization = createAuthToken();
    }

    const graphQLClient = new GraphQLClient(process.env.GRAPHQL_ENDPOINT, {
        headers
    });

    const results = await graphQLClient.request(query);

    return results.contentNodes.nodes;
}

export async function getPage(uri, postId = null) {
    const query =
            postId === null
                ? gql`
                      fragment BlockFields on Block {
                          attributesJSON
                          name
                      }

                      query GetContentNode(
                          $idType: ContentNodeIdTypeEnum!
                          $id: ID!
                      ) {
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
                          contentNode(idType: $idType, id: $id) {
                              ... on Page {
                                  id
                                  title
                                  blocksJSON
                                  slug
                                  link
                                  optionHideCta {
                                      hideCtaModule
                                  }
                                  acf_post_event {
                                      eventLink {
                                          target
                                          title
                                          url
                                      }
                                      eventLocation
                                      eventDate
                                      eventSubTitle
                                      eventSidebarFreeText
                                      enableEvent
                                      eventTitle
                                      eventType
                                      eventSidebar
                                      eventFooterText
                                      eventCtaBackground {
                                          mediaItemUrl
                                      }
                                  }
                                  blocks {
                                      ...BlockFields
                                      innerBlocks {
                                          ...BlockFields
                                          innerBlocks {
                                              ...BlockFields
                                              innerBlocks {
                                                  ...BlockFields
                                                  innerBlocks {
                                                      ...BlockFields
                                                  }
                                              }
                                          }
                                      }
                                  }
                                  acf_page_layout {
                                      pageLayout
                                  }
                                  contentType {
                                      node {
                                          name
                                      }
                                  }
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
                                      metaKeywords
                                      metaRobotsNofollow
                                      metaRobotsNoindex
                                      breadcrumbs {
                                          url
                                          text
                                      }
                                  }
                                  perPageFields {
                                      customJavascript
                                  }
                              }

                              ... on Post {
                                  id
                                  title
                                  blocksJSON
                                  date
                                  link
                                  categories {
                                      nodes {
                                          name
                                          slug
                                      }
                                  }
                                  postFields {
                                      layoutType
                                      mediaContactHide
                                  }
                                  optionHideCta {
                                      hideCtaModule
                                  }
                                  mediaContact {
                                      mediaContactSettings {
                                          company
                                          email
                                          fieldGroupName
                                          name
                                          phone
                                          position
                                      }
                                  }
                                  slug
                                  blocks {
                                      ...BlockFields
                                      innerBlocks {
                                          ...BlockFields
                                          innerBlocks {
                                              ...BlockFields
                                              innerBlocks {
                                                  ...BlockFields
                                                  innerBlocks {
                                                      ...BlockFields
                                                  }
                                              }
                                          }
                                      }
                                  }

                                  contentType {
                                      node {
                                          name
                                      }
                                  }
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
                              }
                              ... on Event {
                                  id
                                  title
                                  blocksJSON
                                  date
                                  link

                                  postFields {
                                      layoutType
                                      mediaContactHide
                                  }
                                  optionHideCta {
                                      hideCtaModule
                                  }

                                  slug
                                  acf_post_event {
                                      eventLink {
                                          target
                                          title
                                          url
                                      }
                                      eventLocation
                                      eventDate
                                      eventSubTitle
                                      eventSidebarFreeText

                                      enableEvent
                                      eventTitle
                                      eventType
                                      eventSidebar
                                      eventFooterText
                                      eventCtaBackground {
                                          mediaItemUrl
                                      }
                                  }
                                  blocks {
                                      ...BlockFields
                                      innerBlocks {
                                          ...BlockFields
                                          innerBlocks {
                                              ...BlockFields
                                              innerBlocks {
                                                  ...BlockFields
                                                  innerBlocks {
                                                      ...BlockFields
                                                  }
                                              }
                                          }
                                      }
                                  }

                                  contentType {
                                      node {
                                          name
                                      }
                                  }
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
                              }
                              ... on News {
                                  id
                                  title
                                  blocksJSON
                                  date
                                  link
                                  newsTypes {
                                      nodes {
                                          name
                                          slug
                                      }
                                  }
                                  postFields {
                                      layoutType
                                      mediaContactHide
                                  }
                                  optionHideCta {
                                      hideCtaModule
                                  }
                                  mediaContact {
                                      mediaContactSettings {
                                          company
                                          email
                                          fieldGroupName
                                          name
                                          phone
                                          position
                                      }
                                  }
                                  slug
                                  blocks {
                                      ...BlockFields
                                      innerBlocks {
                                          ...BlockFields
                                          innerBlocks {
                                              ...BlockFields
                                              innerBlocks {
                                                  ...BlockFields
                                                  innerBlocks {
                                                      ...BlockFields
                                                  }
                                              }
                                          }
                                      }
                                  }

                                  contentType {
                                      node {
                                          name
                                      }
                                  }
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
                              }

                              ... on Award {
                                  id
                                  title
                                  date
                                  slug
                                  postFields {
                                      layoutType
                                      mediaContactHide
                                  }
                                  blocks {
                                      ...BlockFields
                                      innerBlocks {
                                          ...BlockFields
                                          innerBlocks {
                                              ...BlockFields
                                              innerBlocks {
                                                  ...BlockFields
                                                  innerBlocks {
                                                      ...BlockFields
                                                  }
                                              }
                                          }
                                      }
                                  }
                                  contentType {
                                      node {
                                          name
                                      }
                                  }
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
                              }
                          }
                      }
                  `
                : gql`
                      fragment BlockFields on Block {
                          attributesJSON
                          name
                      }

                      query GetContentNode(
                          $idType: ContentNodeIdTypeEnum!
                          $id: ID!
                      ) {
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
                          contentNode(idType: $idType, id: $id) {
                              ... on Page {
                                  revisions(first: 1, before: null) {
                                      nodes {
                                          id
                                          title
                                          blocksJSON
                                          slug
                                          link
                                          optionHideCta {
                                              hideCtaModule
                                          }
                                          acf_page_layout {
                                              pageLayout
                                          }
                                          acf_post_event {
                                              eventLink {
                                                  target
                                                  title
                                                  url
                                              }
                                              eventLocation
                                              eventDate
                                              eventSubTitle
                                              eventSidebarFreeText

                                              enableEvent
                                              eventTitle
                                              eventType
                                              eventSidebar
                                              eventFooterText
                                              eventCtaBackground {
                                                  mediaItemUrl
                                              }
                                          }
                                          blocks {
                                              ...BlockFields
                                              innerBlocks {
                                                  ...BlockFields
                                                  innerBlocks {
                                                      ...BlockFields
                                                      innerBlocks {
                                                          ...BlockFields
                                                          innerBlocks {
                                                              ...BlockFields
                                                          }
                                                      }
                                                  }
                                              }
                                          }
                                          contentType {
                                              node {
                                                  name
                                              }
                                          }
                                      }
                                  }
                              }

                              ... on Post {
                                  revisions(first: 1, before: null) {
                                      nodes {
                                          id
                                          title
                                          blocksJSON
                                          date
                                          link
                                          categories {
                                              nodes {
                                                  name
                                                  slug
                                              }
                                          }
                                          postFields {
                                              layoutType
                                              mediaContactHide
                                          }
                                          optionHideCta {
                                              hideCtaModule
                                          }
                                          mediaContact {
                                              mediaContactSettings {
                                                  company
                                                  email
                                                  fieldGroupName
                                                  name
                                                  phone
                                                  position
                                              }
                                          }
                                          slug
                                          blocks {
                                              ...BlockFields
                                              innerBlocks {
                                                  ...BlockFields
                                                  innerBlocks {
                                                      ...BlockFields
                                                      innerBlocks {
                                                          ...BlockFields
                                                          innerBlocks {
                                                              ...BlockFields
                                                          }
                                                      }
                                                  }
                                              }
                                          }
                                          contentType {
                                              node {
                                                  name
                                              }
                                          }
                                      }
                                  }
                              }
                              ... on Event {
                                  revisions(first: 1, before: null) {
                                      nodes {
                                          id
                                          title
                                          blocksJSON
                                          date
                                          link
                                          acf_post_event {
                                              eventLink {
                                                  target
                                                  title
                                                  url
                                              }
                                              eventLocation
                                              eventDate
                                              eventSubTitle
                                              eventSidebarFreeText

                                              enableEvent
                                              eventTitle
                                              eventType
                                              eventSidebar
                                              eventFooterText
                                              eventCtaBackground {
                                                  mediaItemUrl
                                              }
                                          }
                                          postFields {
                                              layoutType
                                              mediaContactHide
                                          }
                                          optionHideCta {
                                              hideCtaModule
                                          }

                                          slug
                                          blocks {
                                              ...BlockFields
                                              innerBlocks {
                                                  ...BlockFields
                                                  innerBlocks {
                                                      ...BlockFields
                                                      innerBlocks {
                                                          ...BlockFields
                                                          innerBlocks {
                                                              ...BlockFields
                                                          }
                                                      }
                                                  }
                                              }
                                          }
                                          contentType {
                                              node {
                                                  name
                                              }
                                          }
                                      }
                                  }
                              }
                              ... on News {
                                  revisions(first: 1, before: null) {
                                      nodes {
                                          id
                                          title
                                          blocksJSON
                                          date
                                          link
                                          newsTypes {
                                              nodes {
                                                  name
                                                  slug
                                              }
                                          }
                                          postFields {
                                              layoutType
                                              mediaContactHide
                                          }
                                          optionHideCta {
                                              hideCtaModule
                                          }
                                          mediaContact {
                                              mediaContactSettings {
                                                  company
                                                  email
                                                  fieldGroupName
                                                  name
                                                  phone
                                                  position
                                              }
                                          }
                                          slug
                                          blocks {
                                              ...BlockFields
                                              innerBlocks {
                                                  ...BlockFields
                                                  innerBlocks {
                                                      ...BlockFields
                                                      innerBlocks {
                                                          ...BlockFields
                                                          innerBlocks {
                                                              ...BlockFields
                                                          }
                                                      }
                                                  }
                                              }
                                          }
                                          contentType {
                                              node {
                                                  name
                                              }
                                          }
                                      }
                                  }
                              }

                              ... on Award {
                                  id
                                  title
                                  date
                                  slug
                                  postFields {
                                      layoutType
                                      mediaContactHide
                                  }
                                  blocks {
                                      ...BlockFields
                                      innerBlocks {
                                          ...BlockFields
                                          innerBlocks {
                                              ...BlockFields
                                              innerBlocks {
                                                  ...BlockFields
                                                  innerBlocks {
                                                      ...BlockFields
                                                  }
                                              }
                                          }
                                      }
                                  }
                                  contentType {
                                      node {
                                          name
                                      }
                                  }
                              }
                          }
                      }
                  `,
        variables = {
            idType: postId ? 'DATABASE_ID' : 'URI',
            id: postId ? postId : uri
        },
        headers = {};

    const graphQLClient = new GraphQLClient(process.env['GRAPHQL_ENDPOINT'], {
        headers
    });

    if (postId) {
        const loginMutation = gql`
            mutation LoginUser {
                login(input: {
                    clientMutationId: "uniqueId",
                    username: "${process.env.WORDPRESS_USERNAME}",
                    password: "${process.env.WORDPRESS_PASSWORD}"
                }) {
                    authToken
                    user {
                        id
                        name
                    }
                }
            }
        `;

        try {
            const authResult = await graphQLClient.request(
                loginMutation,
                {},
                headers
            );

            if (!authResult?.login?.authToken) {
                return null;
            }

            headers['Authorization'] = `Bearer ${authResult.login.authToken}`;
        } catch (err) {
            console.error(`Failed to login: ${err}`);
            return null;
        }
    }

    const results = await graphQLClient.request(query, variables, headers);
    if (postId && results?.contentNode?.revisions?.nodes?.length) {
        return {
            ...results,
            contentNode: results.contentNode.revisions.nodes[0]
        };
    }

    return results;
}
