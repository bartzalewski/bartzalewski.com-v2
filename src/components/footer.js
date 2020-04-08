import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0097a7;
  color: white;

  .footer {
    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__link {
      color: white;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer__container container--primary">
        <div className="footer__links">
          <a href="#!" className="footer__link">
            github
          </a>
          <a href="#!" className="footer__link">
            linkedin
          </a>
          <a href="#!" className="footer__link">
            mail
          </a>
          <a href="#!" className="footer__link">
            resume
          </a>
        </div>
        <p className="footer__copy">Copyright 2020 &copy; Bart Zalewski</p>
      </div>
    </StyledFooter>
  )
}

export default Footer
