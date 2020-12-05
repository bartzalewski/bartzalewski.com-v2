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
  const [condition, setCondition] = useState(false)

  return (
    <HeaderWrapper id="nav">
      <Scrollspy
        id="sidenav"
        className={condition ? 'sidenav sidenav--open' : 'sidenav'}
        style={{ padding: 0 }}
        items={['home', 'about', 'projects', 'blog', 'contact']}
        currentClassName="colored"
      >
        <LinkItem
          to="/#home"
          className="navbar__link"
          style={{ display: 'none' }}
        >
          Home
        </LinkItem>
        <LinkItem to="/#about" onClick={() => setCondition(!condition)}>
          About
        </LinkItem>
        <LinkItem to="/#projects" onClick={() => setCondition(!condition)}>
          Projects
        </LinkItem>
        <LinkItem to="/#blog" onClick={() => setCondition(!condition)}>
          Blog
        </LinkItem>
        <LinkItem to="/#contact" onClick={() => setCondition(!condition)}>
          Contact
        </LinkItem>
        <Resume />
      </Scrollspy>
      <Navbar id="navbar" className="navbar__container container--secondary">
        <LinkItem to="/#" className="navbar__logo">
          Bart
        </LinkItem>
        <div className="hamburger__container">
          <button
            aria-label="menu"
            className="hamburger"
            onClick={() => setCondition(!condition)}
            onKeyDown={() => setCondition(!condition)}
          >
            <div
              className={
                condition
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
        >
          <LinkItem
            to="/#home"
            className="navbar__link"
            style={{ display: 'none' }}
          >
            Home
          </LinkItem>
          <LinkItem to="/#about" className="navbar__link">
            About
          </LinkItem>
          <LinkItem to="/#projects" className="navbar__link">
            Projects
          </LinkItem>
          <LinkItem to="/#blog" className="navbar__link">
            Blog
          </LinkItem>
          <LinkItem to="/#contact" className="navbar__link">
            Contact
          </LinkItem>
          <Resume />
        </Scrollspy>
      </Navbar>
    </HeaderWrapper>
  )
}

export default Header
