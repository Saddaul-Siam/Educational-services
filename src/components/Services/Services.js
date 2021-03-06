import React, { useEffect, useState } from 'react';
import Service from '../Service/Service'
const Searvices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className="container">
      <div className="row ">
        {
          services.map(service => <Service key={service.id} service={service}></Service>)
        }
      </div>
    </div>
  );
};

export default Searvices;
