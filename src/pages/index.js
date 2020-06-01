import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default IndexPage
