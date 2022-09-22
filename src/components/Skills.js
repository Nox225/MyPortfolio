import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Container, Row, Col } from 'react-bootstrap'
import React_icon from '../images/React-icon.svg'
import nodejs from '../images/nodejs.svg'
import css from '../images/css.svg'
import bootstrap from '../images/bootstrap.svg'
import typescript from '../images/typescript.svg'

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-box'>
                        <h2>Skills</h2>
                        <p>Technologies and tools I'm using or I've used before</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className='item'>
                                <img src={nodejs} alt=""></img>
                                <h5 className='node'>Node JS</h5>
                            </div>
                            <div className='item'>
                                <img className="react-icon" src={React_icon} alt=""></img>
                                <h5 className='react'>React Framework</h5>
                            </div>
                            <div className='item'>
                                <img src={bootstrap} alt=""></img>
                                <h5 className='bootstrap'>Bootstrap Library</h5>
                            </div>
                            <div className='item'>
                                <img src={css} alt=""></img>
                                <h5 className='css'>CSS</h5>
                            </div>
                            <div className='item'>
                                <img src={typescript} alt=""></img>
                                <h5 className='typescript'>TypeScript Syntax</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Skills