import React, { useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import styles from '../styles/main.module.scss'
import Image from 'next/image'

export default function Home() {
  useEffect(() => {
    if ('caches' in window) {
      caches.keys().then((names) => {
        // Delete all the cache files
        names.forEach(name => {
          caches.delete(name)
        })
      })
    }
  }, [])

  return (
    <div className={styles.main}>
      <Row id={styles.row}>
        <Col md="5">
          <Image src="https://ml2blogpost.s3.ap-northeast-2.amazonaws.com/snakeleaderboard/SNL_logo.gif" width="300" height="300" alt="gif" />
        </Col>
        <Col md="7">
          <h2>Snake Game을 통해 보는</h2>
          <h1>멀티에이전트<br></br>강화학습 튜토리얼</h1>
          <br></br>
          <span>
            머신러닝 연구소 <a href="https://www.kc-ml2.com" target="_blank" rel="noreferrer">KC-ML2</a>에서 제작한 강화학습 튜토리얼 입니다.
            <br></br>
            Snake Game과 함께하는 멀티에이전트 강화학습 공부 지금 시작해보세요!
          </span>
        </Col>
      </Row>
    </div>
  )

}
