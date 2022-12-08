import React from "react";
import "./footer.css";
import {
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
  FaHome,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoLocation, GoPerson } from "react-icons/go";
import { MdPhone } from "react-icons/md";
import { TbTemplate } from "react-icons/tb";
import { HiMail } from "react-icons/hi";
// import Switch from "../Switch/Switch.jsx"
const footer = () => {
  return (
    <footer>
      <section className="main_footer">
          <div className="footer_about">
            <h1>Hamza Ali</h1>
            <div className="footer_about_text">
              <b>
                Frontend website developer who loves to
                create single page web applications in ReactJS.
              </b>
              <p>
              Developer who design, implement and optimize user interface components for future use using the very well-known Reactjs open-source library ecosystem. I am skilled front-end developer who is involved in all stages of interface component design, from conception through to final testing.
              </p>
            </div>
          </div>
        <div className="footer_link">
          <h1>Navigation Links</h1>
          <Link to="/home">
            <FaHome className="footer_icons" /> <p>HOME</p>{" "}
          </Link>
          <Link to="/about">
            <GoPerson className="footer_icons" /> <p>ABOUT</p>{" "}
          </Link>
          <Link to="/portfolio">
            <TbTemplate className="footer_icons" /> <p>PORTFOLIO</p>{" "}
          </Link>
          <Link to="/contact">
            <MdPhone className="footer_icons" /> <p>CONTACT</p>{" "}
          </Link>
        </div>
        <div className="footer_link">
          <h1>Social Links</h1>
          <a href="https://www.linkedin.com/in/hamza-reactjsdeveloper/" target="_blank">
            <FaLinkedinIn className="footer_icons" /> <p>LINKEDIN</p>{" "}
          </a>
          <a href="https://www.instagram.com/code_with_stuff/"  target="_blank">
            <FaInstagram className="footer_icons" /> <p>INSTAGRAM</p>{" "}
          </a>
          <a href="https://pin.it/1HmkWY2" target="_blank">
            <FaPinterest className="footer_icons" /> <p>PINTREST</p>{" "}
          </a>
          <a href="https://github.com/codeshamza" target="_blank">
            <FaGithub className="footer_icons" /> <p>GITHUB</p>{" "}
          </a>
        </div>
        <div className="footer_link">
          <h1>Contact Info</h1>
          <a href="tel:+923207038759">
            <MdPhone className="footer_icons" /> <p>CALL</p>{" "}
          </a>
          <a href="mailto:contacthamza91@gmail.com?body=Hi,%20Hamza"  target="_blank">
            <HiMail className="footer_icons" /> <p>EMAIL</p>{" "}
          </a>
          <a href="https://wa.me/923207038759"  target="_blank">
            <FaWhatsapp className="footer_icons" /> <p>WHATSAPP</p>{" "}
          </a>
          <a href="https://maps.app.goo.gl/Kux93varhNBEKni28"  target="_blank">
            <GoLocation className="footer_icons" /> <p>LOCATION</p>{" "}
          </a>
        </div>
      </section>

      <section className="footer_copyright">
      {/* <Switch/> */}
        <div className="main_copyright_container">
          <img src="images/applogo.png" alt="Logo" />
          <h1> © 2022 - Designed And Developed By Hamza | Portfolio </h1>
        </div>
        <div className="footer_device_info">
          <h1 className="device_info">
            Your Device Height: <span> {window.innerHeight}</span>px
          </h1>
          <h1 className="device_info">
            Your Device Width: <span>{window.innerWidth}</span>px
          </h1>
        </div>
      </section>
    </footer>
  );
};

export default footer;
