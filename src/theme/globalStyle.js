import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  ::selection {
    background: #0097A7;
    color: white;
  }

  body {
    font-family: 'JetBrains Mono';
    margin: 0;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: black;
  }

  h1 {
    font-size: 48px;
    margin: 0;
  }

  h2 {
    font-size: 36px;
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
      background: #0097A7;

      &:hover {
        background: white;
        color: #0097A7;
        border: 2px solid #0097A7;
      }
    }

    &--secondary {
      color: #0097A7;
      border: 2px solid #0097A7;

      &:hover {
        background: #0097A7;
        color: white;
        border: 2px solid #0097A7;
      }
    }
  }

  .colored {
    color: #0097A7;
  }

`

export default GlobalStyle
