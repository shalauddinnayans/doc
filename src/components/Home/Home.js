import React from "react";
import Banner from "../Banner/Banner";
import GetInTouch from "../GetInTouch/GetInTouch";
import WelcomeBrief from "../WelcomeBrief/WelcomeBrief";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <WelcomeBrief></WelcomeBrief>
      </div>
      <div>
        <GetInTouch></GetInTouch>
      </div>
    </div>
  );
};

export default Home;
