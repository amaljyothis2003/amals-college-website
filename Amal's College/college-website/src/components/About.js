import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="about">
      <Container>
        <Row>
          <Col md={6}>
            <h2>About Us</h2>
            <p>
              Welcome to AMAL'S College, a premier institution dedicated to fostering academic excellence, innovation, and leadership. Established in 1985, ABC College has grown to become a beacon of higher education, known for its rigorous academic programs and vibrant campus life.
              Our campus is spread across 20 hectares (approximately 50 acres) of lush greenery, providing a serene and inspiring environment for students to learn and grow. Located in the heart of the city, ABC College offers a perfect blend of modern infrastructure and natural beauty. Key features of our campus include:
            </p>
            <ul>
              <li><b>Classrooms and Laboratories:</b> Equipped with the latest technology to enhance learning and research.</li>
              <li><b>Extensive Library:</b> Home to thousands of books, journals, and digital resources, offering students a vast pool of knowledge.</li>
              <li><b>Sports Complex:</b> Includes a gymnasium, swimming pool, tennis and basketball courts, and fields for various sports.</li>
              <li><b>On-Campus Housing:</b> Comfortable and secure accommodation with all necessary amenities.</li>
              <li><b>Dining Facilities:</b> Multiple cafeterias and dining halls serving a variety of cuisines to cater to diverse tastes.</li>
            </ul>
          </Col>
          <Col md={6}>
            <img src="/Collegepic.jpg" alt="College Campus" className="about-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
