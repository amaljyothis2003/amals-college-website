import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const SecondaryNavbar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="secondary-navbar">
      <Container>
        <Nav className="mx-auto">
          <NavDropdown title="Explore" id="explore-dropdown" className="mx-2">
            <NavDropdown.Item href="#about">About</NavDropdown.Item>
            <NavDropdown.Item href="#courses">Courses</NavDropdown.Item>
            <NavDropdown.Item href="#student-life">Student Life</NavDropdown.Item>
            <NavDropdown.Item href="#alumni">Alumni</NavDropdown.Item>
            <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
          </NavDropdown>
          
          <Nav.Link href="#about" className="mx-2">About</Nav.Link>
          <Nav.Link href="#courses" className="mx-2">Courses</Nav.Link>
          <Nav.Link href="#student-life" className="mx-2">Student Life</Nav.Link>
          <Nav.Link href="#alumni" className="mx-2">Alumni</Nav.Link>
          <Nav.Link href="#contact" className="mx-2">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default SecondaryNavbar;
