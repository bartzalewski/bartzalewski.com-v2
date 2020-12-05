import { createGlobalStyle } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faPaperclip,
  faExternalLinkAlt,
  faFire,
  faCross,
} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope, faPaperclip, faExternalLinkAlt, faFire, faCross)

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Grand Hotel';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Grand Hotel'), local('GrandHotel-Regular'), url('https://fonts.gstatic.com/s/grandhotel/v7/7Au7p_IgjDKdCRWuR1azplQKGFw.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
	  font-family: 'JetBrains Mono';
	  src: url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/fonts/webfonts/JetBrainsMono-Regular.eot') format('embedded-opentype'), url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/fonts/webfonts/JetBrainsMono-Regular.woff2') format('woff2'), url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/fonts/webfonts/JetBrainsMono-Regular.woff') format('woff'), url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/fonts/ttf/JetBrainsMono-Regular.ttf') format('truetype');
	  font-weight: normal;
	  font-style: normal;
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
    margin: 0;
    overflow-x: hidden;
    color: white;
    background: #1a1a1a;
    font-family: 'JetBrains Mono';
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
    font-family: 'JetBrains Mono';
  }
  h2 {
    font-size: 36px;
    font-family: 'JetBrains Mono';
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
      max-width: 1400px;
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
    -webkit-appearance: none;
    
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
      bottom: -200px;
      right: -100px;
    }
  }
  @media screen and (max-width: 1080px) {
    .board__container {
      bottom: -50px;
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
    h3 {
      font-size: 20px !important;
    }
    footer {
      height: 120px !important;
    }
    #home {
      background-attachment: scroll;
    }
    .hamburger {
		  display: block;
	  }
    .navbar__links {
      display: none;
    }
    .container__blog {
      width: auto !important;
    }
    .post__title {
      font-size: 30px !important;
    }
    .blog__content {
      font-size: 18px !important;

      h3 {
        font-size: 26px !important;
      }

      h4 {
        font-size: 21px !important;
      }
    }
    .board__container {
      position: relative !important;
      top: auto !important;
      left: 0 !important;
      transform: none !important;
      border: 5px solid #222 !important;
      border-radius: 5px !important;
    }
    .board__grid {
      outline: 0 !important;
      grid-gap: 5px !important;
    }
    .board__box {
      left: -5px !important;
      top: -5px !important;
    }
    .decoration {
      opacity: .5;
    }
    .decoration__tick {
      left: 65% !important;
      top: 50% !important;
    }
    .container__hero--secondary {
      margin: 2rem 0 !important;
    }
    .hero__left, .hero__right {
      width: 100% !important;
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
      width: 100% !important;
    }
    .about__desc, .hero__desc {
      width: 100% !important;
    }
    .work__wrapper, .blog__wrapper {
      grid-template-columns: repeat(1, 1fr) !important;
    }
    .work--animation {
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
    .footer__desc {
      text-align: center;
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
  }
`

export default GlobalStyle
