import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CandidateLogin = () => {
  const [formData, setFormData] = useState({
    candidateId: '',
    password: '',
    rememberMe: false
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (formData.candidateId && formData.password) {
        setAlertType('success');
        setAlertMessage('Login successful! Welcome to the candidate portal.');
        setShowAlert(true);
      } else {
        setAlertType('danger');
        setAlertMessage('Please fill in all required fields.');
        setShowAlert(true);
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleForgotPassword = () => {
    setAlertType('info');
    setAlertMessage('Password reset link has been sent to your registered email.');
    setShowAlert(true);
  };

  return (
    <div className="candidate-login-page">
      {/* Hero Section */}
      <div className="hero-container">
        <video className="video" autoPlay muted loop>
          <source src="/BANNER.mp4" type="video/mp4" />
        </video>
        <div className="hero">
          <div className="lefthero">
            <img src="/COLLEGE LOGO.png" className="logo2" alt="College Logo" />
          </div>
          <div className="text">
            <h1>CANDIDATE PORTAL</h1>
            <h3>Access your application status and admission details</h3>
          </div>
        </div>
      </div>

      {/* Login Section */}
      <div className="login-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} lg={5} xl={4}>
              <div className="login-box">
                <h2>
                  <i className="fas fa-user-graduate me-2"></i>
                  Candidate Login
                </h2>

                {showAlert && (
                  <Alert 
                    variant={alertType} 
                    dismissible 
                    onClose={() => setShowAlert(false)}
                    className="mb-4"
                  >
                    {alertMessage}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="candidateId">
                      <i className="fas fa-id-card me-2"></i>
                      Candidate ID
                    </label>
                    <Form.Control
                      type="text"
                      id="candidateId"
                      name="candidateId"
                      placeholder="Enter your Candidate ID"
                      value={formData.candidateId}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="password">
                      <i className="fas fa-lock me-2"></i>
                      Password
                    </label>
                    <Form.Control
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <Form.Check
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      label="Remember me"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-primary w-100 mb-3"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <i className="fas fa-spinner fa-spin me-2"></i>
                        Signing In...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-sign-in-alt me-2"></i>
                        Sign In
                      </>
                    )}
                  </Button>

                  <div className="text-center">
                    <button
                      type="button"
                      className="forgot-password"
                      onClick={handleForgotPassword}
                    >
                      Forgot your password?
                    </button>
                  </div>

                  <hr className="my-4" />

                  <div className="text-center">
                    <p className="mb-2">
                      <small>New candidate?</small>
                    </p>
                    <Link to="/register" className="forgot-password">
                      Register for Admission
                    </Link>
                  </div>

                  <div className="text-center mt-3">
                    <Link to="/login" className="forgot-password">
                      <i className="fas fa-arrow-left me-2"></i>
                      Back to Main Login
                    </Link>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CandidateLogin;
