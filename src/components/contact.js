import React from "react"
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
  }

  .input {
    &__field {
      display: flex;
      flex-direction: column;

      span {
        color: #d2d2d2;
        margin-bottom: 0.5rem;
      }

      input,
      textarea {
        border-radius: 4px;
        border: 2px solid #1a1a1a;
        height: 60px;
        width: 100%;
        font-family: "JetBrains Mono";
        background: transparent;
        color: #02d463;
        transition: 0.2s;
        outline: none;
        font-size: inherit;
        padding: 10px;

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
    }

    &__textarea {
      margin-top: 1rem;
      width: 50%;
    }
  }
`

export default function Contact() {
  return (
    <StyledContact id="contact">
      <div className="container container--primary">
        <h2>Get in touch</h2>
        <div className="contact__wrapper">
          <div className="input__field--grid">
            <div className="input__field">
              <span>Name</span>
              <input type="text" />
            </div>
            <div className="input__field">
              <span>Email</span>
              <input type="text" />
            </div>
          </div>
          <div className="input__field input__textarea">
            <span>Message</span>
            <textarea></textarea>
          </div>
          <a href="#!" className="btn btn--secondary">
            Submit
          </a>
        </div>
      </div>
    </StyledContact>
  )
}
