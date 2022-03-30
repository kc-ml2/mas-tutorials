/* eslint-disable react/prop-types */
import React from 'react'
import '../styles/globals.scss'
import Layout from '../components/Layout'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo
        canonical="https://tutorials.kc-ml2.com/"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          description: '머신러닝 연구소 KC-ML2에서 제작한 강화학습 튜토리얼 입니다.',
          // images: [
          //   {
          //     url: 'https://ml2blogpost.s3.ap-northeast-2.amazonaws.com/og.png',
          //     width: 600,
          //     height: 314,
          //     alt: 'ML2',
          //   },
          // ],
          site_name: 'Multi-Agent RL Tutorials',
        }}
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
