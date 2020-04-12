import { createGlobalStyle } from "styled-components"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faEnvelope,
  faPaperclip,
  faExternalLinkAlt,
  faFire,
  faCross,
} from "@fortawesome/free-solid-svg-icons"

import GrandHotel from "../fonts/GrandHotel/GrandHotel-Regular.ttf"
import JetBrainsMonoRegular from "../fonts/JBMono/JetBrainsMono-Regular.ttf"
import JetBrainsMonoMedium from "../fonts/JBMono/JetBrainsMono-Medium.ttf"
import JetBrainsMonoBold from "../fonts/JBMono/JetBrainsMono-Bold.ttf"
import JetBrainsMonoExtraBold from "../fonts/JBMono/JetBrainsMono-ExtraBold.ttf"

library.add(fab, faEnvelope, faPaperclip, faExternalLinkAlt, faFire, faCross)

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

  html {
    overflow-x: hidden;
  }

  body {
    font-family: 'JetBrains Mono Regular';
    margin: 0;
    overflow-x: hidden;
    color: white;
    background: #1a1a1a;
  }

  body::-webkit-scrollbar {
    width: 0.5em;
  }

  body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }

  body::-webkit-scrollbar-thumb {
    background: #333;
    outline: 1px solid white;
    border-radius: 4px;

    &:hover {
      background: #02D463;
    }
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

  h1, h2 {
    text-shadow: 0px 0px 10px black;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &--primary {
      width: 90%;
    }

    &--secondary {
      width: 90%;
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
    box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
    
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

  .section__desc {
    text-shadow: 0px 0px 10px black;
  }

  @media screen and (max-width: 1280px) {
    .board__container {
      width: 758px;
      height: 450px;
      bottom: -200px;
      right: -100px;
    }
  }

  @media screen and (max-width: 1080px) {
    .board__container {
      width: 506px;
      height: 300px;
      bottom: -50px;
      padding: 10px;
    }
  }

  @media screen and (max-width: 768px) {
    body {
      font-size: 14px;
    }
    h1 {
      font-size: 48px;
    }
    h2 {
      font-size: 24px;
    }
    .navbar__links {
      display: none;
    }
    .board__container {
      display: none;
    }

    .decoration__tick {
      left: 65% !important;
    }

    .container__hero--secondary {
      margin: 2rem 0 !important;
    }

    .about__container {
      flex-direction: column-reverse !important;
      img {
        align-self: flex-start !important;
        margin-bottom: 50px;
        width: 100% !important;
      }
    }

    .about__wrapper {
      width: 100%;
    }

    .about__desc, .hero__desc {
      width: 100% !important;
      text-align: justify;
    }

    .work__wrapper, .blog__wrapper {
      grid-template-columns: repeat(1, 1fr) !important;
    }

    .work__box {
      margin: 0 !important;
    }

    .input__field--grid, .input__textarea {
      width: 100% !important;
    }

    .input__field--grid {
      grid-template-columns: repeat(1,1fr) !important;
    }

    .footer__container {
      flex-direction: column;
    }

    .footer__copy {
      margin-top: 25px;
    }

    .footer__link {
      margin: 0 20px !important;
    }
  }

`

export default GlobalStyle
