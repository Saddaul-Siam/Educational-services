import React, { useEffect, useState } from 'react';
import Service from '../Service/Service'
const Courses = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Saddaul-Siam/fake-data/main/course.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className="container">
      <div className="row ">
        {
          services.map(service => <Service service={service}></Service>)
        }
      </div>
    </div>
  );
};

export default Courses;
