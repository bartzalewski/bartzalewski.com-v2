import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledFooter = styled.footer`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111;
  color: white;
  border-top: 1px solid #212121;

  .footer {
    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__link {
      color: white;
      margin-right: 20px;
      transition: 0.2s;

      &:hover {
        color: #02d463;
        transition: 0.2s;
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    &__copy {
      font-size: 14px;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer__container container--primary">
        <div className="footer__links">
          <a
            href="https://github.com/bartzalewski"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <FontAwesomeIcon icon={["fab", "github"]} className="about__icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/bartzalewski/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="about__icon"
            />
          </a>
          <a href="mailto:me@bartzalewski.com" className="footer__link">
            <FontAwesomeIcon icon="envelope" />
          </a>
          <a
            href="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <FontAwesomeIcon icon="paperclip" />
          </a>
        </div>
        <p className="footer__copy">
          Copyright {new Date().getFullYear()} &copy; Bart Zalewski
        </p>
      </div>
    </StyledFooter>
  )
}

export default Footer
