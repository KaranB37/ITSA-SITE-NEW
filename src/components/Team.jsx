import React from "react";
import "../styles/Team.css"; // Make sure to create this CSS file

import ansh from "../assets/img/ansh.png";
import tree from "../assets/img/tree.png";
import vp from "../assets/img/vp.png";
import president from "../assets/img/president.png";

import infra_H from "../assets/img/infra_H.png";
import infra_H2 from "../assets/img/infra_h2.png";
import doc_h from "../assets/img/doc_H.png";
import doc_h2 from "../assets/img/doc_h2.png";

import LR from "../assets/img/LR.png";
import LR2 from "../assets/img/LR2.png";
import Mag_H from "../assets/img/Mag_H.png";
import Mag_H2 from "../assets/img/mag_H2.png";

import pub_h from "../assets/img/pub_h.png";
import pub_H2 from "../assets/img/pub_H2png.png";
import tech_h1 from "../assets/img/tech_h3.png";
import tech_h2 from "../assets/img/tech_h4.png";

import ameya_infra_member from "../assets/img/ameya_infra_member.png";
import aniket_infra_member from "../assets/img/aniket_infra_member.png";
import rama_infra_mem from "../assets/img/rama_infra_mem.png";
import sahil_infra_member from "../assets/img/sahil_infra_member.png";

import diksha_creativity_member from "../assets/img/diksha_creativity_member.png";
import nutan_creativity_member from "../assets/img/nutan_creativity_member.png";
import prachi_creativity_member from "../assets/img/prachi_creativity_member.png";
import swaranjith_creativity_member from "../assets/img/swaranjith_creativity_member.png";

import megha_document_member from "../assets/img/megha_document_member.png";
import prabha_document_member from "../assets/img/prabha_document_member.png";
import siddhi_document_member from "../assets/img/siddhi_document_member.png";
import soham_document_member from "../assets/img/soham_document_member.png";

import kajal_tech_member from "../assets/img/kajal_tech_member.png";
import arvind_tech_member from "../assets/img/arvind_tech_member.png";
import sahil_publicity_member from "../assets/img/sahil_publicity_member.png";

