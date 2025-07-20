import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PrincipalNote = () => {
  return (
    <section id="principal-note" className="principal-note">
      <Container>
        <h2>Principal's Note</h2>
        <Row>
          <Col md={4}>
            <img src="/Principal.jpg" alt="Principal" className="principal-image" />
          </Col>
          <Col md={8}>
            <div className="principal-info">
              <h3>Dr. Amal Jyothi S</h3>
              <p><b>Qualification:</b> Ph.D. in Computer Science</p>
            </div>
            <p className="principal-note-text">
              Welcome to AMAL'S College. As the Principal, I am proud to lead an institution that is committed to excellence in education and holistic development. Our dedicated faculty, state-of-the-art facilities, and vibrant campus life are designed to foster the academic and personal growth of our students. We invite you to explore the myriad opportunities that AMAL'S College has to offer and become a part of our dynamic learning community.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PrincipalNote;
