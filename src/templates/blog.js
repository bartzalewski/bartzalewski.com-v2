import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/defaults/layout'
import Head from '../components/defaults/head'
import Header from '../components/header'

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      background {
        file {
          url
        }
      }
      body {
        raw
      }
    }
  }
`

const BlogSection = styled.div`
  margin: 100px auto auto;

  h2,
  h3,
  h4 {
    margin-top: 50px;
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 32px;
    font-family: 'JetBrains Mono';
  }

  h4 {
    font-family: 'JetBrains Mono';
    font-size: 26px;
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

  img {
    margin-top: 25px;
    width: 100%;
    opacity: 0.4;
    transition: 0.4s;
    border-radius: 4px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

    &:hover {
      opacity: 1;
      transition: 0.4s;
    }
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
    height: 200px;
    object-fit: cover;
    margin-top: 50px;

    &:hover {
      opacity: 1;
      transition: 0.4s;
    }
  }
`

const Blog = ({ data }) => {
  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} loading="lazy" />
      },
    },
  }
  const { title, publishedDate, background, body } = data.contentfulBlogPost
  return (
    <Layout>
      <Head title={title} />
      <Header />
      <BlogSection className="container container--secondary">
        <div className="container container--primary container__blog">
          <h2 className="post__title">{title}</h2>
          <span>{publishedDate}</span>
          <img
            className="blog__img"
            src={background.file.url}
            alt={title}
            loading="lazy"
          />
          <div className="blog__content">
            {documentToReactComponents(JSON.parse(body.raw), options)}
          </div>
        </div>
      </BlogSection>
    </Layout>
  )
}

export default Blog
