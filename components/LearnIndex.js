import React from 'react'
import { useRouter } from 'next/router'
import button from '../styles/Button.module.scss'
import { LEARN_TITLE_ONE, LEARN_TITLE_TWO, LEARN_TITLE_THREE, LEARN_TITLE_FOUR } from '../utils/const'

// eslint-disable-next-line react/prop-types
const LearnIndex = ({ content, type, cate, currentTitle }) => {

    const router = useRouter()

    var keywords = [cate, currentTitle]

    const makeBold = (item, keyword) => {
        return item.replace(new RegExp('(\\b)(' + keyword.join('|') + ')(\\b)', 'ig'), '$1<b>$2</b>$3');
    }

    return (
        <div>
            <ul>
                <li>
                    <details>
                        <summary dangerouslySetInnerHTML={{ __html: makeBold('CH1', keywords) }} ></summary>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-1intro')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(LEARN_TITLE_ONE.ONE, keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-1.1')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(LEARN_TITLE_ONE.TWO, keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-1.2')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(LEARN_TITLE_ONE.THREE, keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-1.3')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(LEARN_TITLE_ONE.FOUR, keywords) }}></p>
                        </button>
                    </details>
                </li>
                <li>
                    <details>
                        <summary dangerouslySetInnerHTML={{ __html: makeBold('CH2', keywords) }} ></summary>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-2intro')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(LEARN_TITLE_TWO.ONE, keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-2.1')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(LEARN_TITLE_TWO.TWO, keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-2.2')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(LEARN_TITLE_TWO.THREE, keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-2.3')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(LEARN_TITLE_TWO.FOUR, keywords) }}></p>
                        </button>
                    </details>
                </li>
                <li>
                    <details>
                        <summary dangerouslySetInnerHTML={{ __html: makeBold('CH3', keywords) }} ></summary>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-3intro')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(LEARN_TITLE_THREE.ONE, keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-3.1')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(LEARN_TITLE_THREE.TWO, keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-3.2')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(LEARN_TITLE_THREE.THREE, keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-3.3')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(LEARN_TITLE_THREE.FOUR, keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-3.4')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(LEARN_TITLE_THREE.FIVE, keywords) }}></p>
                        </button>
                    </details>
                </li>
                <li>
                    <details>
                        <summary dangerouslySetInnerHTML={{ __html: makeBold('CH4', keywords) }} ></summary>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-4intro')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(LEARN_TITLE_FOUR.ONE, keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-4.1')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(LEARN_TITLE_FOUR.TWO, keywords) }}></p>
                        </button>
                        <br></br>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-4.2')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(LEARN_TITLE_FOUR.THREE, keywords) }}></p>
                        </button>
                    </details>
                </li>

            </ul>
        </div>
    )
}
export default LearnIndex;

