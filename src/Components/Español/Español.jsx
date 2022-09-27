import React from 'react'
import Contact from '../Contacto/Contact'
import Footer from '../Footer/Footer'
import Landing from '../Landing/Landing'
import NavBar from '../Navbar/Navbar'
import Skills from '../Skills/Skills'

function Español() {
  return (
    <div className="App">
        <NavBar />
              <Landing />
              <Skills />
              <Contact/>
              <Footer />
    </div>
  )
}

export default Español