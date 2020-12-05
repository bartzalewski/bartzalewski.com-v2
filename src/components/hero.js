import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import bg from '../images/bg.jpg'
import Header from './header'
import Board from './board/board'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

import cross from '../images/decorations/cross.svg'
import tick from '../images/decorations/tick.svg'
import circle from '../images/decorations/circle.svg'

const HeroSection = styled.section`
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
  .container__hero--secondary {
    display: flex;
    justify-content: center;
    margin: 5rem 0;
  }
  .colored {
    text-shadow: 0px 0px 10px black;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column !important;
    align-items: flex-start !important;
  }
`
const HeroContainer = styled.div`
  justify-content: flex-start;
  position: relative;
  width: 100%;
  margin-top: 100px;
`
const Left = styled.div`
  width: 50%;
  z-index: 1;
`
const Greeting = styled.p``
const Author = styled.h1``
const Role = styled.h2``
const Description = styled.p`
  width: 80%;
  margin: 50px 0;
  color: #bdbdbd;
  text-align: left;
`
const Button = styled.a``
const Right = styled.div`
  width: 50%;
  z-index: 1;
  position: relative;
  perspective: 700px;
`
const Image = styled.img`
  position: absolute;
  z-index: 0;

  &.decoration__cross {
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
  &.decoration__tick {
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
  &.decoration__circle {
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
    <HeroSection id="home">
      <Header />
      <HeroContainer className="container hero__container">
        <div className="container__hero--secondary container--secondary">
          <Container className="container--primary">
            <Left className="hero__left">
              <Greeting className="colored">Hi, I am</Greeting>
              <Author>{author}</Author>
              <Role className="hero__sub">{role}</Role>
              <Description className="hero__desc section__desc">
                I specialize in designing, building, shipping, and scaling
                beautiful, usable products with blazing-fast efficiency.
              </Description>
              <Button
                href="#projects"
                className="btn btn--primary"
                onClick={(e) => {
                  e.preventDefault()
                  trackCustomEvent({
                    category: 'See my work Button',
                    action: 'Click',
                    label: 'Gatsby Google Analytics See my work Button',
                  })
                }}
              >
                See my work
              </Button>
            </Left>
            <Right className="hero__right">
              <Board />
            </Right>
            <Image
              className="decoration decoration__cross"
              src={cross}
              alt="cross"
              loading="lazy"
            />
            <Image
              className="decoration decoration__tick"
              src={tick}
              alt="tick"
              loading="lazy"
            />
            <Image
              className="decoration decoration__circle"
              src={circle}
              alt="circle"
              loading="lazy"
            />
          </Container>
        </div>
      </HeroContainer>
    </HeroSection>
  )
}
