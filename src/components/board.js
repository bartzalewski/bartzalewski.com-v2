import React from "react"
import styled from "styled-components"
import pagetify from "../images/projects/pagetify.png"
import schoolify from "../images/projects/schoolify.png"
import dojrzewaj from "../images/projects/dojrzewaj.png"
import centrummoto from "../images/projects/centrummoto.png"

const StyledBoard = styled.div`
  width: 800px;
  height: 600px;
  background: #212121;
  border-radius: 10px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.5);
  margin-top: 100px;
  position: absolute;
  right: -25px;
  bottom: -200px;
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;

  img {
    opacity: 0.4;
    transition: 0.5s;

    &:hover {
      opacity: 1;
      transition: 0.5s;
    }
  }
`

const Board = () => {
  return (
    <StyledBoard>
      <img src={pagetify} alt="Pagetify" />
      <img src={schoolify} alt="Schoolify" />
      <img src={dojrzewaj} alt="dojrzewaj.pl" />
      <img src={centrummoto} alt="Centrum Moto" />
    </StyledBoard>
  )
}

export default Board
