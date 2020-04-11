import React from "react"
import styled from "styled-components"
import pagetify from "../images/projects/pagetify.png"
import schoolify from "../images/projects/schoolify.png"
import dojrzewaj from "../images/projects/dojrzewaj.png"
import centrummoto from "../images/projects/centrummoto.png"

import BoardBox from "./boardBox"

const StyledBoard = styled.div`
  width: 900px;
  height: 600px;
  background: #212121;
  border-radius: 10px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.5);
  margin-top: 100px;
  position: absolute;
  right: -100px;
  bottom: -200px;
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;

  img {
    opacity: 0.4;
    /* transition: 0.5s; */

    &:hover {
      opacity: 1;
      /* transition: 0.5s; */
    }
  }

  .board {
    &__box {
      width: 100%;
      height: 100%;
      position: relative;
      outline: none;
    }
  }

  .back {
    background-size: cover;
    border-radius: 4px;
  }

  .front {
    background: #1a1a1a;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  }

  img,
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
