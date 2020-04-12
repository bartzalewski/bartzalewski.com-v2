import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Header from "../components/header"

const StyledNotFoundPage = styled.div`
  margin-top: 100px;
`

const NotFoundPage = () => (
  <Layout>
    <Header />
    <StyledNotFoundPage className="container">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </StyledNotFoundPage>
  </Layout>
)

export default NotFoundPage
