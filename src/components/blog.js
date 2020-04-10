import React from "react"
import styled from "styled-components"

const StyledBlog = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 100px 0;

  .blog {
    &__container {
      align-items: flex-end;
    }

    &__desc {
      text-align: center;
      margin: 50px 0;
      color: #bdbdbd;
    }
  }
`

export default function Blog() {
  return (
    <StyledBlog id="blog">
      <div className="container container--primary blog__container">
        <h2>Blog</h2>
        <p className="blog__desc">Check out my portfolio!</p>
        <div className="blog__wrapper">
          <a href="#!" className="blog__box">
            Pagetify
          </a>
          <a href="#!" className="blog__box">
            Schoolify
          </a>
          <a href="#!" className="blog__box">
            dojrzewaj.pl
          </a>
        </div>
      </div>
    </StyledBlog>
  )
}
