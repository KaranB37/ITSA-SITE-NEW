import React, { useState } from "react";
import "../styles/Events.css";
import peer from "../assets/peer-2-peer.png";
import iv from "../assets/adani-iv.png";
import Techire from "../assets/Techire.png";

const Events = () => {
  return (
    <div className="event-bg">
      <div className="event-container">
        <div className="event-image">
          <img src={iv} alt="Event Image" />
        </div>
        <div className="event-content">
          <h2>Dahanu Thermal Power Station Industrial visit</h2>
          <p className="event-date">October 13, 2023</p>
          <p className="event-description">
            <br />
            The visit offered a unique opportunity for students to gain insights
            into the operations of a thermal power station and learn about
            sustainable energy practices.A deeper understanding of thermal power
            generation and the complexities involved.
          </p>
        </div>
      </div>
      <div className="event-container">
        <div className="event-image">
          <img src={Techire} alt="Event Image" />
        </div>
        <div className="event-content">
          <h2>Techhire</h2>
          <p className="event-date">November 15, 2023</p>
          <p className="event-description">
            <br />
            ITSA of IT department in association with Computer Society Of India
            (CSI) successfully organized the mock interview event
            “TechHire”,which was aimed to prepare students for real job
            interviews. It featured preparation workshops, diverse interview
            panels, customized scenarios, and structured interviews with
            feedback. Total 10 students were selected for Internship and
            Training.
          </p>
        </div>
      </div>
      <div className="event-container">
        <div className="event-image">
          <img src={Techventure} alt="Event Image" />
        </div>
        <div className="event-content">
          <h2>Techventure</h2>
          <p className="event-date">August 25, 2023</p>
          <p className="event-description">
            <br />
            The Tech hunt “TechVenture”, a dynamic and engaging
            technology-focused event that brought together students, experienced
            and tech enthusiasts from various departments. The event aimed to
            foster innovation, knowledge sharing, and friendly competition
            within the realm of technology. With four rounds of challenges
            designed to test participants' technical skills and problem-solving
            abilities.
          </p>
        </div>
      </div>
      <div className="event-container">
        <div className="event-image">
          <img src={peer} alt="Event Image" />
        </div>
        <div className="event-content">
          <h2>Peer to Peer Learning</h2>
          <p className="event-date">July 24, 2023</p>
          <p className="event-description">
            <br />
            Event aims to foster knowledge sharing and stimulate discussions on
            cutting-edge topics related to the real meaning of technology and
            innovation.The audience engaged in a question and answer session
            with both the candidates. Following the Q&A sessions, an open
            discussion was facilitated to encourage knowledge sharing among
            attendees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
