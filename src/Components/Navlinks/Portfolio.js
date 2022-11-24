import React from "react";
import "./Portfolio.css";
import Navbar from "../Navbar/Navbar";
import Heading from "../Heading/Heading";
import Projects from "../Rest-APIs/BasicProjects";
import Footer from "../Footer/footer";
const Portfolio = () => {
  return (
    <>
      <body>
        <Navbar />
        <section className="portfolio_projects_parent">
          {/* ===Heading== */}
          <Heading text="Projects I Made During My Learning Of React" />

          <div className="portfolio_projects_child">
            {Projects.map((curr) => {
              return (
                <a href={curr.url} rel="noreferrer"  target="_blank" key={curr.id} className="portfolio_projects_child_items">
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
        </section>
        <Footer />
      </body>
    </>
  );
};

export default Portfolio;
