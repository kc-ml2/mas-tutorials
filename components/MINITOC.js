import clsx from 'clsx'
import React, { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { useIntersectionObserver } from '../lib/useIntersectionObserver'
import { ListGroup, ListGroupItem } from 'reactstrap'
import styles from '../styles/TOC.module.scss'
// eslint-disable-next-line react/prop-types
const Minitoc = ({ content }) => {

    const [activeId, setActiveId] = useState('')

    useIntersectionObserver(setActiveId, content)

    const titles = content.split(`\n`).filter((t) => t.includes('# '))

    const result = titles
        .filter((str) => str[0] === '#')
        .map((item) => {
            let count = item.match(/#/g)?.length;
            if (count) {
                count = count * 10
            }

            return {
                title: item.split('# ')[1].replace(/`/g, '').trim(),
                // eslint-disable-next-line no-misleading-character-class
                anchor: item.split('# ')[1].replace(/`/g, '').replace(/[*/():.?!"&,📌🔎🗂️🗒️🎙️🏁]/gi, "").toLowerCase().replace(/ /gi, "-"),
                count
            }
        })


    //** TOC */ 
    return (
        <>
            {result.map((item, idx) => {
                if (item?.count && item.count <= 30 && item?.title) {
                    return (
                        <ListGroupItem
                            id={styles.notActive}
                            key={item.title + idx}
                            style={{ marginLeft: `${item.count}px`, }}
                            className={clsx(
                                activeId === item.anchor && styles.current
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
        </>
    )
}

export default Minitoc

// eslint-disable-next-line no-unused-vars
function ListItemLink(props) {
    // eslint-disable-next-line react/jsx-no-undef
    return <ListGroupItem button component="a" {...props} />
}