import React from "react";
import "./Contact.css";
import { FiPhoneCall } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { AiOutlineMail, AiOutlineClockCircle } from "react-icons/ai";
import mapImg from "../../images/Mapview.png";
import subhed from "../../images/about-sub.jpg";

const Contact = () => {
  return (
    <div>
      <div className="sub-hed">
        <img src={subhed} alt="" />
      </div>
      <div className="map-img">
        <img src={mapImg} alt="" />
      </div>
      <div className="contact-box">
        <div>
          <div>
            <h3>Get In Touch</h3>
            <h2>Contact</h2>
          </div>
          <div></div>
        </div>
        <div>
          <div className="getInTouch-items">
            <div className="getInTouch-item">
              <div>
                <FiPhoneCall />
              </div>
              <h3>Emergency</h3>
              <p>(237) 681-812-255</p>
              <p>(237) 666-331-894</p>
            </div>
            <div className="getInTouch-item">
              <div>
                <ImLocation />
              </div>
              <h3>Location</h3>
              <p>0123 Some place</p>
              <p>9876 Some country</p>
            </div>
            <div className="getInTouch-item">
              <div>
                <AiOutlineMail />
              </div>
              <h3>Email</h3>
              <p>fildineeesoe@gmil.com</p>
              <p>myebstudios@gmail.com</p>
            </div>
            <div className="getInTouch-item">
              <div>
                <AiOutlineClockCircle />
              </div>
              <h3>Working Hours</h3>
              <p>Mon-Sat 09:00-20:00</p>
              <p>Sunday Emergency only</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
