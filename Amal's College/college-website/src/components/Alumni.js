import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Alumni = () => {
  return (
    <section id="alumni" className="alumni">
      <Container>
        <h2>Our Alumni</h2>
        <Row>
          {/* Alumni Member 1 */}
          <Col md={4} className="alumni-box">
            <img src="/Shoun.jpeg" alt="Alumni Member 1" className="alumni-image" />
            <h3>Shoun Chacko Salaji</h3>
            <p><b>Qualification:</b> Bachelor of Science in Computer Science</p>
            <p><b>Current Designation:</b> Senior Software Engineer at TechCorp</p>
            <p><b>Views on College:</b> "Amal's College provided me with a strong foundation in computer science and invaluable industry connections. The faculty were exceptional and the campus life was vibrant and engaging."</p>
          </Col>

          {/* Alumni Member 2 */}
          <Col md={4} className="alumni-box">
            <img src="/Bharat.png" alt="Alumni Member 2" className="alumni-image" />
            <h3>Bharat Harshan</h3>
            <p><b>Qualification:</b> Master of Business Administration</p>
            <p><b>Current Designation:</b> Marketing Director at Global Inc.</p>
            <p><b>Views on College:</b> "The MBA program at Amal's College was rigorous and comprehensive. The diverse range of courses and networking opportunities helped me excel in my career."</p>
          </Col>

          {/* Alumni Member 3 */}
          <Col md={4} className="alumni-box">
            <img src="/Arun.jpg" alt="Alumni Member 3" className="alumni-image" />
            <h3>Arun M P</h3>
            <p><b>Qualification:</b> Ph.D. in Economics</p>
            <p><b>Current Designation:</b> CEO of Commute</p>
            <p><b>Views on College:</b> "My time at Amal's College was transformative. The research facilities were top-notch and the academic environment was stimulating. I am grateful for the support and mentorship I received."</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Alumni;
