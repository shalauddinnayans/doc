import React, { useEffect, useState } from "react";
import ServiceItems from "../ServiceItems/ServiceItems";
import GetInTouch from "../GetInTouch/GetInTouch";

const Services = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("./service.JSON")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {service.map((service) => (
          <ServiceItems key={service.key} service={service}></ServiceItems>
        ))}
      </div>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default Services;
