const GameIndex = ({ keywords }) => {

    const makeBold = (item, keyword) => {
        return item.replace(new RegExp('(\\b)(' + keyword.join('|') + ')(\\b)', 'ig'), '$1<b>$2</b>$3');
    }

    return (
        <div>
            <ul>
                {/* <p>| 응용하기 |</p> */}
                <li>
                    <details>
                        <summary dangerouslySetInnerHTML={{ __html: makeBold('part1', keywords) }} ></summary>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('1. 강화학습을 통한 Snake 학습시키기', keywords) }} href='/posts/game-1intro' ></a> <br></br>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('1.1 Previous Approaches', keywords) }} href='/posts/game-1.1' ></a> <br></br>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('1.2 Single-Agent Algorithm in Multi-Snake', keywords) }} href='/posts/game-1.2' ></a>
                    </details>
                </li>
                <li>
                    <details>
                        <summary dangerouslySetInnerHTML={{ __html: makeBold('part2', keywords) }} ></summary>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('2. 학습된 Snake로 Leaderboard 참여하기', keywords) }} href='/posts/game-2intro' ></a> <br></br>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('2.1 Snake Leaderboard 소개', keywords) }} href='/posts/game-2.1' ></a> <br></br>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('2.2 Snake Leaderboard 참여 방법', keywords) }} href='/posts/game-2.2' ></a>
                    </details>
                </li>
            </ul>
        </div>
    )
}
export default GameIndex;

