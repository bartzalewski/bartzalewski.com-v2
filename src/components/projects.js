import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import pagetify from "../images/projects/pagetify.webm"
import schoolify from "../images/projects/schoolify.webm"
import dojrzewaj from "../images/projects/dojrzewaj.webm"
import centrummoto from "../images/projects/centrummoto.webm"
import cz5p from "../images/projects/cz5p.webm"
import telean from "../images/projects/telean.webm"
import darkpaypal from "../images/projects/darkpaypal.webm"
import bartzalewskiV1 from "../images/projects/bartzalewski-v1.webm"

const StyledWork = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #111;
  padding: 100px 0;

  .work {
    &__wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 60px 20px;
      width: 100%;
    }
    &__box {
      video {
        width: 100%;
        opacity: 0.4;
        transition: 0.5s;
        border-radius: 4px;
        box-shadow: 0px 0px 10px black;
      }

      a {
        margin-right: 10px;
      }

      svg {
        width: 20px;
        height: 20px;
        transition: 0.2s;
        filter: drop-shadow(0px 0px 3px black);
        opacity: 0.4;

        &:hover {
          color: #02d463;
          transition: 0.2s;
        }
      }

      &:nth-of-type(2),
      &:nth-of-type(5),
      &:nth-of-type(8) {
        margin-top: 50px;
      }

      &:nth-of-type(3),
      &:nth-of-type(6) {
        margin-top: 100px;
      }

      &:hover {
        span,
        svg,
        video {
          opacity: 1;
          transition: 0.2s;
        }
      }
    }
    &__links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 10px;

      span {
        font-size: 14px;
        text-shadow: 0px 0px 10px black;
        opacity: 0.4;
        transition: 0.2s;
      }
    }
    &__desc {
      text-align: center;
      margin: 50px 0;
      color: #bdbdbd;
    }
  }
`

export default function Work() {
  return (
    <StyledWork id="projects">
      <div className="container container--secondary">
        <div className="container container--primary">
          <h2>My projects</h2>
          <p className="work__desc section__desc">Check out my portfolio!</p>
          <div className="work__wrapper">
            <div className="work__box">
              <video
                src={pagetify}
                alt="Pagetify"
                loop={true}
                autoPlay={true}
                muted={true}
                playsInline={true}
              ></video>
              <div className="work__links">
                <div>
                  <a
                    href="https://github.com/bartzalewski/pagetify"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className="about__icon"
                    />
                  </a>
                  <a
                    href="https://pagetify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="External"
                  >
                    <FontAwesomeIcon icon="external-link-alt" />
                  </a>
                </div>
                <span>Pagetify</span>
              </div>
            </div>
            <div className="work__box">
              <video
                src={schoolify}
                alt="Schoolify"
                loop={true}
                autoPlay={true}
                muted={true}
                playsInline={true}
              />
              <div className="work__links">
                <div>
                  <a
                    href="https://github.com/bartzalewski/schoolify"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className="about__icon"
                    />
                  </a>
                  <a
                    href="https://schoolify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="External"
                  >
                    <FontAwesomeIcon icon="external-link-alt" />
                  </a>
                </div>
                <span>Schoolify</span>
              </div>
            </div>
            <div className="work__box">
              <video
                src={dojrzewaj}
                alt="dojrzewaj.pl"
                loop={true}
                autoPlay={true}
                muted={true}
                playsInline={true}
              />
              <div className="work__links">
                <div>
                  <a href="#!" title="GitHub">
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className="about__icon"
                    />
                  </a>
                  <a
                    href="https://dojrzewaj.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="External"
                  >
                    <FontAwesomeIcon icon="external-link-alt" />
                  </a>
                </div>
                <span>dojrzewaj.pl</span>
              </div>
            </div>
            <div className="work__box">
              <video
                src={centrummoto}
                alt="Centrum Moto"
                loop={true}
                autoPlay={true}
                muted={true}
                playsInline={true}
              />
              <div className="work__links">
                <div>
                  <a href="#!" title="GitHub">
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className="about__icon"
                    />
                  </a>
                  <a
                    href="https://centrummoto.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="External"
                  >
                    <FontAwesomeIcon icon="external-link-alt" />
                  </a>
                </div>
                <span>Centrum Moto</span>
              </div>
            </div>
            <div className="work__box">
              <video
                src={cz5p}
                alt="coza500plus.pl"
                loop={true}
                autoPlay={true}
                muted={true}
                playsInline={true}
              />
              <div className="work__links">
                <div>
                  <a
                    href="https://github.com/bartzalewski/coza500plus"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className="about__icon"
                    />
                  </a>
                  <a
                    href="https://coza500plus.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="External"
                  >
                    <FontAwesomeIcon icon="external-link-alt" />
                  </a>
                </div>
                <span>coza500plus.pl</span>
              </div>
            </div>
            <div className="work__box">
              <video
                src={telean}
                alt="Telean"
                loop={true}
                autoPlay={true}
                muted={true}
                playsInline={true}
              />
              <div className="work__links">
                <div>
                  <a
                    href="https://github.com/bartzalewski/telean-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className="about__icon"
                    />
                  </a>
                  <a
                    href="https://telean-website.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="External"
                  >
                    <FontAwesomeIcon icon="external-link-alt" />
                  </a>
                </div>
                <span>Telean</span>
              </div>
            </div>
            <div className="work__box">
              <video
                src={darkpaypal}
                alt="Dark PayPal"
                loop={true}
                autoPlay={true}
                muted={true}
                playsInline={true}
              ></video>
              <div className="work__links">
                <div>
                  <a
                    href="https://github.com/bartzalewski/darkness"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className="about__icon"
                    />
                  </a>
                  <a
                    href="https://darkness.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="External"
                  >
                    <FontAwesomeIcon icon="external-link-alt" />
                  </a>
                </div>
                <span>Dark PayPal</span>
              </div>
            </div>
            <div className="work__box">
              <video
                src={bartzalewskiV1}
                alt="My first portfolio"
                loop={true}
                autoPlay={true}
                muted={true}
                playsInline={true}
              ></video>
              <div className="work__links">
                <div>
                  <a
                    href="https://github.com/bartzalewski/bartzalewski.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className="about__icon"
                    />
                  </a>
                  <a
                    href="https://bartzalewski.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="External"
                  >
                    <FontAwesomeIcon icon="external-link-alt" />
                  </a>
                </div>
                <span>My first portfolio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWork>
  )
}
