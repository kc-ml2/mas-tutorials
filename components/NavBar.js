import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../public/Nav/logo.png'
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'
import styles from '../styles/NavBar.module.scss'
import {
  LEARN_TITLE_ONE,
  LEARN_TITLE_TWO,
  LEARN_TITLE_THREE,
  LEARN_TITLE_FOUR,
  GAME_TITLE_ONE,
  GAME_TITLE_TWO,
} from '../utils/const'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className={styles.container}>
      <Navbar expand="md" className={styles.NavBar}>
        <NavbarBrand href="/" className={styles.logo}>
          <Image
            src={logo}
            alt="logo"
            width="110.9"
            height="54"
            priority={true}
          ></Image>
        </NavbarBrand>
        <button
          aria-expanded={isOpen}
          className="navbar-toggler"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          aria-label="toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Collapse navbar isOpen={isOpen} id={styles.space}>
          <Nav navbar className={styles.nav}>
            <NavItem className={styles.items}>
              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>
                  배우기 <i>▼</i>
                </button>
                <div className={styles.dropdown_content}>
                  <p>CH1</p>
                  <a href="/posts/learn-1intro">{LEARN_TITLE_ONE.ONE}</a>{' '}
                  <br></br>
                  <a href="/posts/learn-1.1">{LEARN_TITLE_ONE.TWO}</a> <br></br>
                  <a href="/posts/learn-1.2">{LEARN_TITLE_ONE.THREE}</a>{' '}
                  <br></br>
                  <a href="/posts/learn-1.3">{LEARN_TITLE_ONE.FOUR}</a>
                  <hr></hr>
                  <p>CH2</p>
                  <a href="/posts/learn-2intro">{LEARN_TITLE_TWO.ONE}</a>{' '}
                  <br></br>
                  <a href="/posts/learn-2.1">{LEARN_TITLE_TWO.TWO}</a> <br></br>
                  <a href="/posts/learn-2.2">{LEARN_TITLE_TWO.THREE}</a>{' '}
                  <br></br>
                  <a href="/posts/learn-2.3">{LEARN_TITLE_TWO.FOUR}</a>
                  <hr></hr>
                  <p>CH3</p>
                  <a href="/posts/learn-3intro">{LEARN_TITLE_THREE.ONE}</a>{' '}
                  <br></br>
                  <a href="/posts/learn-3.1">{LEARN_TITLE_THREE.TWO}</a>{' '}
                  <br></br>
                  <a href="/posts/learn-3.2">{LEARN_TITLE_THREE.THREE}</a>{' '}
                  <br></br>
                  <a href="/posts/learn-3.3">{LEARN_TITLE_THREE.FOUR}</a>{' '}
                  <br></br>
                  <a href="/posts/learn-3.4">{LEARN_TITLE_THREE.FIVE}</a>
                  <hr></hr>
                  <p>CH4</p>
                  <a href="/posts/learn-4intro">{LEARN_TITLE_FOUR.ONE}</a>{' '}
                  <br></br>
                  <a href="/posts/learn-4.1">{LEARN_TITLE_FOUR.TWO}</a>{' '}
                  <br></br>
                  <a href="/posts/learn-4.2">{LEARN_TITLE_FOUR.THREE}</a>
                </div>
              </div>
            </NavItem>

            <NavItem className={styles.items}>
              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>
                  응용하기 <i>▼</i>
                </button>
                <div className={styles.dropdown_content}>
                  <p>PART1</p>
                  <a href="/posts/game-1intro">{GAME_TITLE_ONE.ONE}</a>{' '}
                  <br></br>
                  <a href="/posts/game-1.1">{GAME_TITLE_ONE.TWO}</a> <br></br>
                  <a href="/posts/game-1.2">{GAME_TITLE_ONE.THREE}</a>
                  <hr></hr>
                  <p>PART2</p>
                  <a href="/posts/game-2intro">{GAME_TITLE_TWO.ONE}</a>{' '}
                  <br></br>
                  <a href="/posts/game-2.1">{GAME_TITLE_TWO.TWO}</a> <br></br>
                </div>
              </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </section>
  )
}
