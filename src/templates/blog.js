import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Header from "../components/header"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const StyledBlog = styled.div`
  margin: 100px auto auto;

  h2,
  h3 {
    margin-top: 50px;
  }

  h3 {
    font-size: 24px;
    font-family: "JetBrains Mono Bold";
  }

  p {
    margin-top: 25px;
    text-align: justify;
    color: #bdbdbd;
    text-shadow: 0px 0px 10px black;
  }

  span {
    text-shadow: 0px 0px 10px black;
  }

  .container--primary {
    align-items: flex-start;
  }

  .blog__content {
    margin-bottom: 50px;
    margin-top: 25px;
    font-size: 16px;
    width: 100%;
  }

  .gatsby-resp-image-wrapper {
    opacity: 0.4;
    transition: 0.4s;
    margin-bottom: 50px;

    &:hover {
      opacity: 1;
      transition: 0.4s;
    }
  }

  .gatsby-resp-image-background-image {
    padding: 0 !important;
  }

  .gatsby-resp-image-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
    margin-top: 50px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5) !important;
  }
`

const Blog = props => {
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <Header />
      <StyledBlog className="container container--secondary">
        <div className="container container--primary">
          <h2>{props.data.markdownRemark.frontmatter.title}</h2>
          <span>{props.data.markdownRemark.frontmatter.date}</span>
          <div
            className="blog__content"
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          ></div>
        </div>
      </StyledBlog>
    </Layout>
  )
}

export default Blog
