import React from "react";
import socialIcons from "../../../assets/social-icons";
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
        target="_blank"
      >
        <img src={socialIcons.facebook} alt="" />
      </a>
      <a
        className="socialLink"
        href="https://twitter.com/Annaviraja_A"
        target="_blank"
      >
        <img src={socialIcons.twitter} alt="" />
      </a>
      {/* <a className="socialLink" href="#">
        <img src={socialIcons.youtube} alt="" />
      </a> */}
      <a
        className="socialLink"
        href="https://www.linkedin.com/in/annaviraja-arikrishnan/"
        target="_blank"
      >
        <img src={socialIcons.linkedin} alt="" />
      </a>
    </div>
  );
};

export default SocialConnect;
