import React, { useState } from "react"
import { useSpring, animated as a } from "react-spring"

const BoardBox = props => {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <div
      className="board__box"
      onMouseEnter={() => set(state => !state)}
      onMouseLeave={() => set(state => !state)}
      role="button"
      tabIndex="0"
    >
      <a.div
        className="back"
        style={{
          backgroundImage: `url(${props.bg})`,
          opacity: opacity.interpolate(o => 1 - o),
          transform,
        }}
      ></a.div>
      <a.div
        className="front"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        }}
      >
        <p>{props.title}</p>
        <a
          className="btn btn--secondary"
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>
      </a.div>
    </div>
  )
}

export default BoardBox
