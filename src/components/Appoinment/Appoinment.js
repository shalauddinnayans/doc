import React from "react";
import { useParams } from "react-router";

const Appoinment = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Appoinment;
