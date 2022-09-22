import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import facebook from '../images/facebook.svg'
import TrackVisibility from 'react-on-screen'
import 'animate.css'

const Footer = () => {
  return (
    <footer className='footer' id='contact'>
        <Container>
            <Row className='align-items-center'>
                <TrackVisibility>
                    {({ isVisible }) => 
                    <div className={isVisible ? 'animate__animated animate__fadeInLeft' : 'disable'}>
                        <Col sm={3.5}>
                            <h4>Contact Info:</h4>
                            <h5>Filip Domański</h5>
                            <h5>fpdi225@gmail.com</h5>
                            <h5>517 126 986</h5>
                        </Col>
                    </div>}
                    </TrackVisibility>
                <Col sm={3.5} className='icons text-center text-sm-end'>
                    <div className='social-icon'>
                        <a href='https://github.com/Nox225'><img src={github} alt=''></img></a>
                        <a href='https://www.linkedin.com/in/filip-doma%C5%84ski-4bb215246/'><img src={linkedin} alt=''></img></a>
                        <a href='https://www.facebook.com/filip.domanski.75/'><img src={facebook} alt=''></img></a>
                    </div>
                    <p>CopyRight 2022. All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer