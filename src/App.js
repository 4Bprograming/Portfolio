import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes } from "react-router-dom";
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar'
import Skills from './Components/Skills/Skills'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contacto/Contact';
import Button from './Components/Contacto/ChatPrivate/Button';
import ChatPrivate from './Components/Contacto/ChatPrivate/ChatPrivate.js';
import Español from './Components/Español/Español';



function App() {
  return (
    <>
    
    <div>
    <Routes>
        <Route path='/' element ={<Español/>}/>
        <Route exact path="/chat" element= {<ChatPrivate/>}/>
  </Routes>
    
    
    </div>
    </>
  );
}

export default App;
