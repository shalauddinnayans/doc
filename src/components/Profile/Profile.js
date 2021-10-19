import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = (props) => {
  const { key, name, imgUrl, subject } = props.doctor;
  return (
    <>
      <div class="col">
        <div class="card h-100">
          <img src={imgUrl} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">{name}</h4>
            <h5>{subject}</h5>
            <div className="appoin-btn">
              <Link to={`appoinment/${key}`}>
                <button className="btn btn-primary">Appoinment</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
