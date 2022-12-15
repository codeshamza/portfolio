import React from "react";
import Home from "./Components/Home";
import About from "./Components/Navlinks/About";
import {Route,Routes} from "react-router-dom";
import "./Components/Navbar/Navbar.css"
import Contact from "./Components/Navlinks/Contact";
import Portfolio from "./Components/Navlinks/Portfolio"
import NoPage from "./Components/Navlinks/Nopage"
// import BasicCard from "./Components/SelectVersion/Selectversion.jsx";
const App = () => {
  
   return (
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="*" element={<NoPage/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/portfolio" element={<Portfolio/>} />
    <Route path="/contact" element={<Contact/>} />
    </Routes>
   )

};

export default App;
