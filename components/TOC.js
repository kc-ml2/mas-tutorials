import clsx from 'clsx'
import React, { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { useIntersectionObserver } from '../lib/useIntersectionObserver'
import { ListGroup, ListGroupItem } from 'reactstrap'
import LearnIndex from './LearnIndex'
import GameIndex from './GameIndex'

const Toc = ({ content, type, cate, currentTitle }) => {

    // activeId는 화면 상단에 위치한 제목 element 다룰 state
    const [activeId, setActiveId] = useState('');

    // intersectionObserver를 이용해 만든 커스텀 훅으로 setState를 전달 하여
    // 화면 상단에 위치한 제목 element가 뭔지 알아낸다.
    useIntersectionObserver(setActiveId, content);


    // 게시물 본문을 줄바꿈 기준으로 나누고, 제목 요소인 것만 저장
    const titles = content.split(`\n`).filter((t) => t.includes('# '));

    //해당 keywords에 해당하는 post, category는 bold체!!
    var keywords = [cate, currentTitle]


    // 예외처리 - 제목은 문자열 시작부터 #을 써야함
    const result = titles
        .filter((str) => str[0] === '#')
        .map((item) => {
            // #의 개수로 들여쓰기 지정 (count의 10배 만큼)
            let count = item.match(/#/g)?.length;
            if (count) {
                count = count * 10;
            }

            // title: # 기준으로 텍스트만 꺼내옴.
            // anchor: a tag되는 anchor는 anchor 규칙에 맞게 변경. 특수문자 제거, 공백 - 로 치환, 소문자로 치환.
            // replace(/[]/gi, "") >> []안에 있는 것들 제거
            return {
                title: item.split('# ')[1].replace(/`/g, '').trim(),
                anchor: item.split('# ')[1].replace(/`/g, '').replace(/[*/():.?!"&,📌🔎🗂️🗒️🎙️🏁]/gi, "").toLowerCase().replace(/ /gi, "-"),
                count
            };
        });


    //** TOC */ 
    return (
        <div>
            <ListGroup>
                <Scrollbars universal={true} autoHide autoHeight autoHeightMax="calc(100vh - 250px)">
                    <ListGroupItem>
                        {type}
                        {type == '배우기' ?
                            (
                                <LearnIndex keywords={keywords} />
                            ) : (
                                <GameIndex keywords={keywords} />
                            )}
                    </ListGroupItem>
                    <br></br>
                    {result.map((item, idx) => {
                        // count는 #개수에 따른 들여쓰기용 변수
                        if (item?.count && item.count <= 30 && item?.title) {
                            return (
                                <ListGroupItem
                                    key={item.title + idx}
                                    style={{ marginLeft: `${item.count}px`, }}
                                    className={clsx(
                                        activeId === item.anchor
                                    )}>
                                    <a
                                        href={`#${item.anchor}`}
                                    >
                                        {item.title}
                                    </a>
                                </ListGroupItem>
                            );
                        }
                    })}
                </Scrollbars>
            </ListGroup>
        </div>
    );
};

export default Toc;

function ListItemLink(props) {
    // eslint-disable-next-line react/jsx-no-undef
    return <ListGroupItem button component="a" {...props} />;
}