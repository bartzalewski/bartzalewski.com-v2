import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"
import Header from "../components/header"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      background {
        file {
          url
        }
      }
      body {
        json
      }
    }
  }
`

const StyledBlog = styled.div`
  margin: 100px auto auto;

  h2,
  h3 {
    margin-top: 50px;
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 32px;
    font-family: "JetBrains Mono Bold";
  }

  p {
    margin-top: 25px;
    color: #bdbdbd;
    text-shadow: 0px 0px 10px black;
  }

  span {
    text-shadow: 0px 0px 10px black;
    color: #bdbdbd;
    margin-top: 25px;
  }

  .container--primary {
    align-items: flex-start;
  }

  .container__blog {
    width: 680px;
  }

  .blog__content {
    margin-bottom: 50px;
    margin-top: 25px;
    font-size: 21px;
  }

  .blog__img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
    opacity: 0.4;
    transition: 0.4s;
    margin-top: 50px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

    &:hover {
      opacity: 1;
      transition: 0.4s;
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} loading="lazy" />
      },
    },
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <Header />
      <StyledBlog className="container container--secondary">
        <div className="container container--primary container__blog">
          <h2 className="post__title">{props.data.contentfulBlogPost.title}</h2>
          <span>{props.data.contentfulBlogPost.publishedDate}</span>
          <img
            className="blog__img"
            src={props.data.contentfulBlogPost.background.file.url}
            alt={props.data.contentfulBlogPost.title}
            loading="lazy"
          />
          <div className="blog__content">
            {documentToReactComponents(
              props.data.contentfulBlogPost.body.json,
              options
            )}
          </div>
        </div>
      </StyledBlog>
    </Layout>
  )
}

export default Blog
