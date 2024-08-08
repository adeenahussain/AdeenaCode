import React, { useContext } from "react";
import "./Intro.css";
// import Vector1 from "../../img/Vector1.png";
// import Vector2 from "../../img/Vector2.png";
// import boy from "../../img/boy.png";
import adeenahussain  from "../../img/adeenahussain.jpeg";
//import glassesimoji from "../../img/glassesimoji.png";
//import thumbup from "../../img/thumbup.png";
import graphicdesign from "../../img/graphic-design.png"
//import crown from "../../img/crown.png";
import socailmedia from "../../img/social-media.png";
import webdevelopment from "../../img/web-development.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Adeena Hussain</span>
          <span>
            The Software Engineer with experience in web designing
            and development.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
       
      </div>
      {/* right image side */}
      <div className="i-right">
       
        <img src={adeenahussain} alt="" />
        {/* animation */}
        {/* <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-10%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        /> */}

<motion.div
          initial={{ left: "-36%" }}
          whileInView={{ left: "-10%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={socailmedia} text1="Social Media " text2="Handler" />
        </motion.div>

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={webdevelopment} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "-46%" }}
          whileInView={{ left: "-0%" }}
          transition={transition}
          
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={graphicdesign} text1="Graphic" text2="Designer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "var(--purple)",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
