import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/global";

import React from 'react'

function ChatPrivate() {
  return (
    <>
     <App />
     <GlobalStyle />
     <p>hola</p>
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
