import React from "react"
import styled from "styled-components"
import bg from "../images/bg.png"
import Header from "./header"
import Board from "./board"

const StyledHero = styled.section`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  .hero {
    &__container {
      justify-content: flex-start;
    }

    &__desc {
      width: 38%;
      margin: 50px 0;
    }

    &__sub {
      color: #aeaeae;
    }
  }

  .container__hero--secondary {
    border-left: 1px solid #212121;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
  }
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`

export default function Hero() {
  return (
    <StyledHero>
      <Header />
      <div className="container hero__container">
        <div className="container__hero--secondary container--secondary">
          <StyledContainer className="container--primary">
            <p className="colored">Hi, I am</p>
            <h1>Bart Zalewski</h1>
            <h1 className="hero__sub">Front-End Developer</h1>
            <p className="hero__desc">
              I specialize in designing, building, shipping and scaling
              beautiful, usable products with blazing-fast efficiency.
            </p>
            <a href="#contact" className="btn btn--primary">
              Get In Touch
            </a>
          </StyledContainer>
        </div>
        <Board />
      </div>
    </StyledHero>
  )
}
