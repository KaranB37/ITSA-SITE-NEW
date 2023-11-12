import React from "react";
import "../styles/About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-1">
      <div className="about-container-1">
        <div className="center-about">
          <div className="content-container-about">
            <h2 className="title-about">About Us</h2>
            <p className="description-about">
              We at ITSA, through a dynamic blend of technical seminars,
              workshops, and cutting-edge events, aim to cultivate a vibrant
              learning community that promotes technical skills, knowledge
              sharing, and hands-on experiences. Join us on this journey as we
              empower and equip fellow IT enthusiasts to thrive in the
              ever-evolving world of technology.
            </p>
          </div>
          <div className="button1">
            <Link to="/Vission_Mission" className="button12">
              Vission and Mission
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
