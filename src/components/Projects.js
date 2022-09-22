import React from 'react'
import { useState } from 'react'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import steamLogo from '../images/steamLogo.jpg'
import beerLogo from '../images/beerLogo.jpg'
import chem1 from '../images/chem1.webp'
import movies from '../images/cinema.jpg'
import biology from '../images/biology.webp'
import music from '../images/music.jpg'
import TrackVisibility from 'react-on-screen'
import 'animate.css'


const Projects = () => {

    const projects = [
        {
            title: "Beerlicious",
            description: "Get info about your favorite beer",
            imgUrl: beerLogo,
            url: 'https://lucent-cactus-44838d.netlify.app'
        },
        {
            title: "Steam Profile Search",
            description: "Search a Steam Profile by ID to get account stats",
            imgUrl: steamLogo,
            url: 'https://github.com/Nox225/SteamProfileStatsReactExpress'
        },
        {
            title: "Periodic Table",
            description: "Find information about various atoms",
            imgUrl: chem1,
            url: "https://warm-smakager-7e5cc3.netlify.app/"
        },
        {
            title: "Movies Website",
            description: "Get most recent popular movies and look for your own movie",
            imgUrl: movies,
            url: "https://enchanting-mooncake-e1c458.netlify.app/"
        },
        {
            title: "Human Biology Website",
            description: "Educational site about human biology",
            imgUrl: biology,
            url: 'https://flourishing-rolypoly-01c3e8.netlify.app/'
        },
        {
            title: "Lyrics Search",
            description: "Find your favorite song",
            imgUrl: music,
            url: 'https://github.com/Nox225/LyricsSearchReact'
        }
    ]

    const [activeLink, setActiveLink] = useState('tab1')

  return (
    <section className='project' id="projects">
        <Container>
            <Row>
                <Col>
                    <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? 'animate__animated animate__bounce' : ''}>
                            <h2>Projects</h2>
                            <p className='proj-desc'>Example projects I've created</p>
                        </div>}
                    </TrackVisibility>
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav.Item>
                                <Nav.Link id="projects-tabs-tab-first" className={activeLink === 'tab1' ? "active" : ""} onClick={() => setActiveLink('tab1')} eventKey="first">My Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id="projects-tabs-tab-second" className={activeLink === 'tab2' ? "active" : ""} onClick={() => setActiveLink('tab2')} eventKey='second'>Info</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id="projects-tabs-tab-third" className={activeLink === 'tab3' ? "active" : ""} onClick={() => setActiveLink('tab3')} eventKey='third'>About</Nav.Link>
                            </Nav.Item>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => {
                                            return (
                                                <ProjectCard 
                                                key={index} 
                                                {...project}
                                                />
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        <p className="proj-p">For more - check out my Github Repository where I have much more to offer. These are some of the bigger and more presentable projects but there will be more in the near future.</p>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        <p className='proj-p'>All my websites are interactive and responsive - I try make them that way to be more appealing for the user. A lot of them use outside APIs and that's the reason why some of them cannot be deployed via Netlify.com. They are usually blocked by CORS policy and will not work without something like an ExpressJS Server. For those I linked just the Github Repository.</p>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                    </Nav>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Projects