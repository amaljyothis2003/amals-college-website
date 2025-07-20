import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

const Courses = () => {
  const [showBachelors, setShowBachelors] = useState(false);
  const [showMasters, setShowMasters] = useState(false);
  const [showPhd, setShowPhd] = useState(false);

  return (
    <section id="courses" className="courses">
      <Container>
        <h2>Our Courses</h2>
        <Row>
          {/* Bachelor's Degree */}
          <Col md={4} className="course-box">
            <img src="/Bachelor.jpeg" alt="Bachelor's Degree" className="course-image" />
            <h3>Bachelor's Degree</h3>
            <p>Explore our undergraduate programs:</p>
            <Button variant="primary" onClick={() => setShowBachelors(true)}>
              View Programs
            </Button>
          </Col>

          {/* Master's Degree */}
          <Col md={4} className="course-box">
            <img src="/Master.jpg" alt="Master's Degree" className="course-image" />
            <h3>Master's Degree</h3>
            <p>Discover our graduate programs:</p>
            <Button variant="primary" onClick={() => setShowMasters(true)}>
              View Programs
            </Button>
          </Col>

          {/* Ph.D. Programs */}
          <Col md={4} className="course-box">
            <img src="/PHD.jpeg" alt="Ph.D. Programs" className="course-image" />
            <h3>Ph.D. Programs</h3>
            <p>Learn about our doctoral offerings:</p>
            <Button variant="primary" onClick={() => setShowPhd(true)}>
              View Programs
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Bachelor's Degree Modal */}
      <Modal show={showBachelors} onHide={() => setShowBachelors(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Bachelor's Degree Programs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Bachelor of Science in Computer Science</li>
            <li>Bachelor of Arts in English Literature</li>
            <li>Bachelor of Business Administration</li>
            <li>Bachelor of Engineering in Electrical</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowBachelors(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Master's Degree Modal */}
      <Modal show={showMasters} onHide={() => setShowMasters(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Master's Degree Programs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Master of Science in Data Science</li>
            <li>Master of Business Administration</li>
            <li>Master of Arts in History</li>
            <li>Master of Engineering in Mechanical</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowMasters(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Ph.D. Programs Modal */}
      <Modal show={showPhd} onHide={() => setShowPhd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ph.D. Programs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Ph.D. in Computer Science</li>
            <li>Ph.D. in Economics</li>
            <li>Ph.D. in Chemical Engineering</li>
            <li>Ph.D. in Educational Leadership</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPhd(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Courses;
