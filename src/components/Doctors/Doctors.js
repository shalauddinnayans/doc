import React, { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import { CardGroup } from "react-bootstrap";

const Doctors = () => {
  const [person, setPerson] = useState([]);
  useEffect(() => {
    fetch("./doctor.JSON")
      .then((res) => res.json())
      .then((data) => setPerson(data));
  }, []);
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* <CardGroup> */}
        {person.map((doctor) => (
          <Profile key={doctor.id} doctor={doctor}></Profile>
        ))}
        {/* </CardGroup> */}
      </div>
    </div>
  );
};

export default Doctors;