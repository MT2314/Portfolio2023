import React from "react";
import about from "../assets/mike.jpg";
import { ImLibreoffice } from "react-icons/im";
import { RiLinkedinBoxLine } from "react-icons/ri";
// Resume
import resume from "../assets/MikeTkachuk-Resume.pdf";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          My name is <span> Mike Tkachuk</span> and I am a Junior Web Developer{" "}
        </h4>
        <p className="about-text">
          I have designed and developed web applications using a variety of
          technologies, frame works and libraries. I am comfortable using API's,
          third-party integrations as well as managing both SQL and NoSQL
          databases. Trained in the MERN stack with a mobile first approach.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Age:</p>
            <p>Nationality:</p>
            <p>Languages:</p>
            <p>Address:</p>
          </div>
          <div className="right-section">
            <p> {new Date().getFullYear() - 2021 + 27}</p>
            <p> Canadian</p>
            <p> English, Ukrainian</p>
            <p> Toronto, Ontario</p>
          </div>
        </div>
        <div className="resume">
          <a href={resume} target="_blank" rel="noreferrer">
            <ImLibreoffice size={50}></ImLibreoffice>
            <span>Resume</span>
          </a>
        </div>
        <div className="linkedIn">
          <a
            href={"https://www.linkedin.com/in/mike-tkachuk-82909111a/"}
            target="_blank"
            rel = "noreferrer"
          >
            <RiLinkedinBoxLine size={50}></RiLinkedinBoxLine>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
