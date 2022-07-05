import React, { useState } from "react";
import {
  Button,
  Nav,
  Navbar,
  NavbarBrand,
  Container,
  Modal,
  ModalHeader,
  ModalTitle,
  Form,
  FormGroup,
  FormControl,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";

export default function NaviBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="dark"
        variant="dark"
        style={{ fontWeight: "500", height: "70px" }}
        className="bg-gradient-dark"
      >
        <Container>
          <NavbarBrand>My site</NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav"></NavbarToggle>
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/users">
                Users
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <Button variant="primary" className="me-2" onClick={handleShow}>
                Log in
              </Button>
              <div className="vr" />
              <Button variant="primary" onClick={handleShow}>
                Registration
              </Button>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle>Log In</ModalTitle>
        </ModalHeader>
        <Modal.Body>
          <Form>
            <FormGroup controlId="fromBasicEmail">
              <Form.Label>Email Adress</Form.Label>
              <FormControl type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We`ll never share your email
              </Form.Text>
            </FormGroup>
            <FormGroup controlId="fromBasicPassword">
              <Form.Label>Password</Form.Label>
              <FormControl type="email" placeholder="Enter password" />
            </FormGroup>
            <FormGroup controlId="fromBasicCheckbox" className="mt-3">
              <Form.Check type="checkbox" label="remember me" />
            </FormGroup>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
