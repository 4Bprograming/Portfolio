import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/global";
import {Link} from 'react-router-dom'

import React from 'react'

function ChatPrivate() {
  return (
    <>
     <App />
     <GlobalStyle />
     <Link to="/" >
     <p>Regresar</p>
     </Link>
   </>
  )
}

export default ChatPrivate

// const root = createRoot(document.querySelector("#root"));

// root.render(
//   <>
//     <App />
//     <GlobalStyle />
//   </>
// );
