import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const FooterWrapper = styled.footer`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111;
  color: white;
  border-top: 1px solid #212121;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Links = styled.div`
  .footer__link {
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
`
const Descriptions = styled.div`
  .footer__copy {
    font-size: 14px;
  }
  .footer__credit {
    font-size: 12px;
    color: #333;
  }
`
const Description = styled.p``

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container container--secondary">
        <Container className="footer__container container--primary">
          <Links className="footer__links">
            <OutboundLink
              href="https://www.instagram.com/bart.code/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              title="Instagram"
            >
              <FontAwesomeIcon
                icon={['fab', 'instagram']}
                className="about__icon"
              />
            </OutboundLink>
            <OutboundLink
              href="https://github.com/bartzalewski"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              title="GitHub"
            >
              <FontAwesomeIcon
                icon={['fab', 'github']}
                className="about__icon"
              />
            </OutboundLink>
            <OutboundLink
              href="https://www.linkedin.com/in/bartzalewski/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              title="LinkedIn"
            >
              <FontAwesomeIcon
                icon={['fab', 'linkedin']}
                className="about__icon"
              />
            </OutboundLink>
            <a
              href="mailto:me@bartzalewski.com"
              className="footer__link"
              title="Email"
            >
              <FontAwesomeIcon icon="envelope" />
            </a>
            <OutboundLink
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              title="Resume"
            >
              <FontAwesomeIcon icon="paperclip" />
            </OutboundLink>
          </Links>
          <Descriptions className="footer__desc section__desc">
            <Description className="footer__copy">
              Copyright {new Date().getFullYear()} &copy; Bart Zalewski
            </Description>
            <Description className="footer__credit">
              Created by{' '}
              <a
                href="https://github.com/bartzalewski/bartzalewski.com-v2"
                target="_blank"
                rel="noopener noreferrer"
                title="Bart Zalewski | Full-Stack Developer"
              >
                Bart Zalewski
              </a>
            </Description>
          </Descriptions>
        </Container>
      </div>
    </FooterWrapper>
  )
}

export default Footer
