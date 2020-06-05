import React from "react"
import styled from "styled-components"
import Project from "./project"

import pagetifyWebM from "../images/projects/pagetify.webm"
import schoolifyWebM from "../images/projects/schoolify.webm"
import dojrzewajWebM from "../images/projects/dojrzewaj.webm"
import centrummotoWebM from "../images/projects/centrummoto.webm"
import cz5pWebM from "../images/projects/cz5p.webm"
import teleanWebM from "../images/projects/telean.webm"
import darkpaypalWebM from "../images/projects/darkpaypal.webm"
import bartzalewskiV1WebM from "../images/projects/bartzalewski-v1.webm"

import pagetifyMP4 from "../images/projects/pagetify.mp4"
import schoolifyMP4 from "../images/projects/schoolify.mp4"
import dojrzewajMP4 from "../images/projects/dojrzewaj.mp4"
import centrummotoMP4 from "../images/projects/centrummoto.mp4"
import cz5pMP4 from "../images/projects/cz5p.mp4"
import teleanMP4 from "../images/projects/telean.mp4"
import darkpaypalMP4 from "../images/projects/darkpaypal.mp4"
import bartzalewskiV1MP4 from "../images/projects/bartzalewski-v1.mp4"

const StyledWork = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #111;
  padding: 100px 0;

  .work {
    &__wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 60px 20px;
      width: 100%;
    }
    &__box {
      video {
        width: 100%;
        opacity: 0.4;
        transition: 0.5s;
        border-radius: 4px;
        box-shadow: 0px 0px 10px black;
      }

      a {
        margin-right: 10px;
      }

      svg {
        width: 20px;
        height: 20px;
        transition: 0.2s;
        filter: drop-shadow(0px 0px 3px black);
        opacity: 0.4;

        &:hover {
          color: #02d463;
          transition: 0.2s;
        }
      }

      &:hover {
        span,
        svg,
        video {
          opacity: 1;
          transition: 0.2s;
        }
      }
    }
    &__links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 10px;

      span {
        font-size: 14px;
        text-shadow: 0px 0px 10px black;
        opacity: 0.4;
        transition: 0.2s;
      }
    }
    &__desc {
      text-align: center;
      margin: 50px 0;
      color: #bdbdbd;
    }
    &--animation {
      &:nth-of-type(2),
      &:nth-of-type(5),
      &:nth-of-type(8) {
        margin-top: 50px;
      }

      &:nth-of-type(3),
      &:nth-of-type(6) {
        margin-top: 100px;
      }
    }
  }
`

export default function Work() {
  return (
    <StyledWork id="projects">
      <div className="container container--secondary">
        <div className="container container--primary">
          <h2 data-sal="slide-up" data-sal-easing="ease">
            My projects
          </h2>
          <p
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
            className="work__desc section__desc"
          >
            Check out my portfolio!
          </p>
          <div className="work__wrapper">
            <div
              className="work--animation"
              data-sal="slide-up"
              data-sal-easing="ease"
            >
              <Project
                title="Pagetify"
                bgwebm={pagetifyWebM}
                bgmp4={pagetifyMP4}
                github="https://github.com/bartzalewski/pagetify"
                external="https://pagetify.com/"
              />
            </div>
            <div
              className="work--animation"
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-easing="ease"
            >
              <Project
                title="Schoolify"
                bgwebm={schoolifyWebM}
                bgmp4={schoolifyMP4}
                github="https://github.com/bartzalewski/schoolify"
                external="https://schoolify.app/"
              />
            </div>
            <div
              className="work--animation"
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              <Project
                title="dojrzewaj.pl"
                bgwebm={dojrzewajWebM}
                bgmp4={dojrzewajMP4}
                github="#!"
                external="https://dojrzewaj.pl/"
              />
            </div>
            <div
              className="work--animation"
              data-sal="slide-up"
              data-sal-easing="ease"
            >
              <Project
                title="Centrum Moto"
                bgwebm={centrummotoWebM}
                bgmp4={centrummotoMP4}
                github="#!"
                external="https://centrummoto.pl/"
              />
            </div>
            <div
              className="work--animation"
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-easing="ease"
            >
              <Project
                title="coza500plus.pl"
                bgwebm={cz5pWebM}
                bgmp4={cz5pMP4}
                github="https://github.com/bartzalewski/coza500plus"
                external="https://coza500plus.pl/"
              />
            </div>
            <div
              className="work--animation"
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              <Project
                title="Telean"
                bgwebm={teleanWebM}
                bgmp4={teleanMP4}
                github="https://github.com/bartzalewski/telean-website"
                external="https://telean-website.herokuapp.com/"
              />
            </div>
            <div
              className="work--animation"
              data-sal="slide-up"
              data-sal-easing="ease"
            >
              <Project
                title="Dark PayPal"
                bgwebm={darkpaypalWebM}
                bgmp4={darkpaypalMP4}
                github="https://github.com/bartzalewski/darkness"
                external="#!"
              />
            </div>
            <div
              className="work--animation"
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-easing="ease"
            >
              <Project
                title="My first portfolio"
                bgwebm={bartzalewskiV1WebM}
                bgmp4={bartzalewskiV1MP4}
                github="https://github.com/bartzalewski/bartzalewski.com-v1"
                external="https://bartzalewski-v1.herokuapp.com/"
              />
            </div>
          </div>
        </div>
      </div>
    </StyledWork>
  )
}
