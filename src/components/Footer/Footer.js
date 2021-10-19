import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="footer-down-part-continer">
        <div className="footer-down-part">
          <div>
            <h1>MEDICAL</h1>
            <h5>Leading the Way in Medical Execellence, Trusted Care.</h5>
          </div>
          <div className="footer-nav">
            <h3>Important Links</h3>
            <NavLink to="/appointment">Appointment</NavLink>
            <NavLink to="/doctors">Doctors</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About Us</NavLink>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>Call: (237) 681-812-255</p>
            <p>Email: fildineesoe@gmail.com</p>
            <p>Address: 0123 Some place</p>
          </div>
          <div>
            <h3>Newsletter</h3>
            <button>Enter Your Email Address</button>
          </div>
        </div>
        <div></div>
        <div className="footer-most-down-part">
          <p>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
          <div>
            <a href="https://www.facebook.com/">
              <FaFacebook />
            </a>
            <a href="https://www.facebook.com/">
              <BsInstagram />
            </a>
            <a href="https://www.facebook.com/">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
