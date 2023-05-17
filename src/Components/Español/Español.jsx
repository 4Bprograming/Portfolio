import React from 'react'
import Contact from '../Contacto/Contact'
import Footer from '../Footer/Footer'
import Landing from '../Landing/Landing'
import NavBar from '../Navbar/Navbar'
import Skills from '../Skills/Skills'
import Button from '../Contacto/ChatPrivate/Button'


function Español() {
  return (
    <div className="App">
        <NavBar />
              <Landing />
              <Skills />
              <Contact/>
              <Footer />
              <Button />
    </div>
  )
}

export default Español