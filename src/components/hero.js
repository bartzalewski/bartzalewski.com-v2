import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import bg from "../images/bg.jpg"
import Header from "./header"
import Board from "./board"

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
      width: 38%;
      margin: 50px 0;
      color: #bdbdbd;
    }
  }

  .container__hero--secondary {
    border-left: 1px solid #212121;
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
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  .decoration {
    position: absolute;

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
      left: 85%;
      top: 30%;
      transition: 0.2s;
      filter: drop-shadow(0px 0px 15px #00cde2);
      &:hover {
        transform: scale(1.1);
        transition: 0.2s;
        filter: none;
      }
    }
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
    <StyledHero>
      <Header />
      <div className="container hero__container">
        <div className="container__hero--secondary container--secondary">
          <StyledContainer className="container--primary">
            <p
              className="colored"
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              Hi, I am
            </p>
            <h1 data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
              {author}
            </h1>
            <h2
              data-sal="slide-up"
              data-sal-delay="400"
              data-sal-easing="ease"
              className="hero__sub"
            >
              {role}
            </h2>
            <p
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-easing="ease"
              className="hero__desc section__desc"
            >
              I specialize in designing, building, shipping and scaling
              beautiful, usable products with blazing-fast efficiency.
            </p>
            <a
              data-sal="slide-up"
              data-sal-delay="600"
              data-sal-easing="ease"
              href="#contact"
              className="btn btn--primary"
            >
              Get in touch
            </a>
            <img
              className="decoration decoration__cross"
              src={cross}
              alt="cross"
            />
            <img
              className="decoration decoration__tick"
              src={tick}
              alt="tick"
            />
            <img
              className="decoration decoration__circle"
              src={circle}
              alt="circle"
            />
          </StyledContainer>
        </div>
        <Board />
      </div>
    </StyledHero>
  )
}
