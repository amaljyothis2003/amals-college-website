import React, { useState } from 'react';
import { Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';

const HeroSection = () => {
  const [heroSearchQuery, setHeroSearchQuery] = useState('');
  const { setSearchQuery, performSearch } = useSearch();
  const navigate = useNavigate();

  const handleHeroSearch = (e) => {
    e.preventDefault();
    if (heroSearchQuery.trim()) {
      setSearchQuery(heroSearchQuery);
      performSearch(heroSearchQuery);
      navigate('/search');
    }
  };

  return (
    <div className="hero-container">
      <video src="/BANNER.mp4" autoPlay muted loop className="video"></video>
      <div className="hero">
        <div className="lefthero">
          <img src="/COLLEGE LOGO.png" className="logo2" alt="College Logo" />
        </div>
        <div className="text">
          <h1>WELCOME TO AMAL'S COLLEGE</h1>
          <h3>"Your gateway to quality education"</h3>
          
          {/* Hero Search Bar */}
          <Container className="mt-4">
            <Row className="justify-content-center">
              <Col md={8} lg={6}>
                <Form onSubmit={handleHeroSearch} className="hero-search-form">
                  <div className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search courses, admissions, faculty..."
                      value={heroSearchQuery}
                      onChange={(e) => setHeroSearchQuery(e.target.value)}
                      className="hero-search-input"
                      style={{
                        borderRadius: '25px 0 0 25px',
                        border: 'none',
                        padding: '12px 20px',
                        fontSize: '16px',
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)'
                      }}
                    />
                    <Button 
                      type="submit" 
                      variant="primary"
                      style={{
                        borderRadius: '0 25px 25px 0',
                        border: 'none',
                        padding: '12px 24px',
                        background: 'linear-gradient(45deg, #007bff, #0056b3)',
                        fontWeight: '600'
                      }}
                    >
                      Search
                    </Button>
                  </div>
                  <div className="mt-2 text-center">
                    <small style={{ 
                      color: 'rgba(255, 255, 255, 0.8)', 
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                      fontSize: '14px'
                    }}>
                      Press Ctrl+K for quick search anywhere on the site
                    </small>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
