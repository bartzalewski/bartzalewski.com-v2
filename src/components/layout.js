import React, { useEffect } from "react"
import GlobalStyle from "../theme/globalStyle"
import styled from "styled-components"

import Footer from "./footer"

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex-grow: 1;
  }
`

const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 200
      const nav = document.getElementById("nav")
      if (isTop) {
        nav.classList.add("scrolled")
      } else {
        nav.classList.remove("scrolled")
      }
    })
  }, [])
  return (
    <StyledLayout>
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  )
}

export default Layout
