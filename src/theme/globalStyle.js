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
    outline: none;
    
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
    color: #02D463 !important;
  }

  .section__desc {
    text-shadow: 0px 0px 10px black;
  }

  .scrolled {
    position: fixed;
    transition: .4s;
    z-index: 5;
    background: #1a1a1a;
    box-shadow: 0px 0px 20px rgba(0,0,0,.5);
    height: 60px;
  }

  /* SIDENAV */

  .hamburger {
    display: none;
    position: relative;
    cursor: pointer;
    z-index: 4;
    outline: none;
    background: none;
    border: none;
  }

  .hamburger__wrapper {
    width: 25px;
    height: 20px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &:hover {
      .hamburger--line {
        background-color: #02D463;
      }
    }
  }

  .hamburger--line {
    position: absolute;
    height: 3px;
    width: 100%;
    transition: all cubic-bezier(0.26, 0.1, 0.27, 1.55) 0.35s;
    background-color: #fff;
  }

  .top {
    top: 0%;
    width: 75%;
    left: 0%;
  }

  .middle {
    top: 45%;
    width: 75%;
  }

  .bottom {
    top: 90%;
    width: 75%;
    left: 0%;
  }

  .icon.close .top {
    transform: rotate(45deg);
    top: 48%;
    width: 100%;
  }

  .icon.close .middle,
  .icon.close .bottom {
    transform: rotate(-45deg);
    top: 48%;
    width: 100%;
  }

  .sidenav--open {
    width: 40% !important;
    transition: 0.5s;
  }

  .sidenav {
    width: 0px;
    height: 100%;
    position: fixed;
    top: 0px;
	  right: 0px;
    z-index: 3;
    background-color: #111;
    transition: 0.2s ease-in-out;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgba(0,0,0,.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
      margin: 30px 0;
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
      display: block;
      transition: 0.2s ease-in-out;
      color: inherit;

      :hover:not(.navbar__resume) {
        color: #02D463;
      }

      &.navbar__resume {
        margin-left: 0;
        color: #02D463;

        &:hover {
          color: #fff;
        }
      }
    }

    .active {
      width: 100%;
      height: fit-content;
      font-weight: 500;
      color: #49a9e0;
    }

    &__more {
      transform: translateX(1rem);
      
      a {
        font-size: 14px;
      }
    }
  }

  .sidenav__content {
    position: relative;
    width: fit-content !important;
  }

  /* SIDENAV END */

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
    .hamburger {
		  display: block;
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

  @media screen and (max-width: 400px) {
    .footer__links {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .footer__link {
      margin: 0 !important;
    }

    .footer__copy {
      text-align: center;
    }
  }

  @media screen and (max-width: 310px) {
    footer {
      height: 120px !important;
    }
  }

`

export default GlobalStyle
