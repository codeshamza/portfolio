import React from "react";
import Heading from "../Heading/Heading";
const IncrementCounter = () => {
  React.useEffect(() => {
    const ref = document.querySelectorAll(".counter");
    ref.forEach((counter) => {
      counter.innerHTML = 0;
      const updateCounter = () => {
        const targetcount = +counter.getAttribute("counter");
        const initialCount = +counter.innerHTML;
        if (initialCount < targetcount) {
          counter.innerHTML = `${Math.round(initialCount + 1) }`;
          setTimeout(updateCounter, 80);
        }
      };
      updateCounter();
    });
  });

  return (
    <section className="about_increment_counter">
      <div className="about_container">
      <Heading className="about_heading"  text="Freelancing Stats" />
      <div className="about_container_parent">
        <div className="about_container_child">
          <span>Total Clients</span>
          <h1 className="counter" counter="13" id="number1"> </h1>
        </div>
        <div className="about_container_child">
          <span>Projects (Contributed)</span>
          <h1 className="counter" counter="17" id="number2"> </h1> 
        </div>
        <div className="about_container_child">
          <span>Long-term Clients</span>
          <h1 className="counter" counter="7" id="number3"> </h1>
        </div>
        </div>
      </div>
    </section>
  );
};

export default IncrementCounter;
