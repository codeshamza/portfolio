import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import ScrollToTop from "./Components/ScrollToTop/Scrolltotop";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

  
    root.render(

  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
      <Main/>
    </BrowserRouter>
  </React.StrictMode>
);

  
