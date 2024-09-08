import React from "react";
import "./Tools.css";
import toolsData from "../../../Data/Tools.json";

const imagePath = (imageName) => {
    try {
        return require (`../../../assets/${imageName}`);
    } catch (err) {
        return null;
    }
};

const Tools = () => {
  return (
    <div className="tools">
        <div className="header">
            <div className="content">
                <span>{<i className={toolsData.header.iconClass}></i>} {toolsData.header.title}</span>
                <h1>{toolsData.header.headline}</h1>
                <p>{toolsData.header.description}</p>
            </div>
        </div>

        <div className="boxes">
            {toolsData.boxes.map((box, index) => (
            <div className="box" key={index}>

                {index % 2 === 0 ? (
                    <>
                        <h3>{box.title}</h3>
                        <p>{box.description}</p>
                        <img src={imagePath(box.image)} alt="" />
                    </>
                ) : (
                    <>
                        <img src={imagePath(box.image)} alt="" />
                        <h3>{box.title}</h3>
                        <p>{box.description}</p>
                    </>
                )}

            </div> 
            ))}
        </div>

        <div className="bottom">
            <div className="content">
                <h3>{toolsData.bottom.title}</h3>
                <p>{toolsData.bottom.description}</p>
                <img src={imagePath(toolsData.bottom.image)} alt="" />
            </div>
        </div>
    </div>
  );
};

export default Tools;
