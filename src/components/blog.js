import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 100px 0;
`
const Container = styled.div`
  align-items: flex-end;
`
const Title = styled.h2``
const Description = styled.p`
  text-align: center;
  margin: 50px 0;
  color: #bdbdbd;
`
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
  margin-bottom: 50px;
`
const Box = styled.li`
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
`
const Image = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 4px;
  object-fit: cover;
`
const PostTitle = styled.p`
  font-family: 'JetBrains Mono';
  direction: ltr;
  margin: 10px 0 5px;
`
const PostTime = styled.p`
  font-size: 14px;
  color: #bdbdbd;
  direction: ltr;
`

export default function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: { fields: publishedDate, order: DESC }
        limit: 8
      ) {
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
      <Box key={id} className="blog__box">
        <Link to={`/blog/${slug}`}>
          <Image
            className="blog__img"
            src={background.file.url}
            alt={title}
            loading="lazy"
          />
          <PostTitle className="blog__title">{title}</PostTitle>
          <PostTime className="blog__time">{publishedDate}</PostTime>
        </Link>
      </Box>
    )
  })
  return (
    <BlogSection id="blog">
      <div className="container container--secondary">
        <Container className="container container--primary blog__container">
          <Title>Blog</Title>
          <Description className="blog__desc section__desc">
            Check out my blog!
          </Description>
          <List className="blog__wrapper">{output}</List>
          <Link to="/blog" className="btn btn--primary">
            See more
          </Link>
        </Container>
      </div>
    </BlogSection>
  )
}
