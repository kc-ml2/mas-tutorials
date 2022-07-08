import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'
import { GA_TRACKING_ID } from '../lib/gtag'

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {

    return (
        <>
            <Head>
                <title>MAS Tutorial</title>
                <link rel="icon" href="/favicon.png" />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                    crossOrigin="anonymous"
                />
                <link rel="shortcut icon" href="/favicon.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
                {/* code theme  */}
                <link href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-one-light.css" rel="stylesheet" />
                {/* Global site tag (gtag.js) - Google Analytics  */}
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                    });
                    `,
                    }}
                />
            </Head>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    )
}