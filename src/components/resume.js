import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Resume = () => (
  <OutboundLink
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="navbar__link navbar__resume btn btn--secondary"
  >
    Resume
  </OutboundLink>
)

export default Resume
