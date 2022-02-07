import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Scrollspy from 'react-scrollspy'

import Resume from './resume'

const HeaderWrapper = styled.header`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  width: 100%;
  transition: 0.4s;
  position: absolute;
`
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  .navbar__logo {
    font-family: 'Grand Hotel';
    font-size: 36px;
    color: white;
    transition: 0.2s ease;
    text-shadow: 0px 0px 10px black;
    &:hover {
      color: #02d463;
      transition: 0.2s ease;
    }
  }
`
const LinkItem = styled(Link)`
  margin-right: 20px;
  transition: 0.2s;
  text-shadow: 0px 0px 10px black;

  &:hover:not(.navbar__resume) {
    color: #02d463;
    transition: 0.2s;
  }
`

const Header = () => {
  const [sidenavOpened, setSidenavOpened] = useState(false)

  return (
    <HeaderWrapper id="nav">
      <Scrollspy
        id="sidenav"
        className={sidenavOpened ? 'sidenav sidenav--open' : 'sidenav'}
        style={{ padding: 0 }}
        items={['home', 'about', 'projects', 'blog', 'contact']}
        currentClassName="colored"
        offset={-60}
      >
        <LinkItem
          href="/#home"
          className="navbar__link"
          style={{ display: 'none' }}
        >
          Home
        </LinkItem>
        <div role="button" onClick={() => setSidenavOpened(!sidenavOpened)}>
          <LinkItem href="/#about">About</LinkItem>
        </div>
        <div role="button" onClick={() => setSidenavOpened(!sidenavOpened)}>
          <LinkItem href="/#projects">Projects</LinkItem>
        </div>
        <div role="button" onClick={() => setSidenavOpened(!sidenavOpened)}>
          <LinkItem href="/#blog">Blog</LinkItem>
        </div>
        <div role="button" onClick={() => setSidenavOpened(!sidenavOpened)}>
          <LinkItem href="/#contact">Contact</LinkItem>
        </div>
        <Resume />
      </Scrollspy>
      <Navbar id="navbar" className="navbar__container container--secondary">
        <LinkItem href="/#" className="navbar__logo">
          Bart
        </LinkItem>
        <div className="hamburger__container">
          <button
            aria-label="menu"
            className="hamburger"
            onClick={() => setSidenavOpened(!sidenavOpened)}
            onKeyDown={() => setSidenavOpened(!sidenavOpened)}
          >
            <div
              className={
                sidenavOpened
                  ? 'hamburger__wrapper icon close'
                  : 'hamburger__wrapper icon'
              }
            >
              <span className="hamburger--line top"></span>
              <span className="hamburger--line middle"></span>
              <span className="hamburger--line bottom"></span>
            </div>
          </button>
        </div>
        <Scrollspy
          className="navbar__links"
          items={['home', 'about', 'projects', 'blog', 'contact']}
          currentClassName="colored"
          offset={-60}
        >
          <LinkItem
            href="/#home"
            className="navbar__link"
            style={{ display: 'none' }}
          >
            Home
          </LinkItem>
          <LinkItem href="/#about" className="navbar__link">
            About
          </LinkItem>
          <LinkItem href="/#projects" className="navbar__link">
            Projects
          </LinkItem>
          <LinkItem href="/#blog" className="navbar__link">
            Blog
          </LinkItem>
          <LinkItem href="/#contact" className="navbar__link">
            Contact
          </LinkItem>
          <Resume />
        </Scrollspy>
      </Navbar>
    </HeaderWrapper>
  )
}

export default Header
