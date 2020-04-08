import React from "react"
import styled from "styled-components"
import Board from "./board"

const StyledHero = styled.section`
  background: #fafafa;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;

  .hero {
    &__container {
      z-index: 1;
      justify-content: flex-start;
      margin-top: 5rem;
    }

    &__desc {
      width: 40%;
      text-align: center;
      margin: 50px 0;
      color: #3e3e3e;
    }

    &__back {
      font-size: 500px;
      font-weight: bold;
      position: absolute;
      user-select: none;
      opacity: 0.02;
      z-index: 0;

      &--1 {
        top: 0;
        left: 50%;
      }

      &--2 {
        bottom: 0;
        right: 50%;
      }
    }
  }
`

export default function Hero() {
  return (
    <StyledHero>
      <div className="container hero__container">
        <h1>Bart Zalewski</h1>
        <h1>
          Your <span className="colored">web developer</span>
        </h1>
        <p className="hero__desc">
          I specialize in designing, building, shipping and scaling beautiful,
          usable products with blazing-fast efficiency.
        </p>
        <a href="#!" className="btn btn--primary">
          Get In Touch
        </a>
        <Board />
      </div>
      <span className="hero__back hero__back--1">BART</span>
      <span className="hero__back hero__back--2">BART</span>
    </StyledHero>
  )
}
