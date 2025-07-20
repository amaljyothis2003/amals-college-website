import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-page">
      {/* Hero Section with Gradient Background */}
      <div className="hero-container">
        <video src="/BANNER.mp4" autoplay muted loop className="video"></video>
        <div className="hero">
          <div className="lefthero">
            <img src="/COLLEGE LOGO.png" className="logo2" alt="College Logo" />
          </div>
          <div className="text">
            <h1>AMAL'S COLLEGE LOGIN PAGE</h1>
            <h3>Scroll down to select your role</h3>
          </div>
        </div>
      </div>
      
      {/* Role Selection Section */}
      <section id="role-selection" className="role-selection text-center py-5">
        <Container>
          <h2>Select Your Role</h2>
          <p>Please select your role to proceed:</p>
          <div className="role-buttons d-flex justify-content-around">
            <Link to="/student-login" className="role-btn">
              <img src="/Student-3-1024.webp" alt="Student" className="role-icon" />
              <span>Student</span>
            </Link>
            <Link to="/faculty-login" className="role-btn">
              <img src="/Faculty.webp" alt="Faculty" className="role-icon" />
              <span>Faculty</span>
            </Link>
            <Link to="/staff-login" className="role-btn">
              <img src="/Staff.png" alt="Staff" className="role-icon" />
              <span>Staff</span>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Login;
