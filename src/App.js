import React from 'react'
import './style.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <About />
      <Footer />
    </>
  );
}

export default App;
