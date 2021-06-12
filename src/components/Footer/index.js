import React from "react";
import SocialConnect from "../UI/SocialConnect";
import conversation from "../../assets/images/conversation.png";
import "./style.css";

/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {
  var functionforscroll = function (id) {
    var element = document.getElementById(id);
    if (element !== null) element.scrollIntoView(true);
  };
  return (
    <div className="container">
      <div
        className="flexRow flexCol justify-sb align-center"
        style={{ margin: "50px 0" }}
      >
        <div className="mtb-10">
          <SocialConnect />
        </div>
        <div className="footerMenus mtb-10">
          <nav>
            <a href="#home" onClick={functionforscroll("home")}>
              Home
            </a>
            <a href="#experience" onClick={functionforscroll("experience")}>
              Experience
            </a>
            <a href="#skills" onClick={functionforscroll("skills")}>
              Skills
            </a>
            <a
              href="#qualification"
              onClick={functionforscroll("qualification")}
            >
              Qualification
            </a>
            <a href="#contact" onClick={functionforscroll("contact")}>
              Contact
            </a>
          </nav>
        </div>
        <div className="conversationContainer primaryBgColor mtb-10">
          <img src={conversation} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
