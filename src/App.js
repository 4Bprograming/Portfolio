import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ChatPrivate from "./Components/Contacto/ChatPrivate/ChatPrivate.js";
import Español from "./Components/Español/Español";
import Button from "./Components/Contacto/ChatPrivate/Button";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Español />} />
          <Route exact path="/chat" element={<ChatPrivate />} />
        </Routes>

        <Button />
      </div>
    </>
  );
}

export default App;
