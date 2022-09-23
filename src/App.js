import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes } from "react-router-dom";
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar'
import Email from './Components/Contacto/Email/Email';
import Skills from './Components/Skills/Skills'
import Footer from './Components/Footer/Footer'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Email/>
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
