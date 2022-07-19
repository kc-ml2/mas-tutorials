import React from 'react'
import Image from 'next/image'
import logo from '../public/favicon2.png'
import styles from '../styles/ML2.module.scss'
import button from '../styles/Button.module.scss'

export default function ML2() {

    return (
        <div className={styles.ML2}>
            <a href="https://www.kc-ml2.com/?utm_source=mastutorial&utm_medium=cpc&utm_campaign=mastutorial_to_ml2&utm_id=mastutorial_to_ml2" target="_blank" rel="noreferrer">
                <Image src={logo} alt="logo" width="93.3" height="70" />
                <button className={button.ML2}>ML2 방문하기</button>
            </a>
        </div>
    )
}