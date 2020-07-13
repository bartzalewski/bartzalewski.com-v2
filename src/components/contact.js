import React, { useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

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
        background: #1a1a1a;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        &:focus {
          border-color: #02d463;
          transition: 0.2s;
        }
      }
      textarea {
        height: 200px;
        resize: none;
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
  const resetForm = () => document.getElementById("contact-form").reset()
  const handleSubmit = e => {
    e.preventDefault()
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value
    const success = document.getElementById("success")
    const failure = document.getElementById("failure")
    axios({
      method: "POST",
      url: "https://bartzalewski-v2-api.herokuapp.com/send",
      data: {
        name: name,
        email: email,
        message: message,
      },
    }).then(response => {
      if (response.data.msg === "success") {
        success.style.display = "block"
        resetForm()
      } else if (response.data.msg === "fail") {
        failure.style.display = "block"
      }
    })
  }
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
          <h2 data-sal="slide-up" data-sal-easing="ease">
            Get in touch
          </h2>
          <div
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
            className="contact__desc section__desc"
          >
            Contact me!
          </div>
          <span id="success" className="colored" style={{ display: "none" }}>
            Message sent!
          </span>
          <span id="failure" style={{ color: "#FF5252", display: "none" }}>
            Message failed to sent!
          </span>
          <form
            onSubmit={handleSubmit}
            method="POST"
            className="contact__wrapper"
            id="contact-form"
          >
            <div className="input__field--grid">
              <div
                className="input__field"
                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-easing="ease"
              >
                <label htmlFor="name">Name</label>
                <input
                  aria-label="Name"
                  required
                  className="input__field-input"
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="off"
                />
              </div>
              <div
                className="input__field"
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease"
              >
                <label htmlFor="email">Email</label>
                <input
                  aria-label="Email"
                  required
                  className="input__field-input"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                />
              </div>
            </div>
            <div
              className="input__field input__textarea"
              data-sal="slide-up"
              data-sal-delay="400"
              data-sal-easing="ease"
            >
              <label htmlFor="message">Message</label>
              <textarea
                aria-label="Message"
                required
                className="input__field-input"
                id="message"
                name="message"
              ></textarea>
            </div>
            <div
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-easing="ease"
            >
              <input
                aria-label="Submit"
                type="submit"
                value="Submit"
                className="btn btn--primary"
              />
            </div>
          </form>
        </div>
      </div>
    </StyledContact>
  )
}
