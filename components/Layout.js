/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout({ children }) {

    return (
        <>
            <Head>
                <title>Tutorials</title>
                <link rel="icon" href="/favicon.png" />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                    crossOrigin="anonymous"
                />
                <link rel="shortcut icon" href="/favicon.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
            </Head>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    )
}