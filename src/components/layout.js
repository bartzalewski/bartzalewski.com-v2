import React from "react"
import GlobalStyle from "../theme/globalStyle"

import Footer from "./footer"

const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
