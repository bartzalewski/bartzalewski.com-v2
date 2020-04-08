import React from "react"
import styled from "styled-components"

const StyledHeader = styled.nav`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;

  .navbar {
    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__logo {
      font-family: "Grand Hotel";
      font-size: 36px;
      color: black;
      transition: 0.2s ease;

      &:hover {
        color: #0097a7;
        transition: 0.2s ease;
      }
    }

    &__link {
      margin: 0 10px;
    }
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <div className="navbar__container container--primary">
        <a href="#!" className="navbar__logo">
          Bart
        </a>
        <div className="navbar__links">
          <a href="#about" className="navbar__link">
            About
          </a>
          <a href="#projects" className="navbar__link">
            Projects
          </a>
          <a href="#testimonials" className="navbar__link">
            Testimonials
          </a>
          <a href="#blog" className="navbar__link">
            Blog
          </a>
          <a href="#contact" className="navbar__link">
            Contact
          </a>
        </div>
        <a href="#contact" className="btn btn--secondary">
          Resume
        </a>
      </div>
    </StyledHeader>
  )
}

export default Header
