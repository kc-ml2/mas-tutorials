import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'

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
                {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" /> */}
            </Head>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    )
}