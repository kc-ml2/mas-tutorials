import React from 'react'
import Image from 'next/image'
import logo from '../public/Footer/logo.png'
import facebook from '../public/Footer/facebook.png'
import insta from '../public/Footer/insta.png'
import github from '../public/Footer/github.png'
import linkedin from '../public/Footer/linkedin.png'
import styles from '../styles/Footer.module.scss'

export default function Footer() {
  return (
    <section className={styles.container}>
      <footer className={styles.footer}>
        <section className={styles.one}>
          <Image
            src={logo}
            alt="logo"
            width="224"
            height="24.03"
            priority={true}
          ></Image>
        </section>
        <section className={styles.two}>
          <div>©COPYRIGHT 2022 KC-ML2. All Rights Reserved.</div>
        </section>
        <section className={styles.three}>
          <a
            href="https://www.facebook.com/KCML2/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={facebook}
              alt="logo"
              width="24"
              height="24"
              priority={true}
            ></Image>
          </a>

          <a
            href="https://www.instagram.com/ml2_machinelearninglab/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={insta}
              alt="logo"
              width="24"
              height="24"
              priority={true}
            ></Image>
          </a>

          <a
            href="https://www.linkedin.com/company/kc-ml2/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={linkedin}
              alt="logo"
              width="24"
              height="24"
              priority={true}
            ></Image>
          </a>
          <a href="https://github.com/kc-ml2" target="_blank" rel="noreferrer">
            <Image
              src={github}
              alt="logo"
              width="24"
              height="24"
              priority={true}
            ></Image>
          </a>
        </section>
      </footer>
    </section>
  )
}
