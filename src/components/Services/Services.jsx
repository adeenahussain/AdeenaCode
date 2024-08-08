import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import design from "../../img/graphic-design.png";
import developer from "../../img/web-development.png";
import socailmedia from "../../img/social-media.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Adeena Resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
        I offer exceptional services in social media handling, 
          <br />
          website designing, and graphic designing. 
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "var(--purple)" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={design}
            heading={"Design"}
            detail={"Figma, Photoshop, Adobe Illustrator, Canva"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={developer}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, JAVA, PYTHON, STREAMLIT"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={socailmedia}
            heading={"Social Media Handler"}
            detail={
              "latest tips, tricks, and trends! on insta, fb, tiktok, twitter, linkedin."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
