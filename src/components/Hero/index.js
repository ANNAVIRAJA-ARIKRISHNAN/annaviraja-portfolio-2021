import React from "react";
import me from "../../assets/images/me-right.png";
import Button from "../UI/Button";
import "./style.css";

/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
  return (
    <div id="home" className="container" style={{ marginTop: "70px" }}>
      <div className="flexRow flexCol justify-sb align-center">
        <div data-aos="fade-right">
          <p className="uppercase bold-500 textColor ls-1 mtb-10">
            <span className="primaryColor">Hello,</span> I am Annavi Raja A
          </p>
          <h1 className="textColor ls-1 mtb-10">Full-Stack Developer</h1>
          <p className="font-12 grey mtb-10">
            Full-Stack Developer using JS & DotNet.
          </p>
          <div className="flexRow" style={{ margin: "30px 0" }}>
            <div>
              <Button
                label="Hire Me"
                href={"mailto:annaviraja.arikrishnan@yahoo.com?subject=Hire Me"}
                target={"_blank"}
              />
            </div>
            <div className="mlr-10">
              <Button
                label="Download CV"
                href={
                  "https://drive.google.com/file/d/1FL6o9MZGT30uDWNSWjeV9M1SmpXMlRis/view?usp=sharing"
                }
                target={"_blank"}
                inverse={true}
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="meRightImgContainer">
            <img src={me} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
