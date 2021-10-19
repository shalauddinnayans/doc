import React from "react";
import { Link } from "react-router-dom";
import "./ServiceItems.css";

const ServiceItems = (props) => {
  const { key, name, text, imgUrl } = props.service;
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img src={imgUrl} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{text}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted btn-style">
              <Link to={`appoinment/${key}`}>
                <button className="btn btn-text">Book Appoinment</button>
              </Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceItems;
