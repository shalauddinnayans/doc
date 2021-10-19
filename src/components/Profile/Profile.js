import React from "react";

const Profile = (props) => {
  const { name, imgUrl, subject, text } = props.doctor;
  return (
    <>
      <div class="col">
        <div class="card h-100">
          <img src={imgUrl} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">{name}</h4>
            <h5>{subject}</h5>

            <p class="card-text">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
