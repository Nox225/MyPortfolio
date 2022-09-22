import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../images/photo.jpg'

const About = () => {
  return (
    <section className='about' id='about'>
        <Container>
            <Row className='align-items-center about-container'>
                <Col>
                    <img className="photo" src={logo} alt=""></img>
                    {/* {windowWidth > 500 && <div class="verticalLine"></div>} */}
                </Col>
                <Col>
                    <h2 className='about-me'>About Me</h2>
                    <p>My name is Filip Domański. I'm a student at Warsaw University of Technology. Creating websites has been a hobby of mine for about 3 years now. Ever since highschool I was interested in programming in general and now I'm making my dream come true. Apart from that I enjoy video games, chess and philosophy.</p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About