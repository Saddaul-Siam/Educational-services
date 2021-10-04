import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
  const { title, img, description, finish, time, tk, techer } = props.service;
  return (
    <div className="col-md-4 py-3">
      <Card className="h-100 rounded-3 shadow-lg">
        <Card.Img className="rounded-3 p-2" variant="top" src={img} />
        <Card.Body>
          <Card.Text>
            <h2>{title}</h2>
            <h4>Techer: {techer}</h4>
            <p style={{ 'fontFamily': 'Roboto'}} >{description}</p>
          <br />
          <br />
          <div className="d-flex justify-content-between align-content-stretch align-items-center}">
            <div className=""><p className="fw-bold">Doing the course<br /><span className="text-info"> <i class="bi bi-people-fill"></i> {finish} </span></p></div>
            <div className="m-0 pt-2 "><p className="fw-bold">Time <span className=" p-1 rounded-3 text-info"><i class="bi bi-clock"></i> {time}</span></p></div>
          </div>

        </Card.Text>
      </Card.Body>
      <Card.Footer> <div className="d-flex justify-content-between align-items-center }">
        <div className="fw-bold fs-6"><span className="fs-3">৳</span> {tk} </div>
        <div className="">
          <Link to="/login"><Button className="btn btn-success rounded-3" variant="primary">Enroll Now</Button></Link>
        </div>
      </div></Card.Footer>
    </Card>
    </div >
  );
};

export default Service;








