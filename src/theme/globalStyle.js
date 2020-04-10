import { createGlobalStyle } from "styled-components"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faEnvelope,
  faPaperclip,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons"

import GrandHotel from "../fonts/GrandHotel/GrandHotel-Regular.ttf"
import JetBrainsMonoRegular from "../fonts/JBMono/JetBrainsMono-Regular.ttf"
import JetBrainsMonoMedium from "../fonts/JBMono/JetBrainsMono-Medium.ttf"
import JetBrainsMonoBold from "../fonts/JBMono/JetBrainsMono-Bold.ttf"
import JetBrainsMonoExtraBold from "../fonts/JBMono/JetBrainsMono-ExtraBold.ttf"

library.add(fab, faEnvelope, faPaperclip, faExternalLinkAlt)

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "JetBrains Mono Regular";
    src: url(${JetBrainsMonoRegular});
  }
  @font-face {
    font-family: "JetBrains Mono Medium";
    src: url(${JetBrainsMonoMedium});
  }
  @font-face {
    font-family: "JetBrains Mono Bold";
    src: url(${JetBrainsMonoBold});
  }
  @font-face {
    font-family: "JetBrains Mono Extra Bold";
    src: url(${JetBrainsMonoExtraBold});
  }
  @font-face {
    font-family: "Grand Hotel";
    src: url(${GrandHotel});
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }

  ::selection {
    background: #02D463;
    color: white;
  }

  body {
    font-family: 'JetBrains Mono Regular';
    margin: 0;
    overflow-x: hidden;
    color: white;
    background: #1a1a1a;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    font-size: 64px;
    font-family: 'JetBrains Mono Bold'
  }

  h2 {
    font-size: 36px;
    font-family: 'JetBrains Mono Bold'
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &--primary {
      width: 1200px;
    }

    &--secondary {
      width: 1400px;
    }
  }

  .default-link {
    &__link {
      margin: 0 10px;
      display: inline-flex;
      overflow: hidden;
      position: relative;
      transition: 0.5s ease;

      &:hover {
        color: #02d463;
        transition: 0.5s ease;
      }

      &:before {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: #02d463;
        transform: translateX(-100%);
      }

      &:before,
      &:after {
        content: "";
        position: absolute;
        transition: transform 0.5s ease;
      }

      &:hover:before {
        transform: translateX(0);
      }

      &:after {
        content: "";
        position: absolute;
        transition: transform 0.5s ease;
      }
    }
  }

  .btn {
    padding: 10px 17.5px;
    border-radius: 4px;
    border: 2px solid transparent;
    transition: .2s ease;

    &:hover {
      transition: .2s ease;
    }

    &--primary {
      color: white;
      background: #02D463;

      &:hover {
        background: transparent;
        color: #02D463;
        border: 2px solid #02D463;
      }
    }

    &--secondary {
      color: #02D463;
      border: 2px solid #02D463;

      &:hover {
        background: #02D463;
        color: white;
        border: 2px solid #02D463;
      }
    }
  }

  .colored {
    color: #02D463;
  }

`

export default GlobalStyle
