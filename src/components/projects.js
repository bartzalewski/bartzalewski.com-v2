import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import pagetify from "../images/projects/pagetify.png"
import schoolify from "../images/projects/schoolify.png"
import dojrzewaj from "../images/projects/dojrzewaj.png"
import centrummoto from "../images/projects/centrummoto.png"

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
      height: 225px;
      background: #1a1a1a;

      img {
        width: 100%;
        height: 100%;
        opacity: 0.4;
        transition: 0.5s;

        &:hover {
          opacity: 1;
          transition: 0.5s;
        }
      }

      a {
        margin-right: 10px;
      }

      svg {
        width: 20px;
        height: 20px;
        transition: 0.2s;

        &:hover {
          color: #02d463;
          transition: 0.2s;
        }
      }

      &:nth-of-type(2) {
        margin-top: 40px;
      }

      &:nth-of-type(3) {
        margin-top: 80px;
      }
    }
    &__links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;

      span {
        font-size: 14px;
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
      <div className="container container--primary">
        <h2>My projects</h2>
        <p className="work__desc">Check out my portfolio!</p>
        <div className="work__wrapper">
          <div className="work__box">
            <img src={pagetify} alt="Pagetify" />
            <div className="work__links">
              <div>
                <a
                  href="https://github.com/bartzalewski/pagetify"
                  target="_blank"
                  rel="noopener noreferrer"
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
                >
                  <FontAwesomeIcon icon="external-link-alt" />
                </a>
              </div>
              <span>Pagetify</span>
            </div>
          </div>
          <div className="work__box">
            <img src={schoolify} alt="Schoolify" />
            <div className="work__links">
              <div>
                <a
                  href="https://github.com/bartzalewski/schoolify"
                  target="_blank"
                  rel="noopener noreferrer"
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
                >
                  <FontAwesomeIcon icon="external-link-alt" />
                </a>
              </div>
              <span>Schoolify</span>
            </div>
          </div>
          <div className="work__box">
            <img src={dojrzewaj} alt="dojrzewaj.pl" />
            <div className="work__links">
              <div>
                <a href="#!">
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    className="about__icon"
                  />
                </a>
                <a
                  href="https://dojrzewaj.pl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon="external-link-alt" />
                </a>
              </div>
              <span>dojrzewaj.pl</span>
            </div>
          </div>
          <div className="work__box">
            <img src={centrummoto} alt="Centrum Moto" />
            <div className="work__links">
              <div>
                <a href="#!">
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    className="about__icon"
                  />
                </a>
                <a
                  href="https://centrummoto.pl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon="external-link-alt" />
                </a>
              </div>
              <span>Centrum Moto</span>
            </div>
          </div>
        </div>
      </div>
    </StyledWork>
  )
}
