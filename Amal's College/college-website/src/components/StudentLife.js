import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const StudentLife = () => {
  return (
    <section id="student-life" className="student-life">
      <Container>
        <h2>Student Life</h2>
        <p>
          At AMAL'S College, we believe that a fulfilling student life is essential to a well-rounded education. Our vibrant campus offers a range of activities and organizations designed to enhance personal development and provide enriching experiences outside the classroom. Some highlights of student life include:
        </p>
        <Row>
          {/* Clubs and Organizations */}
          <Col md={4} className="student-life-box">
            <img src="/CLUBS.jpeg" alt="Clubs and Organizations" className="student-life-image" />
            <h3>Clubs and Organizations</h3>
            <p>Join one of our many student-led clubs, from academic and professional organizations to cultural and recreational groups.</p>
          </Col>

          {/* Sports and Fitness */}
          <Col md={4} className="student-life-box">
            <img src="/Sports.jpeg" alt="Sports and Fitness" className="student-life-image" />
            <h3>Sports and Fitness</h3>
            <p>Participate in intramural sports or take advantage of our state-of-the-art fitness center.</p>
          </Col>

          {/* Events and Activities */}
          <Col md={4} className="student-life-box">
            <img src="/Events.jpeg" alt="Events and Activities" className="student-life-image" />
            <h3>Events and Activities</h3>
            <p>Engage in campus events such as concerts, theater performances, and guest lectures.</p>
          </Col>

          {/* Student Government */}
          <Col md={4} className="student-life-box">
            <img src="/STDGVT.jpeg" alt="Student Government" className="student-life-image" />
            <h3>Student Government</h3>
            <p>Get involved in student governance and contribute to shaping campus life.</p>
          </Col>

          {/* Volunteering and Service */}
          <Col md={4} className="student-life-box">
            <img src="/Volunteer.jpeg" alt="Volunteering and Service" className="student-life-image" />
            <h3>Volunteering and Service</h3>
            <p>Contribute to the community through various volunteer opportunities and service projects.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StudentLife;
