import React from 'react';
import { Container } from 'react-bootstrap';

const StudentLogin = () => {
  return (
    <div className="student-login-page">
      {/* Hero Section with Gradient Background */}
      <div className="hero-container">
        <video src="/BANNER.mp4" autoPlay muted loop className="video"></video>
        <div className="hero">
          <div className="lefthero">
            <img src="/COLLEGE LOGO.png" className="logo2" alt="College Logo" />
          </div>
          <div className="text">
            <h1>AMAL'S COLLEGE</h1>
            <h2>STUDENT LOGIN</h2>
            <h4>Scroll down to Login</h4>
          </div>
        </div>
      </div>
      
      {/* Login Section */}
      <section className="login-section">
        <Container className="d-flex justify-content-center align-items-center">
          <div className="login-box">
            <h2>Student Login</h2>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="userId">Student ID</label>
                <input type="text" className="form-control" id="userId" placeholder="Enter Student ID" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter Password" />
              </div>
              <div className="form-group mb-3">
                <button type="button" className="btn btn-link forgot-password p-0">Forgot Password?</button>
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default StudentLogin;
