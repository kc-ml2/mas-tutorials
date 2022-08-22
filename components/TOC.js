import React, { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { useIntersectionObserver } from '../lib/useIntersectionObserver'
import { ListGroup, ListGroupItem } from 'reactstrap'
import styles from '../styles/TOC.module.scss'
import { LEARN_TITLE_ONE, LEARN_TITLE_TWO, LEARN_TITLE_THREE, LEARN_TITLE_FOUR, GAME_TITLE_ONE, GAME_TITLE_TWO } from '../utils/const'
import MINITOC from './MINITOC'
// eslint-disable-next-line react/prop-types
const Toc = ({ content, type, cate, currentTitle }) => {

    const Chapter = () => {
        if (type === '배우기') {
            if (cate === 'CH1' && currentTitle.slice(0, 3) === '1. ') {
                return (
                    <>
                        <MINITOC content={content} />
                        <p><a href='/posts/learn-1.1' id={styles.chapter}>{LEARN_TITLE_ONE.TWO}</a></p>
                        <p><a href='/posts/learn-1.2' id={styles.chapter}>{LEARN_TITLE_ONE.THREE}</a></p>
                        <p><a href='/posts/learn-1.3' id={styles.chapter}>{LEARN_TITLE_ONE.FOUR}</a></p>
                    </>
                )
            } else if (cate === 'CH1' && currentTitle.slice(0, 3) === '1.1') {
                return (
                    <>
                        <p><a href='/posts/learn-1intro' id={styles.chapter}>{LEARN_TITLE_ONE.ONE}</a></p>
                        <MINITOC content={content} />
                        <p><a href='/posts/learn-1.2' id={styles.chapter}>{LEARN_TITLE_ONE.THREE}</a></p>
                        <p><a href='/posts/learn-1.3' id={styles.chapter}>{LEARN_TITLE_ONE.FOUR}</a></p>
                    </>
                )
            } else if (cate === 'CH1' && currentTitle.slice(0, 3) === '1.2') {
                return (
                    <>
                        <p><a href='/posts/learn-1intro' id={styles.chapter}>{LEARN_TITLE_ONE.ONE}</a></p>
                        <p><a href='/posts/learn-1.1' id={styles.chapter}>{LEARN_TITLE_ONE.TWO}</a></p>
                        <MINITOC content={content} />
                        <p><a href='/posts/learn-1.3' id={styles.chapter}>{LEARN_TITLE_ONE.FOUR}</a></p>
                    </>
                )
            } else if (cate === 'CH1' && currentTitle.slice(0, 3) === '1.3') {
                return (
                    <>
                        <p><a href='/posts/learn-1intro' id={styles.chapter}>{LEARN_TITLE_ONE.ONE}</a></p>
                        <p><a href='/posts/learn-1.1' id={styles.chapter}>{LEARN_TITLE_ONE.TWO}</a></p>
                        <p><a href='/posts/learn-1.2' id={styles.chapter}>{LEARN_TITLE_ONE.THREE}</a></p>
                        <MINITOC content={content} />
                    </>
                )
            } else if (cate === 'CH2' && currentTitle.slice(0, 3) === '2. ') {
                return (
                    <>
                        <MINITOC content={content} />
                        <p><a href='/posts/learn-2.1' id={styles.chapter}>{LEARN_TITLE_TWO.TWO}</a></p>
                        <p><a href='/posts/learn-2.2' id={styles.chapter}>{LEARN_TITLE_TWO.THREE}</a></p>
                        <p><a href='/posts/learn-2.3' id={styles.chapter}>{LEARN_TITLE_TWO.FOUR}</a></p>
                    </>
                )
            } else if (cate === 'CH2' && currentTitle.slice(0, 3) === '2.1') {
                return (
                    <>
                        <p><a href='/posts/learn-2intro' id={styles.chapter}>{LEARN_TITLE_TWO.ONE}</a></p>
                        <MINITOC content={content} />
                        <p><a href='/posts/learn-2.2' id={styles.chapter}>{LEARN_TITLE_TWO.THREE}</a></p>
                        <p><a href='/posts/learn-2.3' id={styles.chapter}>{LEARN_TITLE_TWO.FOUR}</a></p>
                    </>
                )
            } else if (cate === 'CH2' && currentTitle.slice(0, 3) === '2.2') {
                return (
                    <>
                        <p><a href='/posts/learn-2intro' id={styles.chapter}>{LEARN_TITLE_TWO.ONE}</a></p>
                        <p><a href='/posts/learn-2.1' id={styles.chapter}>{LEARN_TITLE_TWO.TWO}</a></p>
                        <MINITOC content={content} />
                        <p><a href='/posts/learn-2.3' id={styles.chapter}>{LEARN_TITLE_TWO.FOUR}</a></p>
                    </>
                )
            } else if (cate === 'CH2' && currentTitle.slice(0, 3) === '2.3') {
                return (
                    <>
                        <p><a href='/posts/learn-2intro' id={styles.chapter}>{LEARN_TITLE_TWO.ONE}</a></p>
                        <p><a href='/posts/learn-2.1' id={styles.chapter}>{LEARN_TITLE_TWO.TWO}</a></p>
                        <p><a href='/posts/learn-2.2' id={styles.chapter}>{LEARN_TITLE_TWO.THREE}</a></p>
                        <MINITOC content={content} />
                    </>
                )

            } else if (cate === 'CH3' && currentTitle.slice(0, 3) === '3. ') {
                return (
                    <>
                        <MINITOC content={content} />
                        <p><a href='/posts/learn-3.1' id={styles.chapter}>{LEARN_TITLE_THREE.TWO}</a></p>
                        <p><a href='/posts/learn-3.2' id={styles.chapter}>{LEARN_TITLE_THREE.THREE}</a></p>
                        <p><a href='/posts/learn-3.3' id={styles.chapter}>{LEARN_TITLE_THREE.FOUR}</a></p>
                        <p><a href='/posts/learn-3.4' id={styles.chapter}>{LEARN_TITLE_THREE.FIVE}</a></p>
                    </>
                )
            } else if (cate === 'CH3' && currentTitle.slice(0, 3) === '3.1') {
                return (
                    <>
                        <p><a href='/posts/learn-3intro' id={styles.chapter}>{LEARN_TITLE_THREE.ONE}</a></p>
                        <MINITOC content={content} />
                        <p><a href='/posts/learn-3.2' id={styles.chapter}>{LEARN_TITLE_THREE.THREE}</a></p>
                        <p><a href='/posts/learn-3.3' id={styles.chapter}>{LEARN_TITLE_THREE.FOUR}</a></p>
                        <p><a href='/posts/learn-3.4' id={styles.chapter}>{LEARN_TITLE_THREE.FIVE}</a></p>
                    </>
                )

            } else if (cate === 'CH3' && currentTitle.slice(0, 3) === '3.2') {
                return (
                    <>
                        <p><a href='/posts/learn-3intro' id={styles.chapter}>{LEARN_TITLE_THREE.ONE}</a></p>
                        <p><a href='/posts/learn-3.1' id={styles.chapter}>{LEARN_TITLE_THREE.TWO}</a></p>
                        <MINITOC content={content} />
                        <p><a href='/posts/learn-3.3' id={styles.chapter}>{LEARN_TITLE_THREE.FOUR}</a></p>
                        <p><a href='/posts/learn-3.4' id={styles.chapter}>{LEARN_TITLE_THREE.FIVE}</a></p>
                    </>
                )

            } else if (cate === 'CH3' && currentTitle.slice(0, 3) === '3.3') {
                return (
                    <>
                        <p><a href='/posts/learn-3intro' id={styles.chapter}>{LEARN_TITLE_THREE.ONE}</a></p>
                        <p><a href='/posts/learn-3.1' id={styles.chapter}>{LEARN_TITLE_THREE.TWO}</a></p>
                        <p><a href='/posts/learn-3.2' id={styles.chapter}>{LEARN_TITLE_THREE.THREE}</a></p>
                        <MINITOC content={content} />
                        <p><a href='/posts/learn-3.4' id={styles.chapter}>{LEARN_TITLE_THREE.FIVE}</a></p>
                    </>
                )

            } else if (cate === 'CH3' && currentTitle.slice(0, 3) === '3.4') {
                return (
                    <>
                        <p><a href='/posts/learn-3intro' id={styles.chapter}>{LEARN_TITLE_THREE.ONE}</a></p>
                        <p><a href='/posts/learn-3.1' id={styles.chapter}>{LEARN_TITLE_THREE.TWO}</a></p>
                        <p><a href='/posts/learn-3.2' id={styles.chapter}>{LEARN_TITLE_THREE.THREE}</a></p>
                        <p><a href='/posts/learn-3.3' id={styles.chapter}>{LEARN_TITLE_THREE.FOUR}</a></p>
                        <MINITOC content={content} />
                    </>
                )
            } else if (cate === 'CH4' && currentTitle.slice(0, 3) === '4. ') {
                return (
                    <>
                        <MINITOC content={content} />
                        <p><a href='/posts/learn-4.1' id={styles.chapter}>{LEARN_TITLE_FOUR.TWO}</a></p>
                        <p><a href='/posts/learn-4.2' id={styles.chapter}>{LEARN_TITLE_FOUR.THREE}</a></p>
                    </>
                )
            } else if (cate === 'CH4' && currentTitle.slice(0, 3) === '4.1') {
                return (
                    <>
                        <p><a href='/posts/learn-4intro' id={styles.chapter}>{LEARN_TITLE_FOUR.ONE}</a></p>
                        <MINITOC content={content} />
                        <p><a href='/posts/learn-4.2' id={styles.chapter}>{LEARN_TITLE_FOUR.THREE}</a></p>
                    </>
                )
            } else if (cate === 'CH4' && currentTitle.slice(0, 3) === '4.2') {
                return (
                    <>
                        <p><a href='/posts/learn-4intro' id={styles.chapter}>{LEARN_TITLE_FOUR.ONE}</a></p>
                        <p><a href='/posts/learn-4.1' id={styles.chapter}>{LEARN_TITLE_FOUR.TWO}</a></p>
                        <MINITOC content={content} />
                    </>
                )
            }
        }

        else {
            if (cate === 'part1' && currentTitle.slice(0, 3) === '1. ') {
                return (
                    <>
                        <MINITOC content={content} />
                        <p><a href='/posts/game-1.1' id={styles.chapter}>{GAME_TITLE_ONE.TWO}</a></p>
                        <p><a href='/posts/game-1.2' id={styles.chapter}>{GAME_TITLE_ONE.THREE}</a></p>
                    </>
                )
            } else if (cate === 'part1' && currentTitle.slice(0, 3) === '1.1') {
                return (
                    <>
                        <p><a href='/posts/game-1intro' id={styles.chapter}>{GAME_TITLE_ONE.ONE}</a></p>
                        <MINITOC content={content} />
                        <p><a href='/posts/game-1.2' id={styles.chapter}>{GAME_TITLE_ONE.THREE}</a></p>
                    </>
                )
            } else if (cate === 'part1' && currentTitle.slice(0, 3) === '1.2') {
                return (
                    <>
                        <p><a href='/posts/game-1intro' id={styles.chapter}>{GAME_TITLE_ONE.ONE}</a></p>
                        <p><a href='/posts/game-1.1' id={styles.chapter}>{GAME_TITLE_ONE.TWO}</a></p>
                        <MINITOC content={content} />
                    </>
                )
            } else if (cate === 'part2' && currentTitle.slice(0, 3) === '2. ') {
                return (
                    <>
                        <MINITOC content={content} />
                        <p><a href='/posts/game-2.1' id={styles.chapter}>{GAME_TITLE_TWO.TWO}</a></p>
                    </>
                )
            } else if (cate === 'part2' && currentTitle.slice(0, 3) === '2.1') {
                return (
                    <>
                        <p><a href='/posts/game-2intro' id={styles.chapter}>{GAME_TITLE_TWO.ONE}</a></p>
                        <MINITOC content={content} />
                    </>
                )
            }
        }
    }


    const [activeId, setActiveId] = useState('')

    useIntersectionObserver(setActiveId, content)

    //** TOC */ 
    return (
        <div>
            <ListGroup className={styles.all}>
                <Scrollbars universal={true} autoHide autoHeight autoHeightMax="calc(100vh)">
                    <section className={styles.title}>{type} {cate}</section>
                    <hr></hr>
                    <Chapter />
                </Scrollbars>
            </ListGroup>
        </div>
    )
}

export default Toc

// eslint-disable-next-line no-unused-vars
function ListItemLink(props) {
    // eslint-disable-next-line react/jsx-no-undef
    return <ListGroupItem button component="a" {...props} />
}