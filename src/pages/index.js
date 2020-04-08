import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Work from "../components/work"
import Testimonials from "../components/testimonials"
import Contact from "../components/contact"
import Head from "../components/head"

const IndexPage = () => (
  <Layout>
    <Head title="Home" />
    <Hero />
    <About />
    <Work />
    <Testimonials />
    <Contact />
  </Layout>
)

export default IndexPage
