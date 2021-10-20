import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";
import { IconContext } from "react-icons";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <div className="top-most">
        <div>
          <h2>MEDDCEL</h2>
        </div>
        <div className="top-most-items">
          <div className="top-most-item">
            <div>
              <IconContext.Provider
                value={{
                  color: "blue",
                  size: "2em",
                  className: "global-class-name",
                }}
              >
                <FiPhoneCall />
              </IconContext.Provider>
            </div>
            <div className="top-most-item-text-box">
              <p>
                <small className="top-most-item-text-box-titel">
                  Emergency
                </small>
                <br />
                <small className="top-most-item-text-box-text">
                  0172612122
                </small>
              </p>
            </div>
          </div>
          <div className="top-most-item">
            <div>
              <AiOutlineClockCircle />
            </div>
            <div className="top-most-item-text-box">
              <p>
                <small className="top-most-item-text-box-titel">
                  Work Hour
                </small>
                <br />
                <small className="top-most-item-text-box-text">Everyday</small>
              </p>
            </div>
          </div>
          <div className="top-most-item">
            <div>
              <ImLocation />
            </div>
            <div className="top-most-item-text-box">
              <p>
                <small className="top-most-item-text-box-titel">Location</small>
                <br />
                <small className="top-most-item-text-box-text">
                  Cox's Bazar
                </small>
              </p>
            </div>
          </div>
        </div>
        <div>
          <Link to="/appoinment">
            <button className="top-most-btn">Appoinment</button>
          </Link>
        </div>
      </div>
      {/* Nev bar */}
      <div className="nav-bar">
        <div className="nev-bar-link">
          <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/doctors">Doctors</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>

        <div>
          {user.displayName ? (
            <div>
              <small className="login-text">Login As {user?.displayName}</small>
              <button className="logout-btn" onClick={logOut}>
                log out
              </button>
            </div>
          ) : (
            <div>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
