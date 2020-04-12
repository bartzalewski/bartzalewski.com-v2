import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
import Blog from "../components/blog"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <Head />
    <Hero />
    <About />
    <Projects />
    <Blog />
    <Contact />
  </Layout>
)

export default IndexPage
