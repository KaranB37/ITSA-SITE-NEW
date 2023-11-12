import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import "../styles/Hero.css";

const Hero = () => {
  const textElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Helping people learn tech and creating a lively tech group",
        "Improving coding skills and building a strong tech community.",
      ],
      typeSpeed: 20,
      backSpeed: 15,
      startDelay: 1000,
      backDelay: 1500,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(textElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="flex">
        <h1>
          <strong>ITSA / CSI </strong> VPPCOE
        </h1>
        <p>
          <span ref={textElement} className="text"></span>
        </p>
        <button className="button1">Know more</button>
      </div>
    </>
  );
};

export default Hero;

// <div className="flex2 row">
//   <div className="card ">
//     <img src={itsa} alt="Logo 1" className="card-img" />
//     <div className="card-body">
//       <h5 className="card-title">ITSA</h5>
//       <p className="card-text">
//         We at ITSA, through a dynamic blend of technical seminars,
//         workshops, and cutting-edge events, aim to promotes technical
//         skills, knowledge sharing, and hands-on experiences.
//       </p>
//     </div>
//   </div>
//   <div className="card ">
//     <img src={csi} alt="Logo 2" className="card-img" />
//     <div className="card-body">
//       <h5 className="card-title">CSI</h5>
//       <p className="card-text">
//         The main objectives of the Computer Society of India (CSI) are to
//         promote and advance computer science, facilitate knowledge
//         sharing, foster ethical practices, and contribute to the growth of
//         the IT industry in India.
//       </p>
//     </div>
//   </div>

// </div>
