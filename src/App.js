import React from "react";
import Home from "./Components/Home";
import About from "./Components/Navlinks/About";
import {Route,Routes} from "react-router-dom";
import "./Components/Navbar/Navbar.css"
import Contact from "./Components/Navlinks/Contact";
import Portfolio from "./Components/Navlinks/Portfolio"
import NoPage from "./Components/Navlinks/Nopage"
const App = () => {
  
   return (
    <Routes>
    <Route exact path="portfolio/" element={<Home/>} />
    <Route exact path="*" element={<NoPage/>} />
    <Route path="portfolio/home" element={<Home/>} />
    <Route path="portfolio/about" element={<About/>} />
    <Route path="portfolio/portfolio" element={<Portfolio/>} />
    <Route path="portfolio/contact" element={<Contact/>} />
         </Routes>
   )

};

export default App;
