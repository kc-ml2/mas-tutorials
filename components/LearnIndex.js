import React from 'react'
import { useRouter } from 'next/router'
import button from '../styles/Button.module.scss'

// eslint-disable-next-line react/prop-types
const LearnIndex = ({ keywords }) => {

    const router = useRouter()

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
                            <p dangerouslySetInnerHTML={{ __html: makeBold('1. Introduction', keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-1.1')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('1.1 Quick review of Single-Agent RL', keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-1.2')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('1.2 Multi-agent and Game Theory', keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-1.3')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('1.3 Known Environments in MARL', keywords) }}></p>
                        </button>
                    </details>
                </li>
                <li>
                    <details>
                        <summary dangerouslySetInnerHTML={{ __html: makeBold('CH2', keywords) }} ></summary>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-2intro')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('2. Problems in MARL', keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-2.1')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('2.1 Problem definition in MARL', keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-2.2')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('2.2 Information in MARL', keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-2.3')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('2.3 Types of MARL Problems', keywords) }}></p>
                        </button>
                    </details>
                </li>
                <li>
                    <details>
                        <summary dangerouslySetInnerHTML={{ __html: makeBold('CH3', keywords) }} ></summary>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-3intro')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('3. Emergent Behavior', keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-3.1')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('3.1 Complexity via Competition', keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-3.2')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('3.2 Sparse reward problem', keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-3.3')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('3.3 Opponent selection', keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-3.4')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('3.4 Randomizing environments', keywords) }}></p>
                        </button>
                    </details>
                </li>
                <li>
                    <details>
                        <summary dangerouslySetInnerHTML={{ __html: makeBold('CH4', keywords) }} ></summary>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-4intro')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('4. More MDRL Algorithm', keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-4.1')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('4.1 MADDPG', keywords) }}></p>
                        </button>
                        <br></br>
                        <button className={button.link} onClick={() => router.replace('/posts/learn-4.2')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('4.2 COMA', keywords) }}></p>
                        </button>
                    </details>
                </li>

            </ul>
        </div>
    )
}
export default LearnIndex;

