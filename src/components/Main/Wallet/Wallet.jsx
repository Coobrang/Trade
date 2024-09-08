import React from "react";
import "./Wallet.css";
import walletData from "../../../Data/Wallet.json";

const imagePath = (imageName) => {
    try {
        return require (`../../../assets/${imageName}`);
    } catch (err) {
        return null;
    }
};

const Wallet = () => {
  return (
    <div className="wallet">
        <div className="title">
            <div className="box">
                <span>{walletData.header.title}</span>
                <h1>{walletData.header.headline}</h1>
                <p>{walletData.header.description}</p>
            </div>
            <div className="box">
                <h4>{walletData.network.label}: <span>{walletData.network.name}</span></h4>
                <img src={imagePath(walletData.network.image)} alt="" />
            </div>
        </div>

        <div className="box-container">
            {walletData.features.map((feature, index) => (
            <div className="box" key={index}>
                <i className={feature.iconCalss}></i>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
            </div>
            ))}
        </div>
    </div>
  );
};

export default Wallet;
