import React from 'react'
import { useRouter } from 'next/router'
import button from '../styles/Button.module.scss'

// eslint-disable-next-line react/prop-types
const GameIndex = ({ keywords }) => {

    const router = useRouter()

    const makeBold = (item, keyword) => {
        return item.replace(new RegExp('(\\b)(' + keyword.join('|') + ')(\\b)', 'ig'), '$1<b>$2</b>$3');
    }

    return (
        <div>
            <ul>
                <li>
                    <details>
                        <summary dangerouslySetInnerHTML={{ __html: makeBold('part1', keywords) }} ></summary>
                        <button className={button.link} onClick={() => router.replace('/posts/game-1intro')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('1. 강화학습을 통한 Snake 학습시키기', keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/game-1.1')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('1.1 Previous Approaches', keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/game-1.2')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('1.2 Single-Agent Algorithm in Multi-Snake', keywords) }}></p>
                        </button>
                    </details>
                </li>
                <li>
                    <details>
                        <summary dangerouslySetInnerHTML={{ __html: makeBold('part2', keywords) }} ></summary>
                        <button className={button.link} onClick={() => router.replace('/posts/game-2intro')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('2. 학습된 Snake로 Leaderboard 참여하기', keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/game-2.1')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('2.1 Snake Leaderboard 소개', keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/game-2.2')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold('2.2 Snake Leaderboard 참여 방법', keywords) }}></p>
                        </button>
                    </details>
                </li>
            </ul>
        </div>
    )
}
export default GameIndex;

