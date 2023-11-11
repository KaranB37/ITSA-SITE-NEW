import React, { useState } from "react";
import "../styles/Events.css";
import peer from "../assets/peer-2-peer.png";

const Events = () => {
  return (
    <div className="event-bg">
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
            innovation.
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
            innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
