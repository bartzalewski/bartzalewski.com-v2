import React from "react"
import GlobalStyle from "../theme/globalStyle"

import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
