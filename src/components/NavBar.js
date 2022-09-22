import React from 'react'
import { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import phi from '../images/phi.png'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import facebook from '../images/facebook.svg'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
        if(window.scrollY > 50){
            setScrolled(true)
        } else{
            setScrolled(false)
        }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
            <img className="brand" src={phi} style={{width: '60px', height: '60px', borderRadius: '50%'}} alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('about')}>About</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://github.com/Nox225"><img src={github} style={{width: '50px'}} alt="" /></a>
                <a href="https://www.linkedin.com/in/filip-doma%C5%84ski-4bb215246/"><img src={linkedin} style={{width: '50px'}} alt="" /></a>
                <a href="https://www.facebook.com/filip.domanski.75/"><img src={facebook} style={{width: '50px'}} alt="" /></a>
            </div>
            <button onClick={() => document.getElementById('contact').scrollIntoView()}><span>Contact Me</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>  )
}

export default NavBar