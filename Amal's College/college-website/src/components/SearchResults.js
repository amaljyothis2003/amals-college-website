import React from 'react';
import { Container, Row, Col, Card, Badge, Spinner, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';

const SearchResults = () => {
  const { searchQuery, searchResults, isSearching, setSearchQuery, performSearch } = useSearch();
  const navigate = useNavigate();

  const handlePopularSearch = (term) => {
    setSearchQuery(term);
    performSearch(term);
  };

  const handleResultClick = (result) => {
    if (result.page === '/') {
      // For home page sections, navigate to home and scroll to section
      navigate('/');
      setTimeout(() => {
        if (result.section) {
          const element = document.querySelector(result.section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
      // For other pages, navigate directly
      navigate(result.page);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'About': 'primary',
      'Courses': 'success',
      'Campus': 'info',
      'Student Life': 'warning',
      'Services': 'secondary',
      'Admissions': 'danger',
      'Library': 'dark',
      'Contact': 'light',
      'Alumni': 'primary'
    };
    return colors[category] || 'secondary';
  };

  const highlightText = (text, query) => {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} style={{ backgroundColor: '#fff3cd', padding: '0 2px' }}>
          {part}
        </mark>
      ) : part
    );
  };

  return (
    <div className="search-results-page" style={{ marginTop: '120px', minHeight: '70vh' }}>
      <Container>
        <Row>
          <Col>
            <div className="search-header mb-4">
              <h2>Search Results</h2>
              {searchQuery && (
                <p className="text-muted">
                  {isSearching ? 'Searching...' : `Results for "${searchQuery}"`}
                  {!isSearching && ` (${searchResults.length} found)`}
                </p>
              )}
            </div>

            {isSearching && (
              <div className="text-center my-5">
                <Spinner animation="border" variant="primary" />
                <p className="mt-2">Searching...</p>
              </div>
            )}

            {!isSearching && searchQuery && searchResults.length === 0 && (
              <Alert variant="info">
                <h5>No results found</h5>
                <p>
                  We couldn't find any results for "{searchQuery}". 
                  Try using different keywords or check your spelling.
                </p>
                <hr />
                <p className="mb-0">
                  <strong>Search tips:</strong>
                  <br />
                  • Try broader terms (e.g., "course" instead of "specific course name")
                  <br />
                  • Check spelling and try different keywords
                  <br />
                  • Search for categories like "admissions", "library", "faculty"
                </p>
              </Alert>
            )}

            {!isSearching && searchResults.length > 0 && (
              <Row>
                {searchResults.map((result) => (
                  <Col md={6} lg={4} className="mb-4" key={result.id}>
                    <Card 
                      className="h-100 search-result-card" 
                      style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                      onClick={() => handleResultClick(result)}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <Badge bg={getCategoryColor(result.category)} className="mb-2">
                            {result.category}
                          </Badge>
                        </div>
                        
                        <Card.Title className="h5">
                          {highlightText(result.title, searchQuery)}
                        </Card.Title>
                        
                        <Card.Text className="text-muted small">
                          {highlightText(
                            result.content.length > 150 
                              ? result.content.substring(0, 150) + '...' 
                              : result.content,
                            searchQuery
                          )}
                        </Card.Text>
                        
                        <div className="mt-auto">
                          <small className="text-primary">
                            {result.page === '/' ? 'Home Page' : result.page.replace('/', '').replace('-', ' ').toUpperCase()}
                            {result.section && ` → ${result.section.replace('#', '').replace('-', ' ').toUpperCase()}`}
                          </small>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}

            {!searchQuery && (
              <div className="text-center my-5">
                <h4>Welcome to Search</h4>
                <p className="text-muted">
                  Use the search box in the navigation bar to find information about courses, 
                  admissions, faculty, library resources, and more.
                </p>
                <div className="mt-4">
                  <h6>Popular searches:</h6>
                  <div className="mt-2">
                    {['courses', 'admissions', 'library', 'faculty', 'student life', 'contact'].map((term) => (
                      <Badge 
                        key={term}
                        bg="outline-primary" 
                        className="me-2 mb-2"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handlePopularSearch(term)}
                      >
                        {term}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchResults;
