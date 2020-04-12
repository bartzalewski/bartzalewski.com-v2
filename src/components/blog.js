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

    &__wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;
      width: 100%;
    }

    &__box {
      background: #111;
      border-radius: 4px;
      height: 200px;
    }
  }
`

export default function Blog() {
  return (
    <StyledBlog id="blog">
      <div className="container container--secondary">
        <div className="container container--primary blog__container">
          <h2>Blog</h2>
          <p className="blog__desc section__desc">Check out my blog!</p>
          <div className="blog__wrapper">
            <a href="#!" className="blog__box">
              <p className="blog__title">My setup</p>
            </a>
            <a href="#!" className="blog__box">
              Schoolify
            </a>
            <a href="#!" className="blog__box">
              dojrzewaj.pl
            </a>
            <a href="#!" className="blog__box">
              dojrzewaj.pl
            </a>
          </div>
        </div>
      </div>
    </StyledBlog>
  )
}
