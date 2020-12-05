import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated as a } from 'react-spring'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #111;
  border-radius: 4px;
  position: relative;
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  outline: none;
  left: -10px;
  top: -10px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));

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
const Source = styled.source``
const Title = styled.p``
const Button = styled.a``

const BoardBox = ({ bgwebm, title, url }) => {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <Container className="board__wrapper">
      <Wrapper
        className="board__box"
        onMouseEnter={() => set((state) => !state)}
        onMouseLeave={() => set((state) => !state)}
        role="button"
        tabIndex="0"
      >
        <a.video
          className="back"
          loop={true}
          autoPlay={true}
          muted={true}
          playsInline={true}
          style={{
            opacity: opacity.interpolate((o) => 1 - o),
            transform,
          }}
        >
          <Source src={bgwebm} type="video/webm" />
        </a.video>
        <a.div
          className="front"
          style={{
            opacity,
            transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
          }}
        >
          <Title>{title}</Title>
          <Button
            className="btn btn--secondary"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </Button>
        </a.div>
      </Wrapper>
    </Container>
  )
}

export default BoardBox
