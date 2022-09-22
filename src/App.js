import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes } from "react-router-dom";
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
