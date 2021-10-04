import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = (props) => {
  const { title, img, time, tk, id } = props?.course
  return (
    <div className="col-md-3 py-3">
      <Link className="text-dark text-decoration-none" to="/service" >
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="fs-6 ">{title}</Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between align-content-stretch align-items-center}">
                <div className="fw-bold fs-6"><span className="fs-3">৳</span> {tk} </div>
                <div className="m-0 pt-2 "><p className="bg-info text-light p-1 rounded-3"><i class="bi bi-clock"></i> {time}</p></div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>

    </div>

  );
};

export default Course;

