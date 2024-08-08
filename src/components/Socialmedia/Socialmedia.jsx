import React, { useContext } from "react";
import { themeContext } from "../../Context";
import facebook from "../../img/Facebook.png";
import twitter from "../../img/twitter.png";
import tiktok from "../../img/tik-tok.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

import "./Socialmedia.css";

const Socialmedia = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


    return (
        <div className="social" id='social'>
        
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={tiktok} alt="" />
        </div>
      
    )
};
    export default Socialmedia;
    