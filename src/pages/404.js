import React from 'react'
import styled from 'styled-components'

import Head from '../components/defaults/head'
import Layout from '../components/defaults/layout'
import Header from '../components/header'

const Container = styled.div`
  margin: 100px auto auto;
  text-align: center;
`
const Title = styled.h1`
  margin: 50px 0;
`
const Description = styled.p``

const NotFoundPage = () => (
  <Layout>
    <Head title="404 Not Found" />
    <Header />
    <Container className="container container--secondary">
      <div className="container container--primary">
        <Title>NOT FOUND</Title>
        <Description>
          You just hit a route that doesn&#39;t exist... the sadness.
        </Description>
      </div>
    </Container>
  </Layout>
)

export default NotFoundPage
