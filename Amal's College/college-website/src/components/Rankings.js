import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Rankings = () => {
  const rankings = [
    {
      title: "NIRF India Ranking 2024",
      rank: "Top 50",
      category: "Universities",
      description: "Recognized for academic excellence and innovation"
    },
    {
      title: "India Today Rankings 2024",
      rank: "Top 25",
      category: "Best Colleges",
      description: "Leading institution for quality education"
    },
    {
      title: "Academic Excellence Award",
      rank: "Gold",
      category: "Education",
      description: "Outstanding contribution to higher education"
    }
  ];

  return (
    <section className="rankings-section py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Rankings & Recognition</h2>
          <p className="lead text-muted">Celebrating excellence in education and innovation</p>
        </div>
        <Row>
          {rankings.map((ranking, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm border-0 ranking-card">
                <Card.Body className="text-center p-4">
                  <div className="ranking-badge mb-3">
                    <span className="badge badge-primary fs-5">{ranking.rank}</span>
                  </div>
                  <Card.Title className="h5 mb-3">{ranking.title}</Card.Title>
                  <p className="text-muted small mb-2">{ranking.category}</p>
                  <Card.Text className="text-secondary">{ranking.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Rankings;
