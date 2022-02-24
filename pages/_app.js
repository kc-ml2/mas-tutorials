/* eslint-disable react/prop-types */
import React from 'react'
import '../styles/globals.scss'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
