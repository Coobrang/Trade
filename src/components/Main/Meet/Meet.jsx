import React from "react";
import "./Meet.css";
import meeetData from "../../../Data/Meet.json";


const imagePath = (imageName) => {
    try {
        return require(`../../../assets/${imageName}`);
    } catch (err) {
        return null;
    }
};

const Meet = () => {
  return (
    <div className="meet">
        <div className="platform">
            <div className="logos">
                {meeetData.images.map((imageName, index) => (
                <div className="box" key={index}>
                    <img src={imagePath(imageName)} alt="" />
                </div>
                ))}
            </div>

            <div className="content">
                <span>{meeetData.content.title}</span>
                <h1>{meeetData.content.headline}</h1>
                <p>{meeetData.content.description}</p>
                <a href={meeetData.content.linkUrl}>
                    {meeetData.content.linkText} <i className={meeetData.content.iconClass}></i>
                </a>
                <img src={imagePath(meeetData.content.image)} alt="" />
            </div>
        </div>
    </div>
  );
};

export default Meet;
