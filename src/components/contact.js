import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111;
  padding: 100px 0;
`
const Title = styled.h2``
const Description = styled.p`
  text-align: center;
  margin: 50px 0;
  color: #bdbdbd;
`
const Success = styled.span``
const Failure = styled.span``
const Form = styled.form`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .btn {
    margin-top: 2rem;
  }

  input[type='submit'] {
    font-family: 'JetBrains Mono';
    cursor: pointer;
    font-size: inherit;
    background: #02d463 !important;
    color: inherit;
    width: fit-content;
    padding: 10px 17.5px;
    height: auto;
    border: 2px solid #02d463;
    border-radius: 4px;

    &:hover {
      color: #02d463;
      background: transparent !important;
    }
  }
`
const InputField = styled.div`
  display: flex;
  flex-direction: column;

  &.focus input,
  &.focus textarea {
    border-color: #02d463;
  }

  &.focus label {
    color: #02d463;
    transition: 0.2s;
  }
`
const InputFieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  width: 50%;
`
const InputFieldTextarea = styled.div`
  margin-top: 1rem;
  width: 50%;

  &.focus input,
  &.focus textarea {
    border-color: #02d463;
  }

  &.focus label {
    color: #02d463;
    transition: 0.2s;
  }
`
const Label = styled.label`
  color: #333;
  margin-bottom: 0.5rem;
  text-shadow: 0px 0px 10px black;
  font-size: 14px;
`
const Input = styled.input`
  border-radius: 4px;
  border: 2px solid #1a1a1a;
  height: 60px;
  width: 100%;
  font-family: 'JetBrains Mono';
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
`
const Textarea = styled.textarea`
  border-radius: 4px;
  border: 2px solid #1a1a1a;
  width: 100%;
  font-family: 'JetBrains Mono';
  background: transparent;
  color: #02d463;
  transition: 0.2s;
  outline: none;
  font-size: inherit;
  padding: 15px;
  background: #1a1a1a;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  height: 200px;
  resize: none;
  margin-top: 6px;

  &:focus {
    border-color: #02d463;
    transition: 0.2s;
  }
`

export default function Contact() {
  const resetForm = () => document.getElementById('contact-form').reset()

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    const success = document.getElementById('success')
    const failure = document.getElementById('failure')

    axios({
      method: 'POST',
      url: 'https://bartzalewski-v2-api.herokuapp.com/send',
      data: {
        name: name,
        email: email,
        message: message,
      },
    }).then((response) => {
      if (response.data.msg === 'success') {
        success.style.display = 'block'

        resetForm()
      } else if (response.data.msg === 'fail') {
        failure.style.display = 'block'
      }
    })
  }

  useEffect(() => {
    const inputs = document.querySelectorAll('.input__field-input')

    function addcl() {
      let parent = this.parentNode
      parent.classList.add('focus')
    }

    function remcl() {
      let parent = this.parentNode
      if (this.value === '') {
        parent.classList.remove('focus')
      }
    }

    inputs.forEach((input) => {
      input.addEventListener('focus', addcl)
      input.addEventListener('blur', remcl)
    })
  }, [])

  return (
    <ContactSection id="contact">
      <div className="container container--secondary">
        <div className="container container--primary">
          <Title>Get in touch</Title>
          <Description className="contact__desc section__desc">
            Contact me!
          </Description>
          <Success id="success" className="colored" style={{ display: 'none' }}>
            Message sent!
          </Success>
          <Failure id="failure" style={{ color: '#FF5252', display: 'none' }}>
            Message failed to sent!
          </Failure>
          <Form
            onSubmit={handleSubmit}
            method="POST"
            className="contact__wrapper"
            id="contact-form"
          >
            <InputFieldGrid className="input__field--grid">
              <InputField className="input__field">
                <Label htmlFor="name">Name</Label>
                <Input
                  aria-label="Name"
                  required
                  className="input__field-input"
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="off"
                />
              </InputField>
              <InputField className="input__field">
                <Label htmlFor="email">Email</Label>
                <Input
                  aria-label="Email"
                  required
                  className="input__field-input"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                />
              </InputField>
            </InputFieldGrid>
            <InputFieldTextarea className="input__field input__textarea">
              <Label htmlFor="message">Message</Label>
              <Textarea
                aria-label="Message"
                required
                className="input__field-input"
                id="message"
                name="message"
              ></Textarea>
            </InputFieldTextarea>
            <Input
              aria-label="Submit"
              type="submit"
              value="Submit"
              className="btn btn--primary"
            />
          </Form>
        </div>
      </div>
    </ContactSection>
  )
}
