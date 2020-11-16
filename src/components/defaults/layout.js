import React, { useEffect } from "react"
import GlobalStyle from "../../theme/globalStyle"
import styled from "styled-components"
import Footer from "../footer"

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  main {
    flex-grow: 1;
  }
`
const Main = styled.main``

const Layout = ({ children }) => {
  if (typeof window !== "undefined") require("smooth-scroll")('a[href*="#"]')
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 200
      const nav = document.getElementById("nav")
      if (nav)
        isTop ? nav.classList.add("scrolled") : nav.classList.remove("scrolled")
    })
  }, [])
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrapper>
  )
}

export default Layout
