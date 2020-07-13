import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import bg from "../images/bg.jpg"
import Header from "./header"
import Board from "./board"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

import cross from "../images/decorations/cross.svg"
import tick from "../images/decorations/tick.svg"
import circle from "../images/decorations/circle.svg"

const StyledHero = styled.section`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  .hero {
    &__container {
      justify-content: flex-start;
      position: relative;
      width: 100%;
      margin-top: 100px;
    }
    &__desc {
      width: 80%;
      margin: 50px 0;
      color: #bdbdbd;
      text-align: justify;
    }
    &__left,
    &__right {
      width: 50%;
      z-index: 1;
    }
    &__right {
      position: relative;
      perspective: 700px;
    }
  }
  .container__hero--secondary {
    display: flex;
    justify-content: center;
    margin: 5rem 0;
  }
  .colored {
    text-shadow: 0px 0px 10px black;
  }
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  .decoration {
    position: absolute;
    z-index: 0;
    &__cross {
      left: 50%;
      top: 0;
      transition: 0.2s;
      filter: drop-shadow(0px 0px 15px #ff5252);
      &:hover {
        transform: rotate(180deg);
        transition: 0.2s;
        filter: none;
      }
    }
    &__tick {
      left: 35%;
      bottom: 10%;
      transition: 0.2s;
      filter: drop-shadow(0px 0px 15px #02d463);
      &:hover {
        transform: scale(0.9);
        transition: 0.2s;
        filter: none;
      }
    }
    &__circle {
      left: 75%;
      top: 20%;
      transition: 0.2s;
      filter: drop-shadow(0px 0px 15px #00cde2);
      &:hover {
        transform: scale(1.1);
        transition: 0.2s;
        filter: none;
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column !important;
    align-items: flex-start !important;
  }
`

export default function Hero() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          role
        }
      }
    }
  `)
  const { author, role } = data.site.siteMetadata
  return (
    <StyledHero id="home">
      <Header />
      <div className="container hero__container">
        <div className="container__hero--secondary container--secondary">
          <StyledContainer className="container--primary">
            <div className="hero__left">
              <p className="colored" data-sal="slide-up" data-sal-easing="ease">
                Hi, I am
              </p>
              <h1
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-easing="ease"
              >
                {author}
              </h1>
              <h2
                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-easing="ease"
                className="hero__sub"
              >
                {role}
              </h2>
              <p
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease"
                className="hero__desc section__desc"
              >
                I specialize in designing, building, shipping, and scaling
                beautiful, usable products with blazing-fast efficiency.
              </p>
              <div
                data-sal="slide-up"
                data-sal-delay="400"
                data-sal-easing="ease"
              >
                <a
                  href="#projects"
                  className="btn btn--primary"
                  onClick={e => {
                    e.preventDefault()
                    trackCustomEvent({
                      category: "See my work Button",
                      action: "Click",
                      label: "Gatsby Google Analytics See my work Button",
                    })
                  }}
                >
                  See my work
                </a>
              </div>
            </div>
            <div className="hero__right">
              <Board />
            </div>
            <img
              className="decoration decoration__cross"
              src={cross}
              alt="cross"
              loading="lazy"
            />
            <img
              className="decoration decoration__tick"
              src={tick}
              alt="tick"
              loading="lazy"
            />
            <img
              className="decoration decoration__circle"
              src={circle}
              alt="circle"
              loading="lazy"
            />
          </StyledContainer>
        </div>
      </div>
    </StyledHero>
  )
}
