import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes } from "react-router-dom";
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar'
import Skills from './Components/Skills/Skills'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contacto/Contact';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Skills />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
