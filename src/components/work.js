import React from "react"
import styled from "styled-components"

const StyledWork = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .work {
    &__desc {
      text-align: center;
      margin: 50px 0;
      color: #3e3e3e;
    }
  }
`

export default function Work() {
  return (
    <StyledWork>
      <div className="container">
        <h1>My Work</h1>
        <p className="work__desc">Check out my portfolio!</p>
        <div className="work__wrapper">
          <a href="#!" className="work__box">
            Pagetify
          </a>
          <a href="#!" className="work__box">
            Schoolify
          </a>
          <a href="#!" className="work__box">
            dojrzewaj.pl
          </a>
        </div>
      </div>
    </StyledWork>
  )
}
