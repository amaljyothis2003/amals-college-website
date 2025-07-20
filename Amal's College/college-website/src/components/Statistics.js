import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Statistics = () => {
  const stats = [
    { number: "25+", label: "Academic Departments", icon: "🎓" },
    { number: "5000+", label: "Students", icon: "👨‍🎓" },
    { number: "200+", label: "Faculty Members", icon: "👩‍🏫" },
    { number: "15000+", label: "Alumni Network", icon: "🌟" },
    { number: "50+", label: "Industry Partners", icon: "🤝" },
    { number: "100000+", label: "Library Books", icon: "📚" }
  ];

  return (
    <section className="statistics-section py-5" style={{ background: '#2c3e50', color: 'white' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="text-white mb-3">Experience Amal's College</h2>
          <p className="lead text-light">Nurturing Excellence | Enriching Lives | Transforming Future</p>
        </div>
        <Row>
          {stats.map((stat, index) => (
            <Col lg={2} md={4} sm={6} key={index} className="mb-4">
              <div className="text-center stat-item">
                <div className="stat-icon mb-2" style={{ fontSize: '2rem' }}>
                  {stat.icon}
                </div>
                <h3 className="stat-number text-warning mb-2">{stat.number}</h3>
                <p className="stat-label text-light">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Statistics;
