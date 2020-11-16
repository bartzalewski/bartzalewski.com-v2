import React from "react"
import styled from "styled-components"
import Project from "./project"

import hoppWebM from "../images/projects/hopp.webm"
import grammarlyWebM from "../images/projects/grammarlydark.webm"
import pagetifyWebM from "../images/projects/pagetify.webm"
import schoolifyWebM from "../images/projects/schoolify.webm"
import dojrzewajWebM from "../images/projects/dojrzewaj.webm"
import centrummotoWebM from "../images/projects/centrummoto.webm"
import cz5pWebM from "../images/projects/cz5p.webm"
import teleanWebM from "../images/projects/telean.webm"
import darkpaypalWebM from "../images/projects/darkpaypal.webm"
import bartzalewskiV1WebM from "../images/projects/bartzalewski-v1.webm"

const ProjectsWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #111;
  padding: 100px 0;
`
const WorkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px 20px;
  width: 100%;
`
const Title = styled.h2``
const Description = styled.p`
  text-align: center;
  margin: 50px 0;
  color: #bdbdbd;
`
const Animation = styled.div`
  &:nth-of-type(2),
  &:nth-of-type(5),
  &:nth-of-type(8) {
    margin-top: 50px;
  }

  &:nth-of-type(3),
  &:nth-of-type(6),
  &:nth-of-type(9) {
    margin-top: 100px;
  }
`

export default function Projects() {
  return (
    <ProjectsWrapper id="projects">
      <div className="container container--secondary">
        <div className="container container--primary">
          <Title>My projects</Title>
          <Description className="work__desc section__desc">
            Check out my portfolio!
          </Description>
          <WorkWrapper className="work__wrapper">
            <Animation className="work--animation">
              <Project
                title="HOPP"
                bgwebm={hoppWebM}
                github="#!"
                external="https://hopp.pl/"
              />
            </Animation>
            <Animation className="work--animation">
              <Project
                title="Grammarly Dark"
                bgwebm={grammarlyWebM}
                github="https://github.com/bartzalewski/grammarly-dark"
                external="https://www.producthunt.com/posts/grammarly-dark"
              />
            </Animation>
            <Animation className="work--animation">
              <Project
                title="Pagetify"
                bgwebm={pagetifyWebM}
                github="https://github.com/bartzalewski/pagetify"
                external="https://pagetify.com/"
              />
            </Animation>
            <Animation className="work--animation">
              <Project
                title="Schoolify"
                bgwebm={schoolifyWebM}
                github="https://github.com/bartzalewski/schoolify"
                external="https://schoolify.app/"
              />
            </Animation>
            <Animation className="work--animation">
              <Project
                title="dojrzewaj.pl"
                bgwebm={dojrzewajWebM}
                github="#!"
                external="https://dojrzewaj.pl/"
              />
            </Animation>
            <Animation className="work--animation">
              <Project
                title="Centrum Moto"
                bgwebm={centrummotoWebM}
                github="#!"
                external="https://centrummoto.pl/"
              />
            </Animation>
            <Animation className="work--animation">
              <Project
                title="coza500plus.pl"
                bgwebm={cz5pWebM}
                github="https://github.com/bartzalewski/coza500plus"
                external="https://coza500plus.pl/"
              />
            </Animation>
            <Animation className="work--animation">
              <Project
                title="Telean"
                bgwebm={teleanWebM}
                github="https://github.com/bartzalewski/telean-website"
                external="https://telean-website.herokuapp.com/"
              />
            </Animation>
            <Animation className="work--animation">
              <Project
                title="Dark PayPal"
                bgwebm={darkpaypalWebM}
                github="https://github.com/bartzalewski/darkness"
                external="#!"
              />
            </Animation>
            <Animation className="work--animation">
              <Project
                title="My first portfolio"
                bgwebm={bartzalewskiV1WebM}
                github="https://github.com/bartzalewski/bartzalewski.com-v1"
                external="https://bartzalewski-v1.herokuapp.com/"
              />
            </Animation>
          </WorkWrapper>
        </div>
      </div>
    </ProjectsWrapper>
  )
}
