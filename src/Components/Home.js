import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar/Navbar";
import Heading from "./Heading/Heading";
import { MdAnimation } from "react-icons/md";
import { AiFillApi } from "react-icons/ai";
import {
  SiAdobephotoshop,
  SiFirebase,
  SiWordpress,
  SiMaterialui,
  SiAdobeillustrator,
  SiTailwindcss,
  SiApostrophe,
  SiJquery,
  SiTypescript,
} from "react-icons/si";
import {
  
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaReact,
  FaJs,
  FaBootstrap,
  FaSass,
  FaNpm,
} from "react-icons/fa";
import Projects from "./Rest-APIs/BasicProjects";
import Testinomials from "./Rest-APIs/Testinomials";
import Linebreak from "./LineBreak/linebreak";
import Connect from "./Connect/Connect";
import Footer from "./Footer/footer";


const Home = () => {
 
  return (
    <>
      <body>
        <Navbar />
        <section className="main_txt ">
          <div className="txt animate__animated animate__zoomInDown">
            <p>Hey, I'm Hamza</p>

            <h1>
              <span className="outer">I </span>
              <span className="outer">enjoy</span>
              <span className="inner"> developing</span>
              <span className="outer"> and</span>
              <br />
              <span className="inner"> building</span>
              <span className="outer"> websites</span>
              <span className="outer"> in</span>
              <span className="inner"> React</span>
              <span className="inner"> JS</span>
            </h1>
          </div>
          <div className="home_btns animate__animated animate__fadeIn">
          <a  href="https://drive.google.com/file/d/1WXj_iWAhxRIva0uPvXVi1GnjJSK6vwcC/view?usp=sharing"
              target="_blank">
            <button className="h_btn" >
              Download CV
            </button>
            </a>
            <button 
             onClick={()=>{
  const section = document.querySelector( '.home_portfolio_projects_parent' );
  section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
             }}
              className="h_btn"
            >
              Explore
            </button>
          </div>
        </section>
        {/* ======LineBreak===== */}
        <Linebreak />
        {/* ====Hero Projects=== */}
        <section  className="home_portfolio_projects_parent">
          {/* ===Heading== */}
          <Heading text="Some of the Projects Made By Me" />

          <div className="portfolio_projects_child">
            {Projects.map((curr) => {
              if (curr.id <= 3)
                return (
                  <a  target="_blank" href={curr.url} key={curr.id} className="portfolio_projects_child_items">
                    <div className="portfolio_projects_child_card_image">
                      <img src={curr.img} alt="" />
                    </div>
                    <article>
                      <div className="text_container">
                        <h1>{curr.heading}</h1>
                        <p>{curr.desc}</p>
                      </div>
                      <div className="categories">
                        <h3>{curr.categories[0]}</h3>
                        <h3>{curr.categories[1]}</h3>
                        <h3>{curr.categories[2]}</h3>
                      </div>
                    </article>
                  </a>
                );
            })}
            
          </div>
          <div className="button_hero_projects">
              <Link to="/portfolio">
                <button className="hero_btn">View All</button>
              </Link>
            </div>
        </section>
        {/* ======LineBreak===== */}
        <Linebreak />
        {/* ===Testonomials====== */}
        <section className="testonomials">
          {/* ===Heading== */}
          <Heading text="Why People Love My Work!" />
            <div className="main_tes_card">
              {Testinomials.map((curr) => {
                return (
          <article>
                  <div key={curr.id} className="tes_card">
                    <div className="tes_card_text">
                      <h1>“{curr.feedback}”</h1>
                      <h2>~ {curr.name}</h2>
                    </div>
                  </div>
          </article>
                );
              })}
            </div>
          <div className="toolbelt">
            {/* ===Heading== */}
            <Heading text="My ToolBelt For Success" />
            <div className="toolbelt_imgs">
              <FaHtml5 className="animate__animated animate__tada B_toolbelt_icon" />
              <FaCss3Alt className="animate__animated animate__tada  B_toolbelt_icon" />
              <FaJs className="animate__animated animate__tada  B_toolbelt_icon" />
              <FaReact className="animate__animated animate__tada  B_toolbelt_icon" />
              <div className="toolbelt_s_imgs">
                <SiJquery className="animate__animated animate__rubberBand  S_toolbelt_icon" />
                <FaBootstrap className="animate__animated animate__rubberBand  S_toolbelt_icon" />
                <SiMaterialui className="animate__animated animate__rubberBand  S_toolbelt_icon" />
                <SiWordpress className="animate__animated animate__rubberBand  S_toolbelt_icon" />
                <SiFirebase className="animate__animated animate__rubberBand  S_toolbelt_icon" />
                <MdAnimation className="animate__animated animate__rubberBand  S_toolbelt_icon" />
                <AiFillApi className="animate__animated animate__rubberBand  S_toolbelt_icon" />
                <FaNpm className="animate__animated animate__rubberBand  S_toolbelt_icon" />
                <SiTailwindcss className="animate__animated animate__rubberBand  S_toolbelt_icon" />
                <SiTypescript className="animate__animated animate__rubberBand  S_toolbelt_icon" />
                
                <FaGitAlt className="animate__animated animate__rubberBand  S_toolbelt_icon" />
                <FaSass className="animate__animated animate__rubberBand  S_toolbelt_icon" />
              </div>
            </div>
          </div>
        </section>
        {/* ======LineBreak===== */}
        <Linebreak />
        <Connect text="Intrested In Working Together?" />
        <Footer />
      </body>
     
    </>
  );
};

export default Home;
