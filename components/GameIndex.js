import React from 'react'
import { useRouter } from 'next/router'
import button from '../styles/Button.module.scss'
import { GAME_TITLE_ONE, GAME_TITLE_TWO } from '../utils/const'

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
                            <p dangerouslySetInnerHTML={{ __html: makeBold(GAME_TITLE_ONE.ONE, keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/game-1.1')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(GAME_TITLE_ONE.TWO, keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/game-1.2')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(GAME_TITLE_ONE.THREE, keywords) }}></p>
                        </button>
                    </details>
                </li>
                <li>
                    <details>
                        <summary dangerouslySetInnerHTML={{ __html: makeBold('part2', keywords) }} ></summary>
                        <button className={button.link} onClick={() => router.replace('/posts/game-2intro')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(GAME_TITLE_TWO.ONE, keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/game-2.1')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(GAME_TITLE_TWO.TWO, keywords) }}></p>
                        </button>
                        <button className={button.link} onClick={() => router.replace('/posts/game-2.2')} >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(GAME_TITLE_TWO.THREE, keywords) }}></p>
                        </button>
                    </details>
                </li>
            </ul>
        </div>
    )
}
export default GameIndex;

