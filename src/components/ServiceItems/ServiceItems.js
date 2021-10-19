import React from "react";

const ServiceItems = (props) => {
  const { name, text, imgUrl } = props.service;
  return (
    <>
      <div class="col">
        <div class="card h-100">
          <img src={imgUrl} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{text}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceItems;
