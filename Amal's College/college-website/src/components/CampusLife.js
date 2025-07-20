import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const CampusLife = () => {
  const campusActivities = [
    {
      title: "Sports & Games",
      description: "State-of-the-art sports facilities including basketball, cricket, football, and indoor games.",
      image: "/Sports.jpeg",
      link: "#sports"
    },
    {
      title: "Cultural Events",
      description: "Annual festivals, cultural programs, and talent shows that celebrate diversity.",
      image: "/Events.jpeg",
      link: "#events"
    },
    {
      title: "Student Clubs",
      description: "Various clubs and societies for academic, cultural, and social activities.",
      image: "/CLUBS.jpeg",
      link: "#clubs"
    },
    {
      title: "Library & Research",
      description: "Modern library with extensive collection and research facilities.",
      image: "/Library.css",
      link: "#library"
    }
  ];

  return (
    <section className="campus-life-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Campus Life</h2>
          <p className="lead text-muted">Experience vibrant campus life with endless opportunities</p>
        </div>
        <Row>
          {campusActivities.map((activity, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <Card className="h-100 campus-card border-0 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={activity.image} 
                  alt={activity.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h5 mb-3">{activity.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">{activity.description}</Card.Text>
                  <Button variant="outline-primary" size="sm" href={activity.link}>
                    Explore More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CampusLife;
