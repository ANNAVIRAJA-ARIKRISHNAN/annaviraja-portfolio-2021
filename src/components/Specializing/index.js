import React from "react";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import Skill from "../UI/Skill";
import { colors } from "../../style";

/**
 * @author
 * @function Specializing
 **/

const Specializing = (props) => {
  const skills = [
    {
      skillName: "HTML/CSS",
      desc: "Experience in Html & Css",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#f2a154",
    },
    {
      skillName: "JavaScript",
      desc: "Experience in JavaScript",
      value: 90,
      textColor: colors.primaryColor,
      pathColor: "#f9f871",
    },
    {
      skillName: "ReactJS",
      desc: "Experience in ReactJS",
      value: 90,
      textColor: colors.primaryColor,
      pathColor: "#00af91",
    },
    {
      skillName: "jQuery",
      desc: "Experience in jQuery",
      value: 60,
      textColor: colors.primaryColor,
      pathColor: "#845ec2",
    },
    {
      skillName: "Bootstrap",
      desc: "Experience in Bootstrap 3 & 4",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#845ec2",
    },
    {
      skillName: "NodeJS",
      desc: "Experience in NodeJS",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#54e346",
    },
    {
      skillName: "Dot Net",
      desc: "Experience in Dot Net Technologies",
      value: 80,
      textColor: colors.primaryColor,
      pathColor: "#111d5e",
    },
    {
      skillName: "SQL Server",
      desc: "Experience in MS SQL Server",
      value: 60,
      textColor: colors.primaryColor,
      pathColor: "#f88f01",
    },
    {
      skillName: "MySql",
      desc: "Experience in MySql",
      value: 60,
      textColor: colors.primaryColor,
      pathColor: "#f88f01",
    },
    {
      skillName: "MongoDB",
      desc: "Experience in MongoDB",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#f88f01",
    },
  ];

  return (
    <div className="container">
      <Card style={{ padding: "50px" }}>
        <SmallHeading text="What I do" />
        <MediumHeading text="Experience in" />
        <div
          data-aos="fade-up"
          className="flexRow wrap justify-sb"
          style={{ padding: "30px" }}
        >
          {skills.map((skill, index) => (
            <Skill
              key={index}
              skillName={skill.skillName}
              desc={skill.desc}
              value={skill.value}
              textColor={colors.primaryColor}
              pathColor={skill.pathColor}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Specializing;
