import React from "react";
import "./SignUp.css";
import SignUpData from "../../../Data/SignUp.json";

const SignUp = () => {
  return (
    <div className="sign-up">
        <div className="row-box">
            <div className="content">
                <h1 dangerouslySetInnerHTML={{__html: SignUpData.headline}} />
                <p>{SignUpData.description}</p>
                <a href={SignUpData.button.link}>
                    {SignUpData.button.text} <i className={SignUpData.button.iconCalss}></i>
                </a>
            </div>
        </div>
    </div>
  );
};

export default SignUp;
