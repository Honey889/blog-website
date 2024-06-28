/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

// import type { Metadata } from "next";
// import type  { Viewport } from "next";
// import { metadata as studioMetadata } from "next-sanity/studio/metadata";
// import { viewport as studioViewport } from "next-sanity/studio/viewport"; 


// import { NextStudio } from 'next-sanity/studio'
// import config from '../../../../sanity.config'


// import Studio from './Studio'

// export const dynamic = 'force-static'

// export { metadata, viewport } from 'next-sanity/studio'

// export default function StudioPage() {
//   return (
//     <Studio/>
//   )
// }





// ./src/app/studio/[[...index]]/page.tsx
import type {Metadata, Viewport} from 'next'
import {metadata as studioMetadata, viewport as studioViewport} from 'next-sanity/studio'

import Studio from './Studio'

// Set the right `viewport`, `robots` and `referer` meta tags
export const metadata: Metadata = {
  ...studioMetadata,
  // Overrides the title until the Studio is loaded
  title: 'Loading Studio…',
}

export const viewport: Viewport = {
  ...studioViewport,
  // Overrides the viewport to resize behavior
  interactiveWidget: 'resizes-content',
}

export default function StudioPage() {
  return <Studio />
}