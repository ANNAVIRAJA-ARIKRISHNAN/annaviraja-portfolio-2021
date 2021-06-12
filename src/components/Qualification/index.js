import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Button from "../UI/Button";
import Tile from "../UI/Tile";
import me from "../../assets/images/me-left.png";

import "./style.css";

/**
 * @author
 * @function Qualification
 **/

const Qualification = (props) => {
  return (
    <div id="qualification" className="container" style={{ padding: "50px 0" }}>
      <SmallHeading text="Qualifications" />
      <MediumHeading text={"My Education"} />
      <div
        className="flexRow flexCol align-center justify-sb"
        style={{ margin: "50px 0" }}
      >
        <div data-aos="fade-up-right">
          <img src={me} alt="" />
          <div
            style={{
              background: "#fff",
              padding: "10px 10px",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              borderRadius: "20px",
            }}
          >
            {/* <div className="mlr-10">
              <Button label="Hire Me" />
            </div>
            <div className="mlr-10">
              <Button label="Download CV" inverse={true} />
            </div> */}
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
        <div>
          <Tile
            title="GUVI"
            mediumTitle="Full-Stack Developement."
            desc="2020 - 2021"
          />
          <Tile
            title="Madras University"
            mediumTitle="Master of Computer Science."
            desc="2011 - 2014"
          />
          <Tile
            title="M.S University"
            mediumTitle="B.Sc - Computer Science."
            desc="2007 - 2010"
          />
          {/* <Tile
            title="Government Higher Secondary School"
            mediumTitle="Higher"
            desc="lorem ipsum text"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Qualification;
