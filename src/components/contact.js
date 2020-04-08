import React from "react"
import styled from "styled-components"

const StyledContact = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .contact {
    &__wrapper {
      margin: 50px 0;
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
        border: 2px solid #eee;
        height: 60px;
        width: 300px;
        font-family: "JetBrains Mono";
      }

      textarea {
        width: 600px;
        height: 200px;
      }

      &--grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
      }
    }

    &__textarea {
      margin-top: 1rem;
    }
  }
`

export default function Contact() {
  return (
    <StyledContact>
      <div className="container">
        <h1>Get In Touch</h1>
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
