import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" id="navbar" sticky="top">
      <Container className="py-2">
        <Navbar.Brand href="#" id="brand">
          <strong className="nav-text">Kasir App</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="flex-grow-0">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action1" className="nav-text">Home</Nav.Link>
            <Nav.Link href="#action2" className="nav-text">Link</Nav.Link>
            <Nav.Link href="#action3" className="nav-text">Link</Nav.Link>
            {/* <NavDropdown title="Dropdwon" id="navbarScrollingDropdown" className="text-light">
              <NavDropdown.Item href="#action3 ">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
