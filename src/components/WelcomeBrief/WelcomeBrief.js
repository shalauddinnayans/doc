import React from "react";
import "./WelcomeBrief.css";
import { NavLink } from "react-router-dom";
import wellcomeImg from "../../images/wellcome.png";
import { Container } from "react-bootstrap";

const WelcomeBrief = () => {
  return (
    <div>
      <Container>
        <div className="brief-part">
          <h3>WELCOME TO MEDDICAL</h3>
          <h1>A Great Place To Receive Care</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus sed
            tempore doloremque impedit, magnam a amet magni nihil dolor aperiam
            tenetur aspernatur ut delectus id similique. Aliquid non maxime ab.
          </p>
          <NavLink to="/about">Learn More</NavLink>
          <br />
        </div>
        <div className="brief-part-img">
          <img src={wellcomeImg} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default WelcomeBrief;
