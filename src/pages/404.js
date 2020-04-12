import React from "react"
import styled from "styled-components"

import Head from "../components/head"
import Layout from "../components/layout"
import Header from "../components/header"

const StyledNotFoundPage = styled.div`
  margin: 100px auto auto;
  text-align: center;

  h1 {
    margin-top: 50px;
  }

  p {
    margin-top: 25px;
  }
`

const NotFoundPage = () => (
  <Layout>
    <Head title="404 Not Found" />
    <Header />
    <StyledNotFoundPage className="container container--secondary">
      <div className="container container--primary">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </StyledNotFoundPage>
  </Layout>
)

export default NotFoundPage
