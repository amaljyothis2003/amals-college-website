import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <Container className="text-center">
        <Row className="g-4">
          <Col lg={4} md={6} sm={12}>
            <div id="contact">
              <h5>Contact Us</h5>
              <h6>Address</h6>
              <address>
                Amal's College,<br />
                Hosur Road,<br />
                Bangalore, <br />
                Karnataka 560068<br />
                India
              </address>
              <p><b>Email</b>: info@amalscollege.com</p>
              <p><b>Website:</b> <span>www.amalscollege.com</span></p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <h5>Follow Us</h5>
            <div className="social-icons mb-4">
              <a href="https://facebook.com/amalscollege" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/Facebook.png" alt="Facebook" className="logo social-icon" />
              </a>
              <a href="https://instagram.com/amalscollege" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/Instagram_logo.png" alt="Instagram" className="logo social-icon" />
              </a>
              <a href="https://wa.me/918012345678" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/WhatsApp.png" alt="WhatsApp" className="logo social-icon" />
              </a>
              <a href="https://linkedin.com/company/amalscollege" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/LinkedIN.webp" alt="LinkedIn" className="logo social-icon" />
              </a>
            </div>
            <h5>Location</h5>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5558789578886!2d77.60361387358842!3d12.936241415655477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b277a93807%3A0x88518f37b39dabd0!2sChrist%20University!5e0!3m2!1sen!2sin!4v1722411228433!5m2!1sen!2sin" 
                id="map"
                title="College Location"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  width: '100%',
                  height: '200px',
                  border: 'none',
                  borderRadius: '8px'
                }}>
              </iframe>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><a href="#about">About</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#student-life">Student Life</a></li>
              <li><a href="#alumni">Alumni</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><Link to="/library">Library</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <span className="text-muted">© 2025 Amal's College. All rights reserved.</span>
      </Container>
    </footer>
  );
};

export default Footer;
