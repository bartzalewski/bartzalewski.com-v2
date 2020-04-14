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
        filter: drop-shadow(0px 0px 3px black);
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
      <div className="container container--secondary">
        <div className="footer__container container--primary">
          <div className="footer__links">
            <a
              href="https://github.com/bartzalewski"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              title="GitHub"
            >
              <FontAwesomeIcon
                data-sal="fade"
                data-sal-delay="200"
                data-sal-easing="ease"
                icon={["fab", "github"]}
                className="about__icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/bartzalewski/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              title="LinkedIn"
            >
              <FontAwesomeIcon
                data-sal="fade"
                data-sal-delay="300"
                data-sal-easing="ease"
                icon={["fab", "linkedin"]}
                className="about__icon"
              />
            </a>
            <a
              href="mailto:me@bartzalewski.com"
              className="footer__link"
              title="Email"
            >
              <FontAwesomeIcon
                data-sal="fade"
                data-sal-delay="400"
                data-sal-easing="ease"
                icon="envelope"
              />
            </a>
            <a
              href="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              title="Resume"
            >
              <FontAwesomeIcon
                data-sal="fade"
                data-sal-delay="500"
                data-sal-easing="ease"
                icon="paperclip"
              />
            </a>
          </div>
          <p
            data-sal="fade"
            data-sal-delay="600"
            data-sal-easing="ease"
            className="footer__copy section__desc"
          >
            Copyright {new Date().getFullYear()} &copy; Bart Zalewski
          </p>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
