import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Card, Badge, Spinner, Alert, InputGroup } from 'react-bootstrap';

const Library = () => {
  const [booklist, setBooklist] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortOption, setSortOption] = useState('rank-asc');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalBooks, setTotalBooks] = useState(0);
  const itemsPerPage = viewMode === 'grid' ? 6 : 4;

  // Get unique authors for filter dropdown
  const getUniqueAuthors = () => {
    const authors = new Set(booklist.map(book => book.author));
    return Array.from(authors).sort();
  };

  // Get unique publishers for filter dropdown
  const getUniquePublishers = () => {
    const publishers = new Set(booklist.map(book => book.publisher));
    return Array.from(publishers).sort();
  };

  // Format publication date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Get bestseller status badge
  const getBestsellerBadge = (rank, weeksOnList) => {
    if (rank === 1) return { text: '#1 Bestseller', variant: 'warning' };
    if (rank <= 5) return { text: 'Top 5', variant: 'success' };
    if (rank <= 10) return { text: 'Top 10', variant: 'primary' };
    return { text: `Rank ${rank}`, variant: 'secondary' };
  };

  // Fetch books from NYTimes API with enhanced error handling
  const fetchBooks = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-fiction.json?api-key=QTd4H7HDVpLKhqIqtV42NmAthrt8ub4b');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.results && data.results.books) {
        setBooklist(data.results.books);
        setFilteredBooks(data.results.books);
        setTotalBooks(data.results.books.length);
      } else {
        throw new Error('Invalid data structure received from API');
      }
    } catch (error) {
      console.error('Error fetching books:', error);
      setError(`Failed to fetch books: ${error.message}`);
      setBooklist([]);
      setFilteredBooks([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Enhanced filter and sort books
  useEffect(() => {
    let filtered = booklist
      .filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter(book => selectedAuthor === '' || book.author === selectedAuthor);

    // Sort books with more options
    switch (sortOption) {
      case 'title-asc':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'author-asc':
        filtered.sort((a, b) => a.author.localeCompare(b.author));
        break;
      case 'author-desc':
        filtered.sort((a, b) => b.author.localeCompare(a.author));
        break;
      case 'rank-asc':
        filtered.sort((a, b) => a.rank - b.rank);
        break;
      case 'rank-desc':
        filtered.sort((a, b) => b.rank - a.rank);
        break;
      case 'weeks-asc':
        filtered.sort((a, b) => (a.weeks_on_list || 0) - (b.weeks_on_list || 0));
        break;
      case 'weeks-desc':
        filtered.sort((a, b) => (b.weeks_on_list || 0) - (a.weeks_on_list || 0));
        break;
      default:
        break;
    }

    setFilteredBooks(filtered);
    setCurrentPage(1);
  }, [booklist, searchTerm, selectedAuthor, sortOption]);

  // Load books automatically on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  // Get books for current page
  const getCurrentPageBooks = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredBooks.slice(startIndex, endIndex);
  };

  // Get total pages
  const getTotalPages = () => {
    return Math.ceil(filteredBooks.length / itemsPerPage);
  };

  // Enhanced pagination with more controls
  const renderPagination = () => {
    const totalPages = getTotalPages();
    if (totalPages <= 1) return null;

    const buttons = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Previous button
    if (currentPage > 1) {
      buttons.push(
        <Button
          key="prev"
          variant="outline-primary"
          className="me-2 mb-2 pagination-btn"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <i className="fas fa-chevron-left"></i> Previous
        </Button>
      );
    }

    // First page
    if (startPage > 1) {
      buttons.push(
        <Button
          key={1}
          variant="outline-primary"
          className="me-2 mb-2 pagination-btn"
          onClick={() => setCurrentPage(1)}
        >
          1
        </Button>
      );
      if (startPage > 2) {
        buttons.push(<span key="dots1" className="pagination-dots">...</span>);
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          key={i}
          variant={currentPage === i ? 'primary' : 'outline-primary'}
          className="me-2 mb-2 pagination-btn"
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </Button>
      );
    }

    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(<span key="dots2" className="pagination-dots">...</span>);
      }
      buttons.push(
        <Button
          key={totalPages}
          variant="outline-primary"
          className="me-2 mb-2 pagination-btn"
          onClick={() => setCurrentPage(totalPages)}
        >
          {totalPages}
        </Button>
      );
    }

    // Next button
    if (currentPage < totalPages) {
      buttons.push(
        <Button
          key="next"
          variant="outline-primary"
          className="me-2 mb-2 pagination-btn"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next <i className="fas fa-chevron-right"></i>
        </Button>
      );
    }

    return (
      <div className="pagination-wrapper">
        <div className="pagination-info mb-3 text-center">
          Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredBooks.length)} - {Math.min(currentPage * itemsPerPage, filteredBooks.length)} of {filteredBooks.length} books
        </div>
        <div className="pagination-buttons d-flex justify-content-center align-items-center flex-wrap">
          {buttons}
        </div>
      </div>
    );
  };

  return (
    <div className="library-page">
      {/* Enhanced Hero Section */}
      <div className="hero-container">
        <video src="/BANNER.mp4" autoPlay muted loop className="video"></video>
        <div className="hero-overlay"></div>
        
        {/* Main Hero Content */}
        <div className="hero">
          <div className="lefthero">
            <img src="/COLLEGE LOGO.png" className="logo2" alt="College Logo" />
          </div>
          <div className="text">
            <h1 className="hero-title">AMAL'S COLLEGE DIGITAL LIBRARY</h1>
            <h3 className="hero-subtitle">Explore Knowledge • Discover Excellence • Achieve Greatness</h3>
            <p className="hero-description">
              Access our curated collection of bestselling books and academic resources
            </p>
          </div>
        </div>
      </div>

      {/* Main Library Content */}
      <Container fluid className="library-content">
        {/* Statistics Section */}
        <Container className="py-4">
          <Row className="library-stats mb-4">
            <Col md={3} sm={6} className="text-center mb-3">
              <div className="stat-card">
                <i className="fas fa-book stat-icon"></i>
                <h3 className="stat-number">{totalBooks}</h3>
                <p className="stat-label">Total Books</p>
              </div>
            </Col>
            <Col md={3} sm={6} className="text-center mb-3">
              <div className="stat-card">
                <i className="fas fa-filter stat-icon"></i>
                <h3 className="stat-number">{filteredBooks.length}</h3>
                <p className="stat-label">Filtered Results</p>
              </div>
            </Col>
            <Col md={3} sm={6} className="text-center mb-3">
              <div className="stat-card">
                <i className="fas fa-user-edit stat-icon"></i>
                <h3 className="stat-number">{getUniqueAuthors().length}</h3>
                <p className="stat-label">Authors</p>
              </div>
            </Col>
            <Col md={3} sm={6} className="text-center mb-3">
              <div className="stat-card">
                <i className="fas fa-eye stat-icon"></i>
                <h3 className="stat-number">{viewMode}</h3>
                <p className="stat-label">View Mode</p>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Enhanced Controls Section */}
        <Container>
          <div className="controls-section mb-5">
            <div className="controls-header mb-4">
              <h2 className="section-title">
                <i className="fas fa-search me-2"></i>
                Search & Filter Books
              </h2>
              <p className="section-subtitle">Find your next great read from our bestseller collection</p>
            </div>

            <Row className="align-items-end">
              {/* Load Books Button */}
              <Col lg={2} md={3} sm={6} className="mb-3">
                <Form.Label className="control-label">Actions</Form.Label>
                <Button 
                  variant="primary" 
                  onClick={fetchBooks} 
                  disabled={isLoading}
                  className="w-100 action-btn"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      Loading...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-download me-2"></i>
                      Load Books
                    </>
                  )}
                </Button>
              </Col>

              {/* Search Input */}
              <Col lg={3} md={4} sm={6} className="mb-3">
                <Form.Label className="control-label">Search Books</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <i className="fas fa-search"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Enter book title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                  {searchTerm && (
                    <Button 
                      variant="outline-secondary" 
                      onClick={() => setSearchTerm('')}
                      className="clear-btn"
                    >
                      <i className="fas fa-times"></i>
                    </Button>
                  )}
                </InputGroup>
              </Col>

              {/* Author Filter */}
              <Col lg={2} md={3} sm={6} className="mb-3">
                <Form.Label className="control-label">Filter by Author</Form.Label>
                <Form.Select 
                  value={selectedAuthor} 
                  onChange={(e) => setSelectedAuthor(e.target.value)}
                  className="filter-select"
                >
                  <option value="">All Authors</option>
                  {getUniqueAuthors().map((author, index) => (
                    <option key={index} value={author}>{author}</option>
                  ))}
                </Form.Select>
              </Col>

              {/* Sort Options */}
              <Col lg={2} md={3} sm={6} className="mb-3">
                <Form.Label className="control-label">Sort By</Form.Label>
                <Form.Select 
                  value={sortOption} 
                  onChange={(e) => setSortOption(e.target.value)}
                  className="sort-select"
                >
                  <option value="rank-asc">Best Rank First</option>
                  <option value="rank-desc">Worst Rank First</option>
                  <option value="title-asc">Title (A-Z)</option>
                  <option value="title-desc">Title (Z-A)</option>
                  <option value="author-asc">Author (A-Z)</option>
                  <option value="author-desc">Author (Z-A)</option>
                  <option value="weeks-desc">Most Popular</option>
                  <option value="weeks-asc">Least Popular</option>
                </Form.Select>
              </Col>

              {/* View Mode Toggle */}
              <Col lg={3} md={3} sm={6} className="mb-3">
                <Form.Label className="control-label">View Mode</Form.Label>
                <div className="view-toggle-group">
                  <Button
                    variant={viewMode === 'grid' ? 'primary' : 'outline-primary'}
                    onClick={() => setViewMode('grid')}
                    className="view-toggle-btn"
                  >
                    <i className="fas fa-th-large me-1"></i>
                    Grid
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'primary' : 'outline-primary'}
                    onClick={() => setViewMode('list')}
                    className="view-toggle-btn"
                  >
                    <i className="fas fa-list me-1"></i>
                    List
                  </Button>
                </div>
              </Col>
            </Row>
          </div>

          {/* Error Display */}
          {error && (
            <Alert variant="danger" className="mb-4" dismissible onClose={() => setError(null)}>
              <Alert.Heading>
                <i className="fas fa-exclamation-triangle me-2"></i>
                Error Loading Books
              </Alert.Heading>
              {error}
            </Alert>
          )}

          {/* Books Display Section */}
          <div className="books-section">
            <div className="books-header mb-4 d-flex justify-content-between align-items-center">
              <h2 className="section-title">
                <i className="fas fa-book-open me-2"></i>
                Featured Books
              </h2>
              {filteredBooks.length > 0 && (
                <div className="results-info">
                  <Badge bg="primary" className="results-badge">
                    {filteredBooks.length} Results
                  </Badge>
                </div>
              )}
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="loading-state text-center py-5">
                <Spinner animation="border" variant="primary" size="sm" className="me-2" />
                <span>Loading books...</span>
              </div>
            )}

            {/* Books Container */}
            {!isLoading && (
              <div className={`books-container ${viewMode === 'grid' ? 'books-grid' : 'books-list'}`}>
                {getCurrentPageBooks().map((book, index) => (
                  <div key={index} className={`book-card ${viewMode === 'grid' ? 'book-card-grid' : 'book-card-list'}`}>
                    {viewMode === 'grid' ? (
                      // Grid View
                      <Card className="h-100 book-item-modern">
                        <div className="book-image-container">
                          <Card.Img 
                            variant="top" 
                            src={book.book_image} 
                            alt={book.title}
                            className="book-cover"
                          />
                          <div className="book-overlay">
                            <Badge 
                              bg={getBestsellerBadge(book.rank).variant}
                              className="rank-badge"
                            >
                              {getBestsellerBadge(book.rank).text}
                            </Badge>
                          </div>
                        </div>
                        <Card.Body className="d-flex flex-column">
                          <Card.Title className="book-title-modern">
                            {book.title}
                          </Card.Title>
                          <Card.Text className="book-author-modern mb-2">
                            <i className="fas fa-user me-1"></i>
                            {book.author}
                          </Card.Text>
                          <Card.Text className="book-description-modern flex-grow-1">
                            {book.description?.substring(0, 120)}
                            {book.description?.length > 120 && '...'}
                          </Card.Text>
                          <div className="book-meta">
                            <small className="text-muted">
                              <i className="fas fa-building me-1"></i>
                              {book.publisher}
                            </small>
                            {book.weeks_on_list && (
                              <small className="text-muted ms-2">
                                <i className="fas fa-clock me-1"></i>
                                {book.weeks_on_list} weeks on list
                              </small>
                            )}
                          </div>
                        </Card.Body>
                      </Card>
                    ) : (
                      // List View
                      <Card className="book-item-list">
                        <Row className="g-0">
                          <Col md={2} className="book-image-col">
                            <div className="book-image-container-list">
                              <img 
                                src={book.book_image} 
                                alt={book.title}
                                className="book-cover-list"
                              />
                              <Badge 
                                bg={getBestsellerBadge(book.rank).variant}
                                className="rank-badge-list"
                              >
                                #{book.rank}
                              </Badge>
                            </div>
                          </Col>
                          <Col md={10}>
                            <Card.Body>
                              <Row>
                                <Col md={8}>
                                  <Card.Title className="book-title-list">
                                    {book.title}
                                  </Card.Title>
                                  <Card.Text className="book-author-list">
                                    <i className="fas fa-user me-2"></i>
                                    <strong>Author:</strong> {book.author}
                                  </Card.Text>
                                  <Card.Text className="book-description-list">
                                    {book.description}
                                  </Card.Text>
                                </Col>
                                <Col md={4}>
                                  <div className="book-details-list">
                                    <div className="detail-item">
                                      <i className="fas fa-trophy me-2"></i>
                                      <strong>Rank:</strong> #{book.rank}
                                    </div>
                                    <div className="detail-item">
                                      <i className="fas fa-building me-2"></i>
                                      <strong>Publisher:</strong> {book.publisher}
                                    </div>
                                    {book.weeks_on_list && (
                                      <div className="detail-item">
                                        <i className="fas fa-clock me-2"></i>
                                        <strong>Weeks on List:</strong> {book.weeks_on_list}
                                      </div>
                                    )}
                                    {book.amazon_product_url && (
                                      <div className="detail-item mt-3">
                                        <Button 
                                          variant="outline-primary" 
                                          size="sm"
                                          href={book.amazon_product_url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <i className="fas fa-external-link-alt me-1"></i>
                                          View on Amazon
                                        </Button>
                                      </div>
                                    )}
                                  </div>
                                </Col>
                              </Row>
                            </Card.Body>
                          </Col>
                        </Row>
                      </Card>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Enhanced Pagination */}
            {!isLoading && filteredBooks.length > 0 && (
              <div className="pagination-section mt-5">
                {renderPagination()}
              </div>
            )}

            {/* No Results State */}
            {!isLoading && filteredBooks.length === 0 && booklist.length > 0 && (
              <div className="no-results-state text-center py-5">
                <i className="fas fa-search fa-3x text-muted mb-3"></i>
                <h4>No Books Found</h4>
                <p className="text-muted">
                  Try adjusting your search criteria or filters to find more books.
                </p>
                <Button 
                  variant="outline-primary" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedAuthor('');
                    setSortOption('rank-asc');
                  }}
                >
                  <i className="fas fa-undo me-2"></i>
                  Clear All Filters
                </Button>
              </div>
            )}

            {/* Empty State */}
            {!isLoading && booklist.length === 0 && (
              <div className="empty-state text-center py-5">
                <i className="fas fa-book-open fa-3x text-muted mb-3"></i>
                <h4>No Books Available</h4>
                <p className="text-muted">
                  Click the "Load Books" button to fetch our latest collection of bestselling books.
                </p>
              </div>
            )}
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Library;
