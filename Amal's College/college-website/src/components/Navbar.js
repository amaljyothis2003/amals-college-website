import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BootstrapNavbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      expanded={expanded} 
      onToggle={setExpanded}
      fixed="top"
      className="shadow-sm"
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img 
            src="/COLLEGE LOGO.png" 
            className="logo1 me-2" 
            alt="College Logo"
            style={{ width: '45px', height: '45px' }}
          />
          <span className="fw-bold">Amal's College</span>
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)} className="me-2">Home</Nav.Link>
            <Nav.Link 
              as={Link}
              to="/library" 
              onClick={() => setExpanded(false)} 
              className="me-2"
            >
              Library
            </Nav.Link>
            <Nav.Link 
              as={Link}
              to="/login" 
              onClick={() => setExpanded(false)} 
              className="me-3"
            >
              Login
            </Nav.Link>
            
            <SearchBar onClose={() => setExpanded(false)} />
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
