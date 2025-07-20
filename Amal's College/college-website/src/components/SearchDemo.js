import React from 'react';
import { Container, Row, Col, Card, Badge, Alert } from 'react-bootstrap';
import { useGlobalSearch } from '../hooks/useGlobalSearch';

const SearchDemo = () => {
  const { quickSearch } = useGlobalSearch();

  const demoSearches = [
    { term: 'courses', description: 'Find all available courses and programs' },
    { term: 'library', description: 'Discover library services and resources' },
    { term: 'admissions', description: 'Get admission and registration information' },
    { term: 'faculty', description: 'Learn about faculty and staff portals' },
    { term: 'student life', description: 'Explore campus life and activities' },
    { term: 'computer science', description: 'Find CS programs and resources' }
  ];

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Search Functionality Demo</h2>
          
          <Alert variant="info" className="mb-4">
            <h5>🔍 Search Features Available:</h5>
            <ul className="mb-0">
              <li><strong>Navbar Search:</strong> Use the search bar in the top navigation</li>
              <li><strong>Hero Search:</strong> Use the prominent search bar on the home page</li>
              <li><strong>Quick Search:</strong> Press <kbd>Ctrl+K</kbd> anywhere to quickly access search</li>
              <li><strong>Smart Results:</strong> Search results are ranked by relevance and include highlighting</li>
              <li><strong>Auto Suggestions:</strong> Get search suggestions as you type</li>
            </ul>
          </Alert>

          <h4 className="mb-3">Try These Popular Searches:</h4>
          <Row>
            {demoSearches.map((demo, index) => (
              <Col md={6} lg={4} className="mb-3" key={index}>
                <Card className="h-100">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <Badge 
                        bg="primary" 
                        style={{ cursor: 'pointer' }}
                        onClick={() => quickSearch(demo.term)}
                      >
                        {demo.term}
                      </Badge>
                    </div>
                    <Card.Text className="small text-muted">
                      {demo.description}
                    </Card.Text>
                    <button 
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => quickSearch(demo.term)}
                    >
                      Search "{demo.term}"
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Alert variant="success" className="mt-4">
            <h6>Search Coverage:</h6>
            <p className="mb-0">
              The search functionality covers all major sections of the website including:
              courses, admissions, faculty information, library resources, student life, 
              campus facilities, contact information, and more. Results are displayed 
              with relevance scoring and include direct navigation to specific sections.
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchDemo;
