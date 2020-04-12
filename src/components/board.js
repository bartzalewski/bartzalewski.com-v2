import React from "react"
import styled from "styled-components"
import pagetify from "../images/projects/pagetify.webm"
import schoolify from "../images/projects/schoolify.webm"
import dojrzewaj from "../images/projects/dojrzewaj.webm"
import centrummoto from "../images/projects/centrummoto.webm"

import BoardBox from "./boardBox"

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
    <StyledBoard>
      <BoardBox bg={pagetify} title="Pagetify" url="https://pagetify.com/" />
      <BoardBox bg={schoolify} title="Schoolify" url="https://schoolify.app/" />
      <BoardBox
        bg={dojrzewaj}
        title="dojrzewaj.pl"
        url="https://dojrzewaj.pl/"
      />
      <BoardBox
        bg={centrummoto}
        title="Centrum Moto"
        url="https://centrummoto.pl/"
      />
    </StyledBoard>
  )
}

export default Board
