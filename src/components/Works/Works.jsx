import React, { useContext } from "react";
import "./Works.css";
import htmlcss from "../../img/coding.png";
import python from "../../img/python.png";
import react from "../../img/atom.png";
import java from "../../img/java.png";
import js from "../../img/java-script.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works Projects
          </span>
          <span>Languages</span>
          <spane>
          With a strong foundation in React, Python, JavaScript, Java, and Streamlit,
            <br />
            I specialize in crafting engaging and intuitive front-end 
            experiences for websites.
            <br />
            My expertise lies in blending aesthetics with functionality
            <br />
            to deliver seamless user interactions.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={htmlcss} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={python} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={react} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={js} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={java} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
