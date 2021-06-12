import React from "react";
// import socialIcons from "../../../assets/social-icons";
import facebook from "../../../assets/social-icons/facebook.png";
import twitter from "../../../assets/social-icons/twitter.png";
import linkedin from "../../../assets/social-icons/linkedin.png";
import "./style.css";

/**
 * @author
 * @function SocialConnect
 **/

const SocialConnect = (props) => {
  return (
    <div className="socialConnect" style={props.style}>
      <span className="textColor font-12">Follow me on: </span>
      <a
        className="socialLink"
        href="https://www.facebook.com/annaviraja.arikrishnan"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={facebook} alt="" />
      </a>
      <a
        className="socialLink"
        href="https://twitter.com/Annaviraja_A"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={twitter} alt="" />
      </a>
      {/* <a className="socialLink" href="#">
        <img src={socialIcons.youtube} alt="" />
      </a> */}
      <a
        className="socialLink"
        href="https://www.linkedin.com/in/annaviraja-arikrishnan/"
        rel="noopener noreferrer"
        target="_blank"
      >
        {/* <img src={socialIcons.index} alt="" /> */}
        <img src={linkedin} alt="" />
      </a>
    </div>
  );
};

export default SocialConnect;
