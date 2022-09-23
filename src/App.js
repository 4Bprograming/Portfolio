import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes } from "react-router-dom";
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar'
import Email from './Components/Contacto/Email/Email';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Email/>
    </div>
  );
}

export default App;
