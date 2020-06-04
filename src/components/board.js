import React from "react"
import styled from "styled-components"
import BoardBox from "./boardBox"

import pagetifyWebM from "../images/projects/pagetify.webm"
import pagetifyMP4 from "../images/projects/pagetify.mp4"
import schoolifyWebM from "../images/projects/schoolify.webm"
import schoolifyMP4 from "../images/projects/schoolify.mp4"
import dojrzewajWebM from "../images/projects/dojrzewaj.webm"
import dojrzewajMP4 from "../images/projects/dojrzewaj.mp4"
import centrummotoWebM from "../images/projects/centrummoto.webm"
import centrummotoMP4 from "../images/projects/centrummoto.mp4"

const StyledBoard = styled.div`
  width: 1010px;
  height: 600px;
  background: #212121;
  border-radius: 10px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.5);
  position: absolute;
  right: -250px;
  bottom: -350px;
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;

  .board {
    &__wrapper {
      width: 100%;
      height: 100%;
      background: #111;
      border-radius: 4px;
      position: relative;
    }

    &__box {
      width: 100%;
      height: 100%;
      position: absolute;
      outline: none;
      top: -15px;
      left: -15px;
      filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));
    }
  }

  .back {
    background-size: cover;
    background-position: center;
    border-radius: 4px;
  }

  .front {
    background: #222;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  }

  video,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    will-change: transform, opacity;
  }
`

const Board = () => {
  return (
    <StyledBoard className="board__container">
      <div
        data-sal="zoom-in"
        data-sal-delay="400"
        data-sal-easing="ease"
        data-sal-duration="500"
      >
        <BoardBox
          bgwebm={pagetifyWebM}
          bgmp4={pagetifyMP4}
          title="Pagetify"
          url="https://pagetify.com/"
        />
      </div>
      <div
        data-sal="zoom-in"
        data-sal-delay="500"
        data-sal-easing="ease"
        data-sal-duration="500"
      >
        <BoardBox
          bgwebm={schoolifyWebM}
          bgmp4={schoolifyMP4}
          title="Schoolify"
          url="https://schoolify.app/"
        />
      </div>
      <div
        data-sal="zoom-in"
        data-sal-delay="600"
        data-sal-easing="ease"
        data-sal-duration="500"
      >
        <BoardBox
          bgwebm={dojrzewajWebM}
          bgmp4={dojrzewajMP4}
          title="dojrzewaj.pl"
          url="https://dojrzewaj.pl/"
        />
      </div>
      <div
        data-sal="zoom-in"
        data-sal-delay="700"
        data-sal-easing="ease"
        data-sal-duration="500"
      >
        <BoardBox
          bgwebm={centrummotoWebM}
          bgmp4={centrummotoMP4}
          title="Centrum Moto"
          url="https://centrummoto.pl/"
        />
      </div>
    </StyledBoard>
  )
}

export default Board