import paste from "../assets/img/paste1.png";
import pawar from "../assets/img/pawar1.png";
const Team = () => {
  return (
    <>
      <div className="bg-12">
        <div className="column-container">
          {" "}
          <button className="button124">Our Team</button>
        </div>
        <div className="column-container">
          <div className="member">
            <div className="photo12">
              <img src={president}></img>
              <h1 className="name12">Pranav Kolekar</h1>
              <p className="designation">President</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={vp}></img>
              <h1 className="name12">Varad Sawantdesai</h1>
              <p className="designation">Vice-President</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={ansh}></img>
              <h1 className="name12">Ansh Shetty</h1>
              <p className="designation">General Secretary</p>
            </div>
          </div>
        </div>
        <div className="column-container">
          <div className="member">
            <div className="photo12">
              <img src={tree}></img>
              <h1 className="name12">Harshal Chimane</h1>
              <p className="designation">Treasurer</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={tech_h2}></img>
              <h1 className="name12">Karan Vishwakarma</h1>
              <p className="designation">Technical Head</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={tech_h1}></img>
              <h1 className="name12">Nikhil Mali</h1>
              <p className="designation">Technical Head</p>
            </div>
          </div>
        </div>

        <div className="column-container">
          <div className="member">
            <div className="photo12">
              <img src={pub_h}></img>
              <h1 className="name12">Ranjan Padhey</h1>
              <p className="designation">Publicity Head</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={pub_H2}></img>
              <h1 className="name12">Prachi Sanap</h1>
              <p className="designation">Publicity Head</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={paste}></img>
              <h1 className="name12">Aniket Paste</h1>
              <p className="designation">Creativity Head</p>
            </div>
          </div>
        </div>

        <div className="column-container">
          <div className="member">
            <div className="photo12">
              <img src={pawar}></img>
              <h1 className="name12">Shreya Pawar</h1>
              <p className="designation"> Productivity & Videography Head</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={doc_h2}></img>
              <h1 className="name12">Dhiraj Chavan</h1>
              <p className="designation">Head Of department</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={doc_h}></img>
              <h1 className="name12">Purva Chalke</h1>
              <p className="designation">Documentation Head</p>
            </div>
          </div>
        </div>

        <div className="column-container">
          <div className="member">
            <div className="photo12">
              <img src={Mag_H}></img>
              <h1 className="name12">Mitul Chavan</h1>
              <p className="designation">Magzine Head</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={Mag_H2}></img>
              <h1 className="name12">Eshaan Vaity</h1>
              <p className="designation">Magzine Head</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={infra_H}></img>
              <h1 className="name12">Krishna Pandey</h1>
              <p className="designation">Infra Head</p>
            </div>
          </div>
        </div>

        <div className="column-container">
          <div className="member">
            <div className="photo12">
              <img src={infra_H2}></img>
              <h1 className="name12">Mayuresh Navghane</h1>
              <p className="designation">Infra Head</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={LR}></img>
              <h1 className="name12">Shruti Epili</h1>
              <p className="designation">Ladies Representative</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={LR2}></img>
              <h1 className="name12">Sanskruti Kadam</h1>
              <p className="designation">Ladies Representative</p>
            </div>
          </div>
        </div>

        <div className="column-container">
          <div className="member">
            <div className="photo12">
              <img src={megha_document_member}></img>
              <h1 className="name12">Megha Mahajan </h1>
              <p className="designation">Documentation Member</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={siddhi_document_member}></img>
              <h1 className="name12">Siddhi Kargutkar</h1>
              <p className="designation">Documentation Member</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={kajal_tech_member}></img>
              <h1 className="name12">Disha Hulmukhe</h1>
              <p className="designation">Technical Member</p>
            </div>
          </div>
        </div>
        <div className="column-container">
          <div className="member">
            <div className="photo12">
              <img src={arvind_tech_member}></img>
              <h1 className="name12">Arvind Sonkar</h1>
              <p className="designation">Technical Member</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={sahil_publicity_member}></img>
              <h1 className="name12">Sahil Deshmukh</h1>
              <p className="designation">Publicity Member</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={prabha_document_member}></img>
              <h1 className="name12">Prabha Gawde</h1>
              <p className="designation">Documentation Member</p>
            </div>
          </div>
        </div>
        <div className="column-container">
          <div className="member">
            <div className="photo12">
              <img src={soham_document_member}></img>
              <h1 className="name12">Soham Gawde</h1>
              <p className="designation">Documentation Member</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={rama_infra_mem}></img>
              <h1 className="name12">Ramdas Chougule</h1>
              <p className="designation">Infra Member</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={aniket_infra_member}></img>
              <h1 className="name12">Aniket Patil</h1>
              <p className="designation">Infra Member</p>
            </div>
          </div>
        </div>
        <div className="column-container">
          <div className="member">
            <div className="photo12">
              <img src={diksha_creativity_member}></img>
              <h1 className="name12">Diksha Jadhav</h1>
              <p className="designation">Creativity Member</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={nutan_creativity_member}></img>
              <h1 className="name12">Nutan Avhad</h1>
              <p className="designation">Creativity Member</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={prachi_creativity_member}></img>
              <h1 className="name12">Prachi Pokhare</h1>
              <p className="designation">Creativity Member</p>
            </div>
          </div>
        </div>
        <div className="column-container">
          <div className="member">
            <div className="photo12">
              <img src={swaranjith_creativity_member}></img>
              <h1 className="name12">Swaranjith Gudelli</h1>
              <p className="designation">Creativity Member</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={sahil_infra_member}></img>
              <h1 className="name12">Sahil Pawar</h1>
              <p className="designation">Infra Member</p>
            </div>
          </div>
          <div className="member">
            <div className="photo12">
              <img src={ameya_infra_member}></img>
              <h1 className="name12">Amey Katole</h1>
              <p className="designation">Infra Member</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
