import React, { useEffect } from 'react'
import styles from '../styles/main.module.scss'
import buttons from '../styles/Button.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'

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

  const router = useRouter()

  return (
    <div id={styles.row}>
      <div className={styles.giflogo}>
        <a href="https://www.kc-ml2.com" target="_blank" rel="noreferrer">
          <Image src="https://mas-tutorials.s3.ap-northeast-2.amazonaws.com/MAS_main.gif" width="350" height="350" alt="gif" />
        </a>
      </div>
      <div className={styles.description}>
        <section className={styles.title}>
          <p id={styles.snakegame}>Snake Game을 통해 보는</p>
          <p id={styles.multiagent}>멀티 에이전트</p>
          <p id={styles.tutorial}>강화학습 튜토리얼</p>
        </section>
        <br></br>
        <section className={styles.text}>
          <span>
            머신러닝 연구소 <a href="https://www.kc-ml2.com" target="_blank" rel="noreferrer">KC-ML2</a>에서 제작한 강화학습 튜토리얼 입니다.
            <br></br>
            Snake Game과 함께하는 멀티에이전트 강화학습 공부 지금 시작해보세요!
          </span>
        </section>
        <br></br>
        <sectin className={styles.button}>
          <button
            className={buttons.index}
            onClick={() => router.push('/posts/learn-1intro')}>
            배우기
          </button>
          <button
            className={buttons.index}
            onClick={() => router.push('/posts/game-1intro')}>
            응용하기
          </button>
          <button
            className={buttons.index}>
            <a href="https://blog.diyaml.com/teampost/MARL/" target="_blank" rel="noreferrer">
              이용사례
            </a>
          </button>
        </sectin>
      </div>
    </div>
  )

}
