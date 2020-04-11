import React, { useState } from "react"
import styled from "styled-components"
import pagetify from "../images/projects/pagetify.png"
import schoolify from "../images/projects/schoolify.png"
import dojrzewaj from "../images/projects/dojrzewaj.png"
import centrummoto from "../images/projects/centrummoto.png"
import { useSpring, animated as a } from "react-spring"

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
    }
  }

  .back {
    background: red;
    border-radius: 4px;
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
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <StyledBoard>
      <div
        className="board__box"
        onMouseEnter={() => set(state => !state)}
        onMouseLeave={() => set(state => !state)}
      >
        <a.div
          className="back"
          style={{
            opacity,
            transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          }}
        >
          aasd
        </a.div>
        <a.img
          src={pagetify}
          style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
          alt="Pagetify"
        />
      </div>
      <div
        className="board__box"
        onMouseEnter={() => set(state => !state)}
        onMouseLeave={() => set(state => !state)}
      >
        <a.div
          className="back"
          style={{
            opacity,
            transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          }}
        >
          aasd
        </a.div>
        <a.img
          src={schoolify}
          style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
          alt="Pagetify"
        />
      </div>
      <div
        className="board__box"
        onMouseEnter={() => set(state => !state)}
        onMouseLeave={() => set(state => !state)}
      >
        <a.div
          className="back"
          style={{
            opacity,
            transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          }}
        >
          aasd
        </a.div>
        <a.img
          src={dojrzewaj}
          style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
          alt="Pagetify"
        />
      </div>
      <div
        className="board__box"
        onMouseEnter={() => set(state => !state)}
        onMouseLeave={() => set(state => !state)}
      >
        <a.div
          className="back"
          style={{
            opacity,
            transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          }}
        >
          aasd
        </a.div>
        <a.img
          src={centrummoto}
          style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
          alt="Pagetify"
        />
      </div>
    </StyledBoard>
  )
}

export default Board
