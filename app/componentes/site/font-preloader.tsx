import React from 'react'

export default function FontPreloader() {
  return (
    <>
        <link
        rel="preload"
        href="/fonts/Satoshi-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        />
        <link
        rel="preload"
        href="/fonts/Satoshi-Bold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        />
        <link
        rel="preload"
        href="/fonts/Satoshi-Black.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        />
        <link
        rel="preload"
        href="/fonts/Satoshi-Medium.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        />
    </>
  )
}
