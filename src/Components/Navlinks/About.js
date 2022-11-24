import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";
import Heading from "../Heading/Heading";
import Footer from "../Footer/footer";
import Aboutd from "../Rest-APIs/Aboutd";
import Connect from "../Connect/Connect";
import IncrementCounter from "../IncrementCounter/IncrementCounter";

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="main_about">
        <div className="about_container">
        <Heading text="Myself" />
        <div className="about_container_parent">
          { Aboutd.map((curr) => {
            if(curr.id <= 4)
           return <div key={curr.id} className="about_container_child">
              <span>   {curr.que}</span>
              <h1>{curr.ans}</h1>
            </div>;
          })}
          </div>
        </div>
        <div className="about_container">
        <Heading text="Work" />
        <div className="about_container_parent">
          { Aboutd.map((curr) => {
            if(curr.id > 4)
           return <div key={curr.id} className="about_container_child">
              <span>   {curr.que}</span>
              <h1>{curr.ans}</h1>
            </div>;
          })}
          </div>
          
        </div>
        <IncrementCounter/>
      </section>
      <Connect text="Let's Make Something Special" />
      <Footer />
    </div>
  );
};

export default About;
