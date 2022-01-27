const LearnIndex = ({ keywords }) => {

    const makeBold = (item, keyword) => {
        return item.replace(new RegExp('(\\b)(' + keyword.join('|') + ')(\\b)', 'ig'), '$1<b>$2</b>$3');
    }

    return (
        <div>
            <ul>
                <li>
                    <details>
                        <summary dangerouslySetInnerHTML={{ __html: makeBold('CH1', keywords) }} ></summary>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('1. Introduction', keywords) }} href='/posts/learn-1intro'></a> <br></br>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('1.1 Quick review of Single-Agent RL', keywords) }} href='/posts/learn-1.1' ></a> <br></br>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('1.2 Multi-agent and Game Theory', keywords) }} href='/posts/learn-1.2' ></a> <br></br>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('1.3 Known Environments in MARL', keywords) }} href='/posts/learn-1.3'></a>
                    </details>
                </li>
                <li>
                    <details>
                        <summary dangerouslySetInnerHTML={{ __html: makeBold('CH2', keywords) }} ></summary>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('2. Problems in MARL', keywords) }} href='/posts/learn-2intro' ></a> <br></br>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('2.1 Problem definition in MARL', keywords) }} href='/posts/learn-2.1'></a> <br></br>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('2.2 Information in MARL', keywords) }} href='/posts/learn-2.2'></a> <br></br>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('2.3 Types of MARL Problems', keywords) }} href='/posts/learn-2.3'></a>
                    </details>
                </li>
                <li>
                    <details>
                        <summary dangerouslySetInnerHTML={{ __html: makeBold('CH3', keywords) }} ></summary>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('3. Emergent Behavior', keywords) }} href='/posts/learn-3intro'></a> <br></br>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('3.1 Complexity via Competition', keywords) }} href='/posts/learn-3.1'></a> <br></br>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('3.2 Sparse reward problem', keywords) }} href='/posts/learn-3.2'></a> <br></br>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('3.3 Opponent selection', keywords) }} href='/posts/learn-3.3'></a> <br></br>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('3.4 Randomizing environments', keywords) }} href='/posts/learn-3.4'></a>
                    </details>
                </li>
                <li>
                    <details>
                        <summary dangerouslySetInnerHTML={{ __html: makeBold('CH4', keywords) }} ></summary>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('4. More MDRL Algorithm', keywords) }} href='/posts/learn-4intro'></a> <br></br>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('4.1 MADDPG', keywords) }} href='/posts/learn-4.1'></a> <br></br>
                        <a dangerouslySetInnerHTML={{ __html: makeBold('4.2 COMA', keywords) }} href='/posts/learn-4.2'></a>
                    </details>
                </li>

            </ul>
        </div>
    )
}
export default LearnIndex;

