import React from "react";
import "./GetInTouch.css";
import { FiPhoneCall } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { AiOutlineMail, AiOutlineClockCircle } from "react-icons/ai";

const GetInTouch = () => {
  return (
    <div>
      <div className="footer-contact-section">
        <div>
          <h3>Get in toch</h3>
          <h2>Contcat</h2>
        </div>

        <div className="footer-contact-items">
          <div className="footer-contact-item">
            <div>
              <FiPhoneCall />
            </div>
            <h3>Emergency</h3>
            <p>(237) 681-812-255</p>
            <p>(237) 666-331-894</p>
          </div>
          <div className="footer-contact-item">
            <div>
              <ImLocation />
            </div>
            <h3>Location</h3>
            <p>0123 Some place</p>
            <p>9876 Some country</p>
          </div>
          <div className="footer-contact-item">
            <div>
              <AiOutlineMail />
            </div>
            <h3>Email</h3>
            <p>fildineeesoe@gmil.com</p>
            <p>myebstudios@gmail.com</p>
          </div>
          <div className="footer-contact-item">
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
  );
};

export default GetInTouch;
