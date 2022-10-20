import React from 'react';
import { Container, Image, Navbar, Nav } from 'react-bootstrap';

const TopMenu = () => (
  <Container id="topMenu" fluid className="py-3">
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><Image src="/images/dukeslogo.png" width={200} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#">MENU</Nav.Link>
            <Nav.Link href="#">DUKE</Nav.Link>
            <Nav.Link href="#">SHOP</Nav.Link>
            <Nav.Link href="#">JOIN OUR TEAM</Nav.Link>
            <Nav.Link href="#">CONTACT</Nav.Link>
            <Nav.Link href="#" id="OTND">ORDER TAKEOOUT & DELIVERY</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Container>
);

export default TopMenu;
