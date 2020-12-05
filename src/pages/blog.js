import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Head from '../components/defaults/head'
import Layout from '../components/defaults/layout'
import Header from '../components/header'

const Container = styled.div`
  margin: 100px auto auto;
  text-align: center;

  h1 {
    margin: 50px 0;
  }

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
      width: 90%;
      list-style: none;
      margin: 50px 0;
      padding: 0;
      text-align: left;
    }
    &__box {
      background: #111;
      border-radius: 4px;
      padding: 15px;
      transition: 0.4s;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      opacity: 0.4;

      &:hover {
        transform: translateY(-10px);
        transition: 0.4s;
        opacity: 1;
      }
    }
    &__img {
      width: 100%;
      height: 150px;
      border-radius: 4px;
      object-fit: cover;
    }
    &__title {
      font-family: 'JetBrains Mono';
      direction: ltr;
      margin: 10px 0 5px;
    }
    &__time {
      font-size: 14px;
      color: #bdbdbd;
      direction: ltr;
    }
  }
`

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            background {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  const output = data.allContentfulBlogPost.edges.map((element) => {
    const { id, slug, background, title, publishedDate } = element.node
    return (
      <li key={id} className="blog__box">
        <Link to={`/blog/${slug}`}>
          <img
            className="blog__img"
            src={background.file.url}
            alt={title}
            loading="lazy"
          />
          <p className="blog__title">{title}</p>
          <p className="blog__time">{publishedDate}</p>
        </Link>
      </li>
    )
  })
  return (
    <Layout>
      <Head title="All posts" />
      <Header />
      <Container className="container container--secondary">
        <div className="container container--primary">
          <h1>All posts</h1>
          <p>Read now!</p>
        </div>
        <ul className="blog__wrapper">{output}</ul>
      </Container>
    </Layout>
  )
}

export default BlogPage
