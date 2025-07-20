import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Nav, Tab, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success');
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    religion: '',
    caste: '',
    bloodGroup: '',
    maritalStatus: '',
    email: '',
    phone: '',
    alternatePhone: '',
    // Address Information
    permanentAddress: '',
    permanentCity: '',
    permanentState: '',
    permanentPincode: '',
    permanentCountry: '',
    currentAddress: '',
    currentCity: '',
    currentState: '',
    currentPincode: '',
    currentCountry: '',
    sameAsPermanent: false,
    // Education Details
    tenthBoard: '',
    tenthSchool: '',
    tenthYear: '',
    tenthPercentage: '',
    tenthMarksheet: null,
    twelfthBoard: '',
    twelfthSchool: '',
    twelfthYear: '',
    twelfthPercentage: '',
    twelfthMarksheet: null,
    graduationUniversity: '',
    graduationCollege: '',
    graduationDegree: '',
    graduationYear: '',
    graduationPercentage: '',
    graduationMarksheet: null,
    // Family Information
    fatherName: '',
    fatherOccupation: '',
    fatherPhone: '',
    fatherEmail: '',
    motherName: '',
    motherOccupation: '',
    motherPhone: '',
    motherEmail: '',
    guardianName: '',
    guardianRelation: '',
    guardianPhone: '',
    emergencyContact: '',
    familyIncome: '',
    // Course & Preferences
    preferredCourse: '',
    secondPreference: '',
    thirdPreference: '',
    admissionType: '',
    scholarshipRequired: false,
    hostelRequired: false,
    transportRequired: false,
    // Documents
    photograph: null,
    signature: null,
    aadharCard: null,
    birthCertificate: null,
    incomeCertificate: null,
    casteCertificate: null
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));

    // Auto-fill current address if same as permanent
    if (name === 'sameAsPermanent' && checked) {
      setFormData(prevState => ({
        ...prevState,
        currentAddress: prevState.permanentAddress,
        currentCity: prevState.permanentCity,
        currentState: prevState.permanentState,
        currentPincode: prevState.permanentPincode,
        currentCountry: prevState.permanentCountry,
        sameAsPermanent: true
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setAlertType('success');
      setAlertMessage('Registration submitted successfully! You will receive a confirmation email with your application ID.');
      setShowAlert(true);
      setIsLoading(false);
      
      // Scroll to top to show alert
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  const validateTab = (tabKey) => {
    switch (tabKey) {
      case 'personal':
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 'address':
        return formData.permanentAddress && formData.permanentCity && formData.permanentState;
      case 'education':
        return formData.tenthBoard && formData.twelfthBoard;
      case 'family':
        return formData.fatherName && formData.motherName;
      case 'course':
        return formData.preferredCourse;
      case 'documents':
        return formData.photograph && formData.signature;
      default:
        return false;
    }
  };

  const getTabIcon = (tabKey) => {
    if (validateTab(tabKey)) {
      return <i className="fas fa-check-circle text-success me-2"></i>;
    }
    return <i className="fas fa-circle text-muted me-2"></i>;
  };

  return (
    <div className="registration-page">
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
            <h1>CANDIDATE REGISTRATION</h1>
            <h3>Apply for admission to Amal's College</h3>
          </div>
        </div>
      </div>

      {/* Registration Form Section */}
      <div className="registration-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} xl={9}>
              <div className="registration-box">
                <div className="text-center mb-4">
                  <h2>
                    <i className="fas fa-user-plus me-2"></i>
                    Admission Registration Form
                  </h2>
                  <p className="text-muted">Please fill all the required information carefully</p>
                </div>

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
                  <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                    <Nav variant="pills" className="registration-tabs mb-4">
                      <Nav.Item>
                        <Nav.Link eventKey="personal">
                          {getTabIcon('personal')}
                          Personal Info
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="address">
                          {getTabIcon('address')}
                          Address
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="education">
                          {getTabIcon('education')}
                          Education
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="family">
                          {getTabIcon('family')}
                          Family Info
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="course">
                          {getTabIcon('course')}
                          Course & Preferences
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="documents">
                          {getTabIcon('documents')}
                          Documents
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content>
                      {/* Personal Information Tab */}
                      <Tab.Pane eventKey="personal">
                        <Card className="form-card">
                          <Card.Header>
                            <h4><i className="fas fa-user me-2"></i>Personal Information</h4>
                          </Card.Header>
                          <Card.Body>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>First Name *</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Last Name *</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Date of Birth *</Form.Label>
                                  <Form.Control
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Gender *</Form.Label>
                                  <Form.Select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                    required
                                  >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Nationality</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleInputChange}
                                    placeholder="e.g., Indian"
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Religion</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="religion"
                                    value={formData.religion}
                                    onChange={handleInputChange}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={4}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Caste</Form.Label>
                                  <Form.Select
                                    name="caste"
                                    value={formData.caste}
                                    onChange={handleInputChange}
                                  >
                                    <option value="">Select Category</option>
                                    <option value="general">General</option>
                                    <option value="obc">OBC</option>
                                    <option value="sc">SC</option>
                                    <option value="st">ST</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md={4}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Blood Group</Form.Label>
                                  <Form.Select
                                    name="bloodGroup"
                                    value={formData.bloodGroup}
                                    onChange={handleInputChange}
                                  >
                                    <option value="">Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md={4}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Marital Status</Form.Label>
                                  <Form.Select
                                    name="maritalStatus"
                                    value={formData.maritalStatus}
                                    onChange={handleInputChange}
                                  >
                                    <option value="">Select Status</option>
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Email Address *</Form.Label>
                                  <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Phone Number *</Form.Label>
                                  <Form.Control
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Alternate Phone Number</Form.Label>
                                  <Form.Control
                                    type="tel"
                                    name="alternatePhone"
                                    value={formData.alternatePhone}
                                    onChange={handleInputChange}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Tab.Pane>

                      {/* Address Information Tab */}
                      <Tab.Pane eventKey="address">
                        <Card className="form-card">
                          <Card.Header>
                            <h4><i className="fas fa-home me-2"></i>Address Information</h4>
                          </Card.Header>
                          <Card.Body>
                            <h5 className="mb-3">Permanent Address</h5>
                            <Row>
                              <Col md={12}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Address *</Form.Label>
                                  <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="permanentAddress"
                                    value={formData.permanentAddress}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>City *</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="permanentCity"
                                    value={formData.permanentCity}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>State *</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="permanentState"
                                    value={formData.permanentState}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Pincode</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="permanentPincode"
                                    value={formData.permanentPincode}
                                    onChange={handleInputChange}
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Country</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="permanentCountry"
                                    value={formData.permanentCountry}
                                    onChange={handleInputChange}
                                    placeholder="e.g., India"
                                  />
                                </Form.Group>
                              </Col>
                            </Row>

                            <hr className="my-4" />

                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <h5 className="mb-0">Current Address</h5>
                              <Form.Check
                                type="checkbox"
                                id="sameAsPermanent"
                                name="sameAsPermanent"
                                label="Same as permanent address"
                                checked={formData.sameAsPermanent}
                                onChange={handleInputChange}
                              />
                            </div>
                            
                            <Row>
                              <Col md={12}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Address</Form.Label>
                                  <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="currentAddress"
                                    value={formData.currentAddress}
                                    onChange={handleInputChange}
                                    disabled={formData.sameAsPermanent}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>City</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="currentCity"
                                    value={formData.currentCity}
                                    onChange={handleInputChange}
                                    disabled={formData.sameAsPermanent}
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>State</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="currentState"
                                    value={formData.currentState}
                                    onChange={handleInputChange}
                                    disabled={formData.sameAsPermanent}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Pincode</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="currentPincode"
                                    value={formData.currentPincode}
                                    onChange={handleInputChange}
                                    disabled={formData.sameAsPermanent}
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Country</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="currentCountry"
                                    value={formData.currentCountry}
                                    onChange={handleInputChange}
                                    disabled={formData.sameAsPermanent}
                                    placeholder="e.g., India"
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Tab.Pane>

                      {/* Education Details Tab */}
                      <Tab.Pane eventKey="education">
                        <Card className="form-card">
                          <Card.Header>
                            <h4><i className="fas fa-graduation-cap me-2"></i>Education Details</h4>
                          </Card.Header>
                          <Card.Body>
                            <h5 className="mb-3">10th Standard</h5>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Board *</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="tenthBoard"
                                    value={formData.tenthBoard}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="e.g., CBSE, State Board"
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>School Name *</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="tenthSchool"
                                    value={formData.tenthSchool}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Year of Passing *</Form.Label>
                                  <Form.Control
                                    type="number"
                                    name="tenthYear"
                                    value={formData.tenthYear}
                                    onChange={handleInputChange}
                                    required
                                    min="1990"
                                    max="2025"
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Percentage/CGPA *</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="tenthPercentage"
                                    value={formData.tenthPercentage}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="e.g., 85% or 8.5 CGPA"
                                  />
                                </Form.Group>
                              </Col>
                            </Row>

                            <hr className="my-4" />

                            <h5 className="mb-3">12th Standard/Diploma</h5>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Board/University *</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="twelfthBoard"
                                    value={formData.twelfthBoard}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="e.g., CBSE, State Board"
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>School/College Name *</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="twelfthSchool"
                                    value={formData.twelfthSchool}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Year of Passing *</Form.Label>
                                  <Form.Control
                                    type="number"
                                    name="twelfthYear"
                                    value={formData.twelfthYear}
                                    onChange={handleInputChange}
                                    required
                                    min="1990"
                                    max="2025"
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Percentage/CGPA *</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="twelfthPercentage"
                                    value={formData.twelfthPercentage}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="e.g., 85% or 8.5 CGPA"
                                  />
                                </Form.Group>
                              </Col>
                            </Row>

                            <hr className="my-4" />

                            <h5 className="mb-3">Graduation (if applicable)</h5>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>University</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="graduationUniversity"
                                    value={formData.graduationUniversity}
                                    onChange={handleInputChange}
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>College Name</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="graduationCollege"
                                    value={formData.graduationCollege}
                                    onChange={handleInputChange}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Degree</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="graduationDegree"
                                    value={formData.graduationDegree}
                                    onChange={handleInputChange}
                                    placeholder="e.g., B.Com, B.Sc, B.A"
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Year of Passing</Form.Label>
                                  <Form.Control
                                    type="number"
                                    name="graduationYear"
                                    value={formData.graduationYear}
                                    onChange={handleInputChange}
                                    min="1990"
                                    max="2025"
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Percentage/CGPA</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="graduationPercentage"
                                    value={formData.graduationPercentage}
                                    onChange={handleInputChange}
                                    placeholder="e.g., 85% or 8.5 CGPA"
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Tab.Pane>

                      {/* Family Information Tab */}
                      <Tab.Pane eventKey="family">
                        <Card className="form-card">
                          <Card.Header>
                            <h4><i className="fas fa-users me-2"></i>Family Information</h4>
                          </Card.Header>
                          <Card.Body>
                            <h5 className="mb-3">Father's Details</h5>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Father's Name *</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="fatherName"
                                    value={formData.fatherName}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Occupation</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="fatherOccupation"
                                    value={formData.fatherOccupation}
                                    onChange={handleInputChange}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Phone Number</Form.Label>
                                  <Form.Control
                                    type="tel"
                                    name="fatherPhone"
                                    value={formData.fatherPhone}
                                    onChange={handleInputChange}
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Email</Form.Label>
                                  <Form.Control
                                    type="email"
                                    name="fatherEmail"
                                    value={formData.fatherEmail}
                                    onChange={handleInputChange}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>

                            <h5 className="mb-3 mt-4">Mother's Details</h5>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Mother's Name *</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="motherName"
                                    value={formData.motherName}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Occupation</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="motherOccupation"
                                    value={formData.motherOccupation}
                                    onChange={handleInputChange}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Phone Number</Form.Label>
                                  <Form.Control
                                    type="tel"
                                    name="motherPhone"
                                    value={formData.motherPhone}
                                    onChange={handleInputChange}
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Email</Form.Label>
                                  <Form.Control
                                    type="email"
                                    name="motherEmail"
                                    value={formData.motherEmail}
                                    onChange={handleInputChange}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>

                            <h5 className="mb-3 mt-4">Guardian/Emergency Contact</h5>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Guardian Name</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="guardianName"
                                    value={formData.guardianName}
                                    onChange={handleInputChange}
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Relation</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="guardianRelation"
                                    value={formData.guardianRelation}
                                    onChange={handleInputChange}
                                    placeholder="e.g., Uncle, Aunt"
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Guardian Phone</Form.Label>
                                  <Form.Control
                                    type="tel"
                                    name="guardianPhone"
                                    value={formData.guardianPhone}
                                    onChange={handleInputChange}
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Emergency Contact</Form.Label>
                                  <Form.Control
                                    type="tel"
                                    name="emergencyContact"
                                    value={formData.emergencyContact}
                                    onChange={handleInputChange}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Annual Family Income</Form.Label>
                                  <Form.Select
                                    name="familyIncome"
                                    value={formData.familyIncome}
                                    onChange={handleInputChange}
                                  >
                                    <option value="">Select Income Range</option>
                                    <option value="below-1lakh">Below ₹1 Lakh</option>
                                    <option value="1-3lakh">₹1 - 3 Lakhs</option>
                                    <option value="3-5lakh">₹3 - 5 Lakhs</option>
                                    <option value="5-10lakh">₹5 - 10 Lakhs</option>
                                    <option value="above-10lakh">Above ₹10 Lakhs</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Tab.Pane>

                      {/* Course & Preferences Tab */}
                      <Tab.Pane eventKey="course">
                        <Card className="form-card">
                          <Card.Header>
                            <h4><i className="fas fa-book me-2"></i>Course & Preferences</h4>
                          </Card.Header>
                          <Card.Body>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Preferred Course *</Form.Label>
                                  <Form.Select
                                    name="preferredCourse"
                                    value={formData.preferredCourse}
                                    onChange={handleInputChange}
                                    required
                                  >
                                    <option value="">Select Course</option>
                                    <option value="btech-cse">B.Tech Computer Science</option>
                                    <option value="btech-ece">B.Tech Electronics</option>
                                    <option value="btech-me">B.Tech Mechanical</option>
                                    <option value="btech-ce">B.Tech Civil</option>
                                    <option value="bba">BBA</option>
                                    <option value="bcom">B.Com</option>
                                    <option value="bsc-cs">B.Sc Computer Science</option>
                                    <option value="bsc-maths">B.Sc Mathematics</option>
                                    <option value="ba-english">B.A English</option>
                                    <option value="mtech-cse">M.Tech Computer Science</option>
                                    <option value="mba">MBA</option>
                                    <option value="mcom">M.Com</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Second Preference</Form.Label>
                                  <Form.Select
                                    name="secondPreference"
                                    value={formData.secondPreference}
                                    onChange={handleInputChange}
                                  >
                                    <option value="">Select Course</option>
                                    <option value="btech-cse">B.Tech Computer Science</option>
                                    <option value="btech-ece">B.Tech Electronics</option>
                                    <option value="btech-me">B.Tech Mechanical</option>
                                    <option value="btech-ce">B.Tech Civil</option>
                                    <option value="bba">BBA</option>
                                    <option value="bcom">B.Com</option>
                                    <option value="bsc-cs">B.Sc Computer Science</option>
                                    <option value="bsc-maths">B.Sc Mathematics</option>
                                    <option value="ba-english">B.A English</option>
                                    <option value="mtech-cse">M.Tech Computer Science</option>
                                    <option value="mba">MBA</option>
                                    <option value="mcom">M.Com</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Third Preference</Form.Label>
                                  <Form.Select
                                    name="thirdPreference"
                                    value={formData.thirdPreference}
                                    onChange={handleInputChange}
                                  >
                                    <option value="">Select Course</option>
                                    <option value="btech-cse">B.Tech Computer Science</option>
                                    <option value="btech-ece">B.Tech Electronics</option>
                                    <option value="btech-me">B.Tech Mechanical</option>
                                    <option value="btech-ce">B.Tech Civil</option>
                                    <option value="bba">BBA</option>
                                    <option value="bcom">B.Com</option>
                                    <option value="bsc-cs">B.Sc Computer Science</option>
                                    <option value="bsc-maths">B.Sc Mathematics</option>
                                    <option value="ba-english">B.A English</option>
                                    <option value="mtech-cse">M.Tech Computer Science</option>
                                    <option value="mba">MBA</option>
                                    <option value="mcom">M.Com</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Admission Type</Form.Label>
                                  <Form.Select
                                    name="admissionType"
                                    value={formData.admissionType}
                                    onChange={handleInputChange}
                                  >
                                    <option value="">Select Type</option>
                                    <option value="regular">Regular</option>
                                    <option value="management">Management Quota</option>
                                    <option value="nri">NRI Quota</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                            </Row>

                            <h5 className="mb-3 mt-4">Additional Services</h5>
                            <Row>
                              <Col md={4}>
                                <Form.Check
                                  type="checkbox"
                                  id="scholarshipRequired"
                                  name="scholarshipRequired"
                                  label="Scholarship Required"
                                  checked={formData.scholarshipRequired}
                                  onChange={handleInputChange}
                                  className="mb-3"
                                />
                              </Col>
                              <Col md={4}>
                                <Form.Check
                                  type="checkbox"
                                  id="hostelRequired"
                                  name="hostelRequired"
                                  label="Hostel Accommodation"
                                  checked={formData.hostelRequired}
                                  onChange={handleInputChange}
                                  className="mb-3"
                                />
                              </Col>
                              <Col md={4}>
                                <Form.Check
                                  type="checkbox"
                                  id="transportRequired"
                                  name="transportRequired"
                                  label="Bus Transport"
                                  checked={formData.transportRequired}
                                  onChange={handleInputChange}
                                  className="mb-3"
                                />
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Tab.Pane>

                      {/* Documents Tab */}
                      <Tab.Pane eventKey="documents">
                        <Card className="form-card">
                          <Card.Header>
                            <h4><i className="fas fa-file-upload me-2"></i>Document Upload</h4>
                          </Card.Header>
                          <Card.Body>
                            <div className="alert alert-info">
                              <i className="fas fa-info-circle me-2"></i>
                              Please upload clear, scanned copies of all documents. Maximum file size: 2MB per file.
                            </div>
                            
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Photograph *</Form.Label>
                                  <Form.Control
                                    type="file"
                                    name="photograph"
                                    onChange={handleInputChange}
                                    accept="image/*"
                                    required
                                  />
                                  <Form.Text className="text-muted">
                                    Passport size photograph (JPG/PNG)
                                  </Form.Text>
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Signature *</Form.Label>
                                  <Form.Control
                                    type="file"
                                    name="signature"
                                    onChange={handleInputChange}
                                    accept="image/*"
                                    required
                                  />
                                  <Form.Text className="text-muted">
                                    Clear signature (JPG/PNG)
                                  </Form.Text>
                                </Form.Group>
                              </Col>
                            </Row>
                            
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Aadhar Card</Form.Label>
                                  <Form.Control
                                    type="file"
                                    name="aadharCard"
                                    onChange={handleInputChange}
                                    accept="image/*,.pdf"
                                  />
                                  <Form.Text className="text-muted">
                                    Both sides of Aadhar card
                                  </Form.Text>
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Birth Certificate</Form.Label>
                                  <Form.Control
                                    type="file"
                                    name="birthCertificate"
                                    onChange={handleInputChange}
                                    accept="image/*,.pdf"
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            
                            <Row>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Income Certificate</Form.Label>
                                  <Form.Control
                                    type="file"
                                    name="incomeCertificate"
                                    onChange={handleInputChange}
                                    accept="image/*,.pdf"
                                  />
                                  <Form.Text className="text-muted">
                                    For scholarship purposes
                                  </Form.Text>
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Caste Certificate</Form.Label>
                                  <Form.Control
                                    type="file"
                                    name="casteCertificate"
                                    onChange={handleInputChange}
                                    accept="image/*,.pdf"
                                  />
                                  <Form.Text className="text-muted">
                                    If applicable
                                  </Form.Text>
                                </Form.Group>
                              </Col>
                            </Row>
                            
                            <h5 className="mb-3 mt-4">Academic Documents</h5>
                            <Row>
                              <Col md={4}>
                                <Form.Group className="mb-3">
                                  <Form.Label>10th Marksheet</Form.Label>
                                  <Form.Control
                                    type="file"
                                    name="tenthMarksheet"
                                    onChange={handleInputChange}
                                    accept="image/*,.pdf"
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={4}>
                                <Form.Group className="mb-3">
                                  <Form.Label>12th Marksheet</Form.Label>
                                  <Form.Control
                                    type="file"
                                    name="twelfthMarksheet"
                                    onChange={handleInputChange}
                                    accept="image/*,.pdf"
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={4}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Graduation Marksheet</Form.Label>
                                  <Form.Control
                                    type="file"
                                    name="graduationMarksheet"
                                    onChange={handleInputChange}
                                    accept="image/*,.pdf"
                                  />
                                  <Form.Text className="text-muted">
                                    If applicable
                                  </Form.Text>
                                </Form.Group>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Tab.Pane>
                    </Tab.Content>

                    {/* Navigation Buttons */}
                    <div className="d-flex justify-content-between mt-4">
                      <Button 
                        variant="outline-secondary"
                        onClick={() => {
                          const tabs = ['personal', 'address', 'education', 'family', 'course', 'documents'];
                          const currentIndex = tabs.indexOf(activeTab);
                          if (currentIndex > 0) {
                            setActiveTab(tabs[currentIndex - 1]);
                          }
                        }}
                        disabled={activeTab === 'personal'}
                      >
                        <i className="fas fa-arrow-left me-2"></i>
                        Previous
                      </Button>

                      {activeTab === 'documents' ? (
                        <Button 
                          type="submit" 
                          variant="success"
                          disabled={isLoading}
                          size="lg"
                        >
                          {isLoading ? (
                            <>
                              <i className="fas fa-spinner fa-spin me-2"></i>
                              Submitting...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-paper-plane me-2"></i>
                              Submit Application
                            </>
                          )}
                        </Button>
                      ) : (
                        <Button 
                          variant="primary"
                          onClick={() => {
                            const tabs = ['personal', 'address', 'education', 'family', 'course', 'documents'];
                            const currentIndex = tabs.indexOf(activeTab);
                            if (currentIndex < tabs.length - 1) {
                              setActiveTab(tabs[currentIndex + 1]);
                            }
                          }}
                        >
                          Next
                          <i className="fas fa-arrow-right ms-2"></i>
                        </Button>
                      )}
                    </div>
                  </Tab.Container>
                </Form>

                <div className="text-center mt-4">
                  <Link to="/candidate-login" className="forgot-password">
                    <i className="fas fa-arrow-left me-2"></i>
                    Back to Candidate Login
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Registration;
