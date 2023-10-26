import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import bart from '../images/bart.jpg'

const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 100px 0;
`
const Container = styled.div`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`
const Wrapper = styled.div`
  width: 50%;
`
const Title = styled.h2``
const Description = styled.p`
  width: 80%;
  margin-top: 50px;
  color: #bdbdbd;
  text-align: left;
`
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  margin-top: 25px;
`
const Item = styled.li`
  position: relative;
  font-size: 14px;
  color: #bdbdbd;
  margin-bottom: 10px;

  &:hover {
    span {
      color: #02d463;
      transition: 0.2s;
    }
  }

  .skill__icon {
    margin-right: 15px;
    color: #02d463;
    width: 15px;
    height: 15px;
  }

  &.skill__jquery {
    transition: 0.2s;

    .skill__icon,
    span {
      color: #333;
    }

    span {
      text-decoration: line-through;
    }
  }
`
const ItemText = styled.span``
const Image = styled.img`
  opacity: 0.4;
  transition: 0.5s;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 1);
  border-radius: 4px;

  &:hover {
    opacity: 1;
    transition: 0.5s;
  }
`

export default function About() {
  return (
    <AboutSection id="about">
      <div className="container container--secondary">
        <Container className="container container--primary about__container">
          <Wrapper className="about__wrapper">
            <Title>About me</Title>
            <Description className="about__desc section__desc">
              I began my coding journey in December 2018 as a self-taught developer. My passion lies in crafting modern, visually appealing websites enhanced with subtle animations. I'm deeply committed to my work and always eager to collaborate on exciting projects. If you have an idea or project in mind, I'd love to hear from you!
            </Description>
            <Description className="section__desc">
              Technologies that I use:
            </Description>
            <List>
              <Item>
                <FontAwesomeIcon
                  icon={['fab', 'react']}
                  className="skill__icon"
                />
                <ItemText>React</ItemText>
              </Item>
              <Item>
                <FontAwesomeIcon
                  icon={['fab', 'node-js']}
                  className="skill__icon"
                />
                <ItemText>Node.js</ItemText>
              </Item>
              <Item>
                <FontAwesomeIcon
                  icon={['fab', 'js-square']}
                  className="skill__icon"
                />
                <ItemText>JavaScript</ItemText>
              </Item>
              <Item>
                <FontAwesomeIcon
                  icon={['fab', 'php']}
                  className="skill__icon"
                />
                <ItemText>PHP</ItemText>
              </Item>
              <Item>
                <FontAwesomeIcon
                  icon={['fab', 'html5']}
                  className="skill__icon"
                />
                <ItemText>HTML</ItemText>
              </Item>
              <Item>
                <FontAwesomeIcon
                  icon={['fab', 'sass']}
                  className="skill__icon"
                />
                <ItemText>S(CSS)</ItemText>
              </Item>
              <Item>
                <FontAwesomeIcon icon="fire" className="skill__icon" />
                <ItemText>Firebase</ItemText>
              </Item>
              <Item>
                <FontAwesomeIcon
                  icon={['fab', 'bootstrap']}
                  className="skill__icon"
                />
                <ItemText>Bootstrap</ItemText>
              </Item>
              <Item>
                <FontAwesomeIcon
                  icon={['fab', 'figma']}
                  className="skill__icon"
                />
                <ItemText>Figma</ItemText>
              </Item>
              <Item className="skill__jquery">
                <FontAwesomeIcon icon="cross" className="skill__icon" />
                <ItemText>jQuery</ItemText>
              </Item>
            </List>
          </Wrapper>
          <Image src={bart} alt="Bart Zalewski" loading="lazy" />
        </Container>
      </div>
    </AboutSection>
  )
}
