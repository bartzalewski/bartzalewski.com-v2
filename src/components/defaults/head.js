import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Helmet
      title={
        title
          ? `${title} - ${data.site.siteMetadata.title}`
          : `${data.site.siteMetadata.title}`
      }
    >
      <meta name="description" content="Bart Zalewski | Full-Stack Developer" />
    </Helmet>
  )
}

export default Head
