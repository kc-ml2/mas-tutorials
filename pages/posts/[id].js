/* eslint-disable @next/next/no-sync-scripts */
import { getAllPostIds, getPostData, getLearnPostsData, getGamePostsData } from '../../lib/posts'
import styles from '../../styles/Posts.module.scss'
import Toc from '../../components/TOC'
import ML2 from '../../components/ML2'
import { Row, Col } from 'reactstrap'



export default function Post({ postData, allPostsData, allPostsData_game }) {

    // blog, career에 따라 UI 다르게 만듦
    function LearnPosts() {

        if (postData.type === "learn") {

            const pre = allPostsData[Object.keys(allPostsData).filter(id => allPostsData[id].id === postData.id)].order - 1
            const next = allPostsData[Object.keys(allPostsData).filter(id => allPostsData[id].id === postData.id)].order + 1

            const prePosts = allPostsData[Object.keys(allPostsData).filter(order => allPostsData[order].order === pre)]
            const nextPosts = allPostsData[Object.keys(allPostsData).filter(order => allPostsData[order].order === next)]

            var currentTitle = allPostsData[Object.keys(allPostsData).filter(id => allPostsData[id].id === postData.id)].title
            console.log(currentTitle)

            if (prePosts !== undefined) {
                var preTitle = allPostsData[Object.keys(allPostsData).filter(order => allPostsData[order].order === pre)].title
                var preId = allPostsData[Object.keys(allPostsData).filter(order => allPostsData[order].order === pre)].id
            }

            if (nextPosts !== undefined) {
                var nextTitle = allPostsData[Object.keys(allPostsData).filter(order => allPostsData[order].order === next)].title
                var nextId = allPostsData[Object.keys(allPostsData).filter(order => allPostsData[order].order === next)].id
            }

            return (
                <Row className={styles.postAll}>
                    <Col md="3" className={styles.TOC}>
                        <Toc content={postData.fileContents} type={"배우기"} cate={postData.cate} currentTitle={currentTitle} />
                    </Col>
                    <Col md="8">
                        <article className={styles.post}>
                            <div
                                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                            />
                            <hr></hr>
                            <Row>
                                {preTitle && (
                                    <Col md="6">
                                        <a href={`/posts/${preId}`}>{preTitle}</a>
                                    </Col>
                                )}
                                {nextTitle && (
                                    <Col md="6" className={styles.right}>
                                        <a href={`/posts/${nextId}`}>{nextTitle}</a>
                                    </Col>
                                )}
                            </Row>
                        </article>

                    </Col>
                    <Col md="1">
                        <ML2 />
                    </Col>
                </Row>
            )
        } else {
            return (<></>)
        }
    }

    function GamePosts() {

        if (postData.type === "game") {

            const pre = allPostsData_game[Object.keys(allPostsData_game).filter(id => allPostsData_game[id].id === postData.id)].order - 1
            const next = allPostsData_game[Object.keys(allPostsData_game).filter(id => allPostsData_game[id].id === postData.id)].order + 1

            const prePosts = allPostsData_game[Object.keys(allPostsData_game).filter(order => allPostsData_game[order].order === pre)]
            const nextPosts = allPostsData_game[Object.keys(allPostsData_game).filter(order => allPostsData_game[order].order === next)]

            var currentTitle = allPostsData_game[Object.keys(allPostsData_game).filter(id => allPostsData_game[id].id === postData.id)].title

            if (prePosts !== undefined) {
                var preTitle = allPostsData_game[Object.keys(allPostsData_game).filter(order => allPostsData_game[order].order === pre)].title
                var preId = allPostsData_game[Object.keys(allPostsData_game).filter(order => allPostsData_game[order].order === pre)].id
            }

            if (nextPosts !== undefined) {
                var nextTitle = allPostsData_game[Object.keys(allPostsData_game).filter(order => allPostsData_game[order].order === next)].title
                var nextId = allPostsData_game[Object.keys(allPostsData_game).filter(order => allPostsData_game[order].order === next)].id
            }

            return (
                <Row className={styles.postAll}>
                    <Col md="3" className={styles.TOC}>
                        <Toc content={postData.fileContents} type={"응용하기"} cate={postData.cate} currentTitle={currentTitle} />
                    </Col>
                    <Col md="8">
                        <article className={styles.post}>
                            <div
                                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                            />
                            <hr></hr>
                            <Row>
                                {preTitle && (
                                    <Col md="6">
                                        <a href={`/posts/${preId}`}>{preTitle}</a>
                                    </Col>
                                )}
                                {nextTitle && (
                                    <Col md="6" className={styles.right}>
                                        <a href={`/posts/${nextId}`}>{nextTitle}</a>
                                    </Col>
                                )}
                            </Row>
                        </article>
                    </Col>
                    <Col md="1">
                        <ML2 />
                    </Col>
                </Row>
            )
        } else {
            return (<></>)
        }
    }



    return (
        <>
            <LearnPosts ></LearnPosts>
            <GamePosts></GamePosts>
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    const allPostsData = await getLearnPostsData()
    const allPostsData_game = await getGamePostsData()

    return {
        props: {
            postData,
            allPostsData,
            allPostsData_game
        }
    }
}
