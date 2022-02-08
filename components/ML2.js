import React from 'react'
import Image from 'next/image'
import logo from '../public/Nav/logo.png'
import styles from '../styles/ML2.module.scss'
import button from '../styles/Button.module.scss'

export default function ML2() {

    return (
        <div className={styles.ML2}>
            <a href="https://www.kc-ml2.com" target="_blank" rel="noreferrer">
                <Image src={logo} alt="logo" width="95" height="95" />
                <button className={button.ML2}>ML2 방문하기</button>
            </a>
        </div>
    )
}