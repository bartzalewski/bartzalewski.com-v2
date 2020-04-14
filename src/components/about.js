import React from "react"
import styled from "styled-components"
import bart from "../images/bart.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledAbout = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 100px 0;

  .about {
    &__container {
      align-items: flex-start;

      img {
        align-self: flex-end;
        opacity: 0.4;
        transition: 0.5s;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 1);
        border-radius: 4px;

        &:hover {
          opacity: 1;
          transition: 0.5s;
        }
      }
    }

    &__desc {
      width: 40%;
      margin-top: 50px;
      color: #bdbdbd;
    }

    &__skills {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(2, minmax(140px, 200px));
      margin-top: 25px;
    }

    &__skill {
      position: relative;
      font-size: 14px;
      color: #bdbdbd;
      margin-bottom: 10px;
    }
  }

  .about__skill:not(.skill__jquery) {
    transition: 0.2s;
    &:hover {
      span {
        color: #02d463;
        transition: 0.2s;
      }
    }
  }

  .skill__icon {
    margin-right: 15px;
    color: #02d463;
    width: 15px;
    height: 15px;
  }

  .skill__jquery {
    .skill__icon,
    span {
      color: #333;
    }
    span {
      text-decoration: line-through;
    }
  }
`

export default function About() {
  return (
    <StyledAbout id="about">
      <div className="container--secondary container">
        <div className="container container--primary about__container">
          <div className="about__wrapper">
            <h2 data-sal="slide-up" data-sal-delay="700" data-sal-easing="ease">
              About me
            </h2>
            <p
              data-sal="slide-up"
              data-sal-delay="800"
              data-sal-easing="ease"
              className="about__desc section__desc"
            >
              I started coding in the December 2018 and I am self-taught
              developer. I have serious passion for modern looking websites with
              a little bit of animations. I love what I am doing and I am highly
              motivated to collaborate with someone. If you are up into some
              projects, just let me know!
            </p>
            <p
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              className="about__desc section__desc"
            >
              Technologies that I use:
            </p>
            <ul
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              className="about__skills"
            >
              <li className="about__skill">
                <FontAwesomeIcon
                  icon={["fab", "react"]}
                  className="skill__icon"
                />
                <span>React</span>
              </li>
              <li className="about__skill">
                <FontAwesomeIcon
                  icon={["fab", "node-js"]}
                  className="skill__icon"
                />
                <span>Node.js</span>
              </li>
              <li className="about__skill">
                <FontAwesomeIcon
                  icon={["fab", "js-square"]}
                  className="skill__icon"
                />
                <span>JavaScript</span>
              </li>
              <li className="about__skill">
                <FontAwesomeIcon
                  icon={["fab", "php"]}
                  className="skill__icon"
                />
                <span>PHP</span>
              </li>
              <li className="about__skill">
                <FontAwesomeIcon
                  icon={["fab", "html5"]}
                  className="skill__icon"
                />
                <span>HTML</span>
              </li>
              <li className="about__skill">
                <FontAwesomeIcon
                  icon={["fab", "sass"]}
                  className="skill__icon"
                />
                <span>S(CSS)</span>
              </li>
              <li className="about__skill">
                <FontAwesomeIcon icon="fire" className="skill__icon" />
                <span>Firebase</span>
              </li>
              <li className="about__skill">
                <FontAwesomeIcon
                  icon={["fab", "bootstrap"]}
                  className="skill__icon"
                />
                <span>Bootstrap</span>
              </li>
              <li className="about__skill">
                <FontAwesomeIcon
                  icon={["fab", "figma"]}
                  className="skill__icon"
                />
                <span>Figma</span>
              </li>
              <li className="about__skill">
                <FontAwesomeIcon
                  icon={["fab", "adobe"]}
                  className="skill__icon"
                />
                <span>Adobe Xd</span>
              </li>
              <li className="about__skill skill__jquery">
                <FontAwesomeIcon icon="cross" className="skill__icon" />
                <span>jQuery</span>
              </li>
            </ul>
          </div>
          <img
            data-sal="zoom-in"
            data-sal-delay="400"
            data-sal-easing="ease"
            src={bart}
            alt="Bart Zalewski"
            loading="lazy"
          />
        </div>
      </div>
    </StyledAbout>
  )
}
