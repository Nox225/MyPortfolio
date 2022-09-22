import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col sm={6} md={4}>
          <div className='proj-imgbx'>
              <img className='proj-img' src={imgUrl} alt=""></img>
              <a href={url} className="proj-txtx">
                  <h4>{title}</h4>
                  <span>{description}</span>
              </a>
          </div>
    </Col>
  )
}

export default ProjectCard