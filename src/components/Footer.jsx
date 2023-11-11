import React from "react";
import "../styles/Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import logo from "../assets/img/itsa5.png";
import csilogo from "../assets/img/csi_logo.jpg";
import vppcoe from "../assets/img/vppcoe.png";
import iic from "../assets/img/iic.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer" id="contact">
          <div className="row">
            <div className="abcd">
              <div className="abc">
                <div className="logo_img">
                  <a
                    href="https://itsa-pvppcoe.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={logo} alt="" />
                  </a>
                </div>
                <div className="logo_img">
                  <a
                    href="https://pvppcoe.ac.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={vppcoe} alt="" />
                  </a>
                </div>
              </div>
              <div className="abc">
                <div className="logo_img">
                  <a
                    href="https://www.csi-india.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={csilogo} alt="" />
                  </a>
                </div>
                <div className="logo_img">
                  <a
                    href="https://iic.mic.gov.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={iic} alt="" />
                  </a>
                </div>
              </div>
            </div>
            {/* eslint-disable-next-line*/}
            <a href="#" className="icon-link">
              <FaFacebook size={30} className="facebook-icon" />
            </a>
            <a
              href="https://www.instagram.com/itsa_vppcoe/?hl=en"
              className="icon-link"
            >
              <FaInstagram size={30} className="instagram-icon" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCD1whpZplYrmpdvPCCwHxbg"
              className="icon-link"
            >
              <FaYoutube size={30} className="youtube-icon" />
            </a>
            {/* eslint-disable-next-line*/}
            <a href="#" className="icon-link">
              <FaTwitter size={30} className="twitter-icon" />
            </a>
          </div>

          <div className="row">
            <ul>
              <FaMapMarkerAlt className="iconss" size={30} />
              <li>
                1rd Floor, Information Technology Department, <br />
                Vasantdada Patil Education Complex,
                <br />
                Eastern Express Highway,
                <br />
                Sion, Mumbai, <br />
                Maharashtra 400022.
              </li>

              <FaEnvelope className="iconss" size={30} />
              <li>techgyanathon@pvppcoe.ac.in</li>

              <FaPhone className="iconss" size={30} />
              <li>+9122 2084 0325/2084 7226</li>
            </ul>
          </div>

          <div className="centered-text">
            Developed and Designed by ITSA.<br></br>
          </div>
        </div>
      </footer>
    </>
  );
}
