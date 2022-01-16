import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="about" id="about">
      <div className="heading">
        <h1>ABOUT US</h1>
      </div>
      <div className="describe">
        <div className="goals">
          Kuber E-bikes is one of India’s leading electric two-wheeler
          manufacturer. Our goal is to build a better, cleaner and greener
          future for the generations to come.
        </div>
        <div className="why-we">
          <h4>Why Choose we?</h4>
          <ul>
            <li>Best Products</li>
            <li>Quality Service</li>
            <li>Trusted Dealers</li>
            <li>Excellent Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
