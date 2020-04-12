import React, { useEffect } from "react"
import styled from "styled-components"

const StyledContact = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111;
  padding: 100px 0;

  .contact {
    &__wrapper {
      margin: 50px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      .btn {
        margin-top: 2rem;
      }
    }

    &__desc {
      text-align: center;
      margin: 50px 0;
      color: #bdbdbd;
    }
  }

  .input {
    &__field {
      display: flex;
      flex-direction: column;

      label {
        color: #333;
        margin-bottom: 0.5rem;
        text-shadow: 0px 0px 10px black;
        font-size: 14px;
      }

      input,
      textarea {
        border-radius: 4px;
        border: 2px solid #1a1a1a;
        height: 60px;
        width: 100%;
        font-family: "JetBrains Mono Medium";
        background: transparent;
        color: #02d463;
        transition: 0.2s;
        outline: none;
        font-size: inherit;
        padding: 15px;

        &:focus {
          border-color: #02d463;
          transition: 0.2s;
        }
      }

      textarea {
        height: 200px;
      }

      &--grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
        width: 50%;
      }

      &.focus input,
      &.focus textarea {
        border-color: #02d463;
      }

      &.focus label {
        color: #02d463;
        transition: 0.2s;
      }
    }

    &__textarea {
      margin-top: 1rem;
      width: 50%;
    }
  }

  input[type="submit"] {
    font-family: "JetBrains Mono Regular";
    cursor: pointer;
    font-size: inherit;
    background: #02d463 !important;

    &:hover {
      color: #02d463;
      background: transparent !important;
    }
  }
`

export default function Contact() {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input__field-input")

    function addcl() {
      let parent = this.parentNode
      parent.classList.add("focus")
    }

    function remcl() {
      let parent = this.parentNode
      if (this.value === "") {
        parent.classList.remove("focus")
      }
    }

    inputs.forEach(input => {
      input.addEventListener("focus", addcl)
      input.addEventListener("blur", remcl)
    })
  }, [])
  return (
    <StyledContact id="contact">
      <div className="container container--secondary">
        <div className="container container--primary">
          <h2>Get in touch</h2>
          <div className="contact__desc section__desc">Contact me!</div>
          <form className="contact__wrapper">
            <div className="input__field--grid">
              <div className="input__field">
                <label htmlFor="name">Name</label>
                <input
                  required
                  className="input__field-input"
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="off"
                />
              </div>
              <div className="input__field">
                <label htmlFor="email">Email</label>
                <input
                  required
                  className="input__field-input"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="input__field input__textarea">
              <label htmlFor="msg">Message</label>
              <textarea
                required
                className="input__field-input"
                id="msg"
                name="msg"
              ></textarea>
            </div>
            <input type="submit" value="Submit" className="btn btn--primary" />
          </form>
        </div>
      </div>
    </StyledContact>
  )
}
