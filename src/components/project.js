import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Project = props => {
  return (
    <div className="work__box">
      <video
        alt={props.title}
        loop={true}
        autoPlay={true}
        muted={true}
        playsInline={true}
      >
        <source src={props.bgwebm} type="video/webm" />
      </video>
      <div className="work__links">
        <div>
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FontAwesomeIcon icon={["fab", "github"]} className="about__icon" />
          </a>
          <a
            href={props.external}
            target="_blank"
            rel="noopener noreferrer"
            title="External"
          >
            <FontAwesomeIcon icon="external-link-alt" />
          </a>
        </div>
        <span>{props.title}</span>
      </div>
    </div>
  )
}

export default Project
