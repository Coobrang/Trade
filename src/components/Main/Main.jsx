import React from "react";
import Meet from "./Meet/Meet";
import Featured from "./Featured/Featured";
import Tools from "./Tools/Tools";
import AboutUs from "./AboutUs/AboutUs";
import Wallet from "./Wallet/Wallet";
import SignUp from "./SignUp/SignUp";

const Main = () => {
  return (
    <div>
      <Meet />
      <Featured />
      <Tools />
      <AboutUs />
      <Wallet />
      <SignUp />
    </div>
  );
};

export default Main;
