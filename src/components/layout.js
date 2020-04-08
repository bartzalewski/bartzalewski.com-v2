import React from "react"
import GlobalStyle from "../theme/globalStyle"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
