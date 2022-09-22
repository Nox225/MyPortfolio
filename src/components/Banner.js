import React from 'react'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(200 - Math.random() * 100)
    const period = 1000

    useEffect(() => {
        const toRotate = ['Web Developer', 'Web Designer', 'React Enjoyer']

        const tick = () => {
            let i = loopNum % toRotate.length
            let fullText = toRotate[i]
            let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)
            setText(updatedText)
            if(isDeleting){
                setDelta(prevDelta => prevDelta/2)
            }
            if(!isDeleting && updatedText === fullText){
                setIsDeleting(true)
                setDelta(period)
            } else if(isDeleting && updatedText === ''){
                setIsDeleting(false)
                setLoopNum(loopNum+1)
                setDelta(500)
            }
        }

        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text, delta, isDeleting, loopNum])

  return (
    <section className='banner' id='home'>
        <Container className='banner-container'>
            <TrackVisibility>
            {({ isVisible }) => 
                <div className={isVisible ? 'animate__animated animate__fadeIn' : 'disable'}>
                    {window.innerWidth>700 ? <h1 className='hi'>{`Hi! I'm Filip - `} <span className='wrap'>{text}</span></h1> : <h1 className='hi'>{`Hi, I'm Filip!`}</h1>}
                    <div className='desc'>
                        <div className='desc-container'>
                            <p className='banner-p'>Are you looking for a professional Frontend Developer for your new project? Want to have your own custom website? Do you want to ask me a question? Go ahead and contact me!</p>
                            <button className='desc-btn vvd' onClick={() => document.getElementById('contact').scrollIntoView()}><span>Lets's connect <ArrowRightCircle className="arrow" size={25} /></span></button>
                        </div>
                    </div>
                </div>}
            </TrackVisibility>
        </Container>
    </section>
  )
}

export default Banner