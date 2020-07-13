import React from "react"
import styled from "styled-components"
import BoardBox from "./boardBox"

import pagetifyWebM from "../images/projects/pagetify.webm"
import schoolifyWebM from "../images/projects/schoolify.webm"
import grammarlyWebM from "../images/projects/grammarlydark.webm"
import centrummotoWebM from "../images/projects/centrummoto.webm"

const StyledBoard = styled.div`
  width: 100%;
  background: #212121;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 15px;
  top: -50px;
  padding-top: 56.25%;
  transform: rotate3d(0.5, -0.866, 0, 15deg) rotate(-1deg);

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
      left: -10px;
      top: -10px;
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

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  outline: 10px solid #222;
`

const Board = () => {
  return (
    <StyledBoard className="board__container">
      <StyledGrid className="board__grid">
        <div
          data-sal="zoom-in"
          data-sal-delay="400"
          data-sal-easing="ease"
          data-sal-duration="500"
        >
          <BoardBox
            bgwebm={pagetifyWebM}
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
            bgwebm={grammarlyWebM}
            title="Grammarly Dark"
            url="https://chrome.google.com/webstore/detail/grammarly-dark/noojmhngiheennhgaffkfboanjpbkpep"
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
            title="Centrum Moto"
            url="https://centrummoto.pl/"
          />
        </div>
      </StyledGrid>
    </StyledBoard>
  )
}

export default Board
