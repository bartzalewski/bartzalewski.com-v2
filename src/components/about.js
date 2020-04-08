import React from "react"
import styled from "styled-components"

const StyledAbout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .about {
    &__desc {
      width: 40%;
      text-align: center;
      margin: 50px 0;
      color: #3e3e3e;
    }
  }
`

export default function About() {
  return (
    <StyledAbout>
      <div className="container container--primary">
        <h1>Who Am I?</h1>
        <p className="about__desc">
          I started coding in the December 2018 and I'm self-taught developer. I
          have serious passion for modern looking websites with a little bit of
          animations. I love what I'm doing and I'm highly motivated to
          collaborate with someone. If you are up into some projects, just let
          me know!
        </p>
        <div className="about__wrapper">
          <div className="about__box">
            <h2 className="about__title">
              <span className="colored">01.</span> Front-End Developer
            </h2>
            <p className="about__txt">
              I started coding in the December 2018 and I'm self-taught
              developer. I have serious passion for modern looking websites with
              a little bit of animations. I love what I'm doing and I'm highly
              motivated to collaborate with someone. If you are up into some
              projects, just let me know!
            </p>
            <a href="#!" className="btn btn--secondary about__btn">
              Get In Touch
            </a>
          </div>
          <div className="about__box">
            <h2 className="about__title">
              <span className="colored">02.</span> Designer
            </h2>
            <p className="about__txt">
              I started coding in the December 2018 and I'm self-taught
              developer. I have serious passion for modern looking websites with
              a little bit of animations. I love what I'm doing and I'm highly
              motivated to collaborate with someone. If you are up into some
              projects, just let me know!
            </p>
            <a href="#!" className="btn btn--secondary about__btn">
              Get In Touch
            </a>
          </div>
          <div className="about__box">
            <h2 className="about__title">
              <span className="colored">03.</span> Teacher
            </h2>
            <p className="about__txt">
              I started coding in the December 2018 and I'm self-taught
              developer. I have serious passion for modern looking websites with
              a little bit of animations. I love what I'm doing and I'm highly
              motivated to collaborate with someone. If you are up into some
              projects, just let me know!
            </p>
            <a href="#!" className="btn btn--secondary about__btn">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </StyledAbout>
  )
}
