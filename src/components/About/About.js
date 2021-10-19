import React from "react";
import "./About.css";
import ShowcaseImg from "../../images/Rectangle 3.png";

const About = () => {
  return (
    <div>
      <div className="info-part">
        <div>
          <img src={ShowcaseImg} alt="" />
        </div>
        <div>
          <h4>WELCOME TO HOSPITAL</h4>
          <h1>
            Best Care For Your <br /> Good Health
          </h1>
          <div className="info-part-point">
            <div>
              <p>A Passion For Healing</p>
              <p>All Our Best</p>
              <p>Always Caring</p>
            </div>
            <div>
              <p>5-Star Care</p>
              <p>Belive In Us</p>
              <p>A Legacy Of Excellence</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            nesciunt minus nisi numquam atque quaerat corrupti autem debitis
            dolore odio quam est nihil quis mollitia asperiores, repudiandae
            deserunt ipsa esse?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            voluptatibus sapiente necessitatibus soluta omnis perferendis odit
            porro? Cumque officiis omnis alias aperiam inventore? At, dolorem
            ullam! Iste velit ex vitae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
