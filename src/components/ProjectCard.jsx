import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { SERVER_URL } from '../services/serverUrl';

function ProjectCard({ displayData }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow} className='shadow btn' style={{ width: '25rem' }}>
        <Card.Img height={'200px'} variant="top" src={`${SERVER_URL}/uploads/${displayData?.projectImage}`} alt={displayData?.title} />
        <Card.Body>
          <Card.Title>{displayData?.title}</Card.Title>
        </Card.Body>
      </Card>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src={`${SERVER_URL}/uploads/${displayData?.projectImage}`} alt={displayData?.title} />
            </div>
            <div className="col-lg-6">
              <h3>{displayData?.title}</h3>
              <h5><span className='fw-bolder'>Languages Used</span> : {displayData?.language}</h5>
              <p style={{ textAlign: 'justify' }}><span className='fw-bolder'>Description </span>: {displayData?.overview}</p>
            </div>
          </div>
          <div className='d-inline-flex float-start gap-1 mt-2'>
            <a href={displayData?.github} target='_blank' className='btn btn-info' onClick={handleClose}>
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={displayData?.website} target='_blank' className='btn btn-success' onClick={handleClose}>
              <i className="fa-solid fa-link"></i>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard