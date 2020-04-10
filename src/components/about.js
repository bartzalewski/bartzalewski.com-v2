import React from "react"
import styled from "styled-components"
import bart from "../images/bart.png"

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

        &:hover {
          opacity: 1;
          transition: 0.5s;
        }
      }
    }

    &__desc {
      width: 40%;
      margin: 50px 0;
      color: #bdbdbd;
    }
  }
`

export default function About() {
  return (
    <StyledAbout id="about">
      <div className="container container--primary about__container">
        <h2>About me</h2>
        <p className="about__desc">
          I started coding in the December 2018 and I'm self-taught developer. I
          have serious passion for modern looking websites with a little bit of
          animations. I love what I'm doing and I'm highly motivated to
          collaborate with someone. If you are up into some projects, just let
          me know!
        </p>
        <p className="about__desc">Technologies that I use:</p>
        <img src={bart} alt="Bart Zalewski" />
      </div>
    </StyledAbout>
  )
}
