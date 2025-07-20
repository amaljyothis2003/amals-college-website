import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AlumniShowcase = () => {
  const featuredAlumni = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Chief Technology Officer",
      company: "Tech Innovations Pvt Ltd",
      year: "Batch of 2010",
      image: "/Arun.jpg",
      achievement: "Leading AI research and development"
    },
    {
      name: "Ms. Priya Sharma",
      position: "Senior Manager",
      company: "Global Consulting Firm",
      year: "Batch of 2012",
      image: "/Shoun.jpeg",
      achievement: "Recognized for business excellence"
    },
    {
      name: "Mr. Arjun Patel",
      position: "Entrepreneur",
      company: "StartUp Innovations",
      year: "Batch of 2008",
      image: "/Bachelor.jpeg",
      achievement: "Founded successful tech startup"
    }
  ];

  return (
    <section className="alumni-showcase py-5" style={{ background: '#f8f9fa' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Our Proud Alumni</h2>
          <p className="lead text-muted">Success stories that inspire and motivate</p>
        </div>
        <Row>
          {featuredAlumni.map((alumni, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="alumni-card h-100 border-0 shadow-sm">
                <div className="alumni-image-wrapper text-center p-4">
                  <img 
                    src={alumni.image} 
                    alt={alumni.name}
                    className="alumni-image rounded-circle"
                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="h5 mb-2">{alumni.name}</Card.Title>
                  <p className="text-primary mb-1">{alumni.position}</p>
                  <p className="text-muted small mb-2">{alumni.company}</p>
                  <p className="text-secondary small mb-3">{alumni.year}</p>
                  <Card.Text className="text-muted">{alumni.achievement}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AlumniShowcase;
