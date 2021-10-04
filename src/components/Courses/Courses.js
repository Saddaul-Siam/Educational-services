import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';
import { Button } from 'react-bootstrap';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('./home-page.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])
  return (
    <div className="container">
      <div className="row ">
        {
          courses?.map(course => <Course
            key={course.id}
            course={course}
          ></Course>)
        }
        <div className='pt-3 pb-5'>
          <Link to="/services"><Button className="btn-info rounded-3" variant="primary">See more course</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
