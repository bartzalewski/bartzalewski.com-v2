import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledHeader = styled.header`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  width: 100%;
  transition: 0.4s;
  position: absolute;

  .navbar {
    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
    }

    &__logo {
      font-family: "Grand Hotel";
      font-size: 36px;
      color: white;
      transition: 0.2s ease;
      text-shadow: 0px 0px 10px black;

      &:hover {
        color: #02d463;
        transition: 0.2s ease;
      }
    }

    &__link {
      margin-left: 20px;
      transition: 0.2s;
      text-shadow: 0px 0px 10px black;

      &:hover:not(.navbar__resume) {
        color: #02d463;
        transition: 0.2s;
      }
    }
  }
`

const Header = () => {
  const [condition, setCondition] = useState(false)
  return (
    <StyledHeader id="nav">
      <div
        id="sidenav"
        className={condition ? "sidenav sidenav--open" : "sidenav"}
      >
        <Link to="/#about" onClick={() => setCondition(!condition)}>
          About
        </Link>
        <Link to="/#projects" onClick={() => setCondition(!condition)}>
          Projects
        </Link>
        <Link to="/#blog" onClick={() => setCondition(!condition)}>
          Blog
        </Link>
        <Link to="/#contact" onClick={() => setCondition(!condition)}>
          Contact
        </Link>
        <a
          href="resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__link navbar__resume btn btn--secondary"
        >
          Resume
        </a>
      </div>
      <nav id="navbar" className="navbar__container container--secondary">
        <Link to="/#" className="navbar__logo">
          Bart
        </Link>
        <div className="hamburger__container">
          <div
            className="hamburger"
            onClick={() => setCondition(!condition)}
            onKeyDown={() => setCondition(!condition)}
            role="button"
            tabIndex="0"
          >
            <div
              className={
                condition
                  ? "hamburger__wrapper icon close"
                  : "hamburger__wrapper icon"
              }
            >
              <span className="hamburger--line top"></span>
              <span className="hamburger--line middle"></span>
              <span className="hamburger--line bottom"></span>
            </div>
          </div>
        </div>
        <div className="navbar__links">
          <Link to="/#about" className="navbar__link">
            About
          </Link>
          <Link to="/#projects" className="navbar__link">
            Projects
          </Link>
          <Link to="/#blog" className="navbar__link">
            Blog
          </Link>
          <Link to="/#contact" className="navbar__link">
            Contact
          </Link>
          <a
            href="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link navbar__resume btn btn--secondary"
          >
            Resume
          </a>
        </div>
      </nav>
    </StyledHeader>
  )
}

export default Header
