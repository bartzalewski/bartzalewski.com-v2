import React from "react"
import styled from "styled-components"

const StyledTestimonials = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .testimonials {
    &__desc {
      text-align: center;
      margin: 50px 0;
      color: #3e3e3e;
    }
  }
`

export default function Testimonials() {
  return (
    <StyledTestimonials>
      <div className="container">
        <h1>Testimonials</h1>
        <p className="testimonials__desc">
          Check out what other people think about me!
        </p>
        <div className="testimonials__wrapper">
          <a href="#!" className="testimonials__box">
            Pagetify
          </a>
          <a href="#!" className="testimonials__box">
            Schoolify
          </a>
          <a href="#!" className="testimonials__box">
            dojrzewaj.pl
          </a>
        </div>
      </div>
    </StyledTestimonials>
  )
}
