import React from "react";
import Title from "./subcomponents/Title";
import ImageSection from "./subcomponents/ImageSection";
import SkillsSection from "./subcomponents/SkillsSection";
import ServicesSection from "./subcomponents/ServicesSection";
import "./assets/about-styles.scss";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={"About Me"} />
      <ImageSection />
      <Title title={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"HTML"} progress={"90%"} width={"90%"} />
        <SkillsSection skill={"CSS"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Javascript"} progress={"50%"} width={"50%"} />
        <SkillsSection skill={"Node Js"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Express"} progress={"66%"} width={"66%"} />
        <SkillsSection skill={"React Js"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"MySQL"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Mongo DB"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"J-Query"} progress={"55%"} width={"55%"} />
      </div>

      <Title title={"Services"} span={"Services"} />
      <div className="servives-container">
        <ServicesSection
          title={"Website Design"}
          text={`Knowledgeable Web Developer, using modern technologies to turn your dream website into reality:`}
          skills={[
            "HTML",
            "CSS",
            "NodeJS",
            "Express",
            "MySQL + MongoDB",
            "React",
            "Knowledge of API Use",
          ]}
        />
        <ServicesSection
          title={"Functional Programing"}
          text={
            "Trained in functional programming with the aim of minimizing side effects. Employ Testing to make utilities resilient:"
          }
          skills={[
            "Javascript",
            "Asynchronous Js",
            "Data Object - Array & Object Manipulation",
            "Testing (Jest,Mocha)",
          ]}
        />
        <ServicesSection
          title={"Mobile Responsiveness"}
          text={
            "Skilled at dynamic web design with animated effects, seemless transitions and fast load times: "
          }
          skills={[
            "CSS",
            "React",
            "Animation",
            "Mobile Responsiveness",
            "Bootstrap, Material UI, and more...",
          ]}
        />
      </div>
    </div>
  );
}

export default AboutPage;
