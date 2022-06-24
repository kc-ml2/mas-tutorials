import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../public/Nav/logo.png'
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap'
import styles from '../styles/NavBar.module.scss'

export default function NavBar() {

    const [collapseOpen, setCollapseOpen] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [collapseOut, setCollapseOut] = useState('')

    const toggleCollapse = () => {
        document.documentElement.classList.toggle('nav-open')
        setCollapseOpen(!collapseOpen)
    }
    const onCollapseExiting = () => {
        setCollapseOut('collapsing-out')
    }
    const onCollapseExited = () => {
        setCollapseOut('')
    }

    return (

        <Navbar expand="md" className={styles.Nav}>
            <NavbarBrand href="/" className={styles.logo}>
                <Image src={logo} alt="logo" width="110.9" height="54" priority={true}></Image>
            </NavbarBrand>
            <button
                aria-expanded={collapseOpen}
                className="navbar-toggler"
                onClick={toggleCollapse}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <Collapse
                navbar
                isOpen={collapseOpen}
                onExiting={onCollapseExiting}
                onExited={onCollapseExited}
                id={styles.space}
            >
                <Nav navbar>
                    <NavItem className={styles.items}>
                        <div className={styles.dropdown}>
                            <button className={styles.dropbtn}>배우기 <i>▼</i>
                            </button>
                            <div className={styles.dropdown_content}>
                                <p>CH1</p>
                                <a href='/posts/learn-1intro'>1. Introduction</a> <br></br>
                                <a href='/posts/learn-1.1' >1.1 Quick review of Single-Agent RL</a> <br></br>
                                <a href='/posts/learn-1.2' >1.2 Multi-agent and Game Theory</a> <br></br>
                                <a href='/posts/learn-1.3'>1.3 Known Environments in MARL</a>
                                <hr></hr>

                                <p>CH2</p>
                                <a href='/posts/learn-2intro' >2. Problems in MARL</a> <br></br>
                                <a href='/posts/learn-2.1'>2.1 Problem definition in MARL</a> <br></br>
                                <a href='/posts/learn-2.2'>2.2 Information in MARL</a> <br></br>
                                <a href='/posts/learn-2.3'>2.3 Types of MARL Problems</a>
                                <hr></hr>

                                <p>CH3</p>
                                <a href='/posts/learn-3intro'>3. Emergent Behavior</a> <br></br>
                                <a href='/posts/learn-3.1'>3.1 Complexity via Competition</a> <br></br>
                                <a href='/posts/learn-3.2'>3.2 Sparse reward problem</a> <br></br>
                                <a href='/posts/learn-3.3'>3.3 Opponent selection</a> <br></br>
                                <a href='/posts/learn-3.4'>3.4 Randomizing environments</a>
                                <hr></hr>

                                <p>CH4</p>
                                <a href='/posts/learn-4intro'>4. More MDRL Algorithm</a> <br></br>
                                <a href='/posts/learn-4.1'>4.1 MADDPG</a> <br></br>
                                <a href='/posts/learn-4.2'>4.2 COMA</a>
                            </div>
                        </div>
                    </NavItem >

                    <NavItem className={styles.items}>
                        <div className={styles.dropdown}>
                            <button className={styles.dropbtn}>응용하기 <i>▼</i>
                            </button>
                            <div className={styles.dropdown_content}>
                                <p>PART1</p>
                                <a href='/posts/game-1intro'>1. 강화학습을 통한 Snake 학습시키기</a> <br></br>
                                <a href='/posts/game-1.1' >1.1 Previous ApproachesL</a> <br></br>
                                <a href='/posts/game-1.2' >1.2 Single-Agent Algorithm in Multi-Snakey</a>
                                <hr></hr>

                                <p>PART2</p>
                                <a href='/posts/game-2intro' >2. 학습된 Snake로 Leaderboard 참여하기</a> <br></br>
                                <a href='/posts/game-2.1'>2.1 Snake Leaderboard 소개</a> <br></br>
                                <a href='/posts/game-2.2'>2.2 Snake Leaderboard 참여 방법</a>
                            </div>
                        </div>
                    </NavItem >
                </Nav>
            </Collapse>

        </Navbar>

    )

}