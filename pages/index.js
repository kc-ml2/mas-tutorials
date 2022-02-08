import { Row, Col } from 'reactstrap'
import styles from '../styles/main.module.scss'

export default function Home() {
  return (
    <>
      <Row className={styles.main}>
        <Col>
          <h2>Snake Game을 통해 보는</h2>
          <h1>멀티에이전트<br></br>강화학습 튜토리얼</h1>
          <p>머신러닝 연구소 <a href="https://www.kc-ml2.com" target="_blank" rel="noreferrer">KC-ML2</a>에서 제작한 강화학습 튜토리얼 입니다.</p>
          <p>Snake Game과 함께하는 멀티에이전트 강화학습 공부 지금 시작해보세요!</p>
        </Col>
      </Row>
    </>
  )

}


