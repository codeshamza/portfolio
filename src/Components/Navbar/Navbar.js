import React from "react";
import "./Navbar.css"
import {
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
  FaGithub,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <>
      <header>
        <nav className="main_container">
          <div  className="logo">
            <img 
                src="images/applogo.png"
              className="animate__animated animate__rollIn"
              alt="Logo"
            />
          </div>
          <div
            className={
              showMobileMenu ? "mobile_menu_links menu_link " : "menu_link"
            }
          >
            <ul>
              <li>
                <NavLink  to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="social_links">
            <ul className="desktop_icons">
              <li>
                <a href="https://www.linkedin.com/in/hamza-reactjsdeveloper/" rel="noreferrer"  target={"_blank"}>
                  <FaLinkedinIn className="Social_Icon" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/code_with_stuff/" rel="noreferrer"  target={"_blank"}>
                  <FaInstagram className="Social_Icon" />
                </a>
              </li>
              <li>
                <a href="https://pin.it/1HmkWY2" rel="noreferrer"  target={"_blank"}>
                  <FaPinterest className="Social_Icon" />
                </a>
              </li>
              <li>
                <a href="https://github.com/hamzabie91" rel="noreferrer"  target={"_blank"}>
                  <FaGithub className="Social_Icon" />
                </a>
              </li>
            </ul>

            <div
              onClick={() =>
                showMobileMenu === false
                  ? setShowMobileMenu(true)
                  : setShowMobileMenu(false)
              }
              className="ham_burger_menu"
            >
              <a to="#">
               {
                showMobileMenu ?  <MdClose className="ham_clicked" /> : <i       className=
               "fas fa-bars ham_size fa-4x"></i>
               } 
              </a>
              
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
