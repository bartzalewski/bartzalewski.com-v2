import React from 'react'
import styled from 'styled-components'
import BoardBox from './boardBox'

import grammarlyWebM from '../../images/projects/grammarlydark.webm'
import hoppWebM from '../../images/projects/hopp.webm'
import joindevsWebM from '../../images/projects/joindevs.webm'
import bartzalewskiV2WebM from '../../images/projects/bartzalewski-v2.webm'

const BoardWrapper = styled.div`
  width: 100%;
  background: #212121;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 15px;
  top: -50px;
  padding-top: 56.25%;
  transform: rotate3d(0.5, -0.866, 0, 15deg) rotate(-1deg);
`
const Grid = styled.div`
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
    <BoardWrapper className="board__container">
      <Grid className="board__grid">
        <BoardBox
          bgwebm={joindevsWebM}
          title="JoinDevs"
          url="https://joindevs.com/"
        />
        <BoardBox bgwebm={hoppWebM} title="HOPP" url="https://hopp.pl/" />
        <BoardBox
          bgwebm={grammarlyWebM}
          title="Grammarly Dark"
          url="https://chrome.google.com/webstore/detail/grammarly-dark/noojmhngiheennhgaffkfboanjpbkpep"
        />
        <BoardBox
          bgwebm={bartzalewskiV2WebM}
          title="Bart Zalewski v2"
          url="https://bartzalewski.com/"
        />
      </Grid>
    </BoardWrapper>
  )
}

export default Board
