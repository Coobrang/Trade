import React from "react";
import "./AboutUs.css";
import AboutUsData from "../../../Data/AboutUs.json";

const imagePath = (imageName) => {
  try {
    return require (`../../../assets/${imageName}`);
  } catch (err) {
    return null;
  }
};

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="row-wrapper">
        <div className="title">
          <span>{AboutUsData.header.title}</span>
          <h1>{AboutUsData.header.headline}</h1>
          <p>{AboutUsData.header.description}</p>
        </div>

        <div className="boxes">
          {AboutUsData.boxes.map((box, index) => (
          <div className="box" key={index}>
            {box.title && <h2>{box.title}</h2>}
            {box.subtitle && <h3>{box.subtitle}</h3>}
            {box.image && <img src={imagePath(box.image)} alt=""></img>}
            {box.description && <p dangerouslySetInnerHTML={{__html: box.description}} />}
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;