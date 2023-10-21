import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import CustomNavLink from "./CustomNavLink";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      data-bs-theme="dark"
      expand="md"
      className="navBar"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <div className="flexCenter">
              <img alt="logo" src="/images/logo.svg" className="navbar-icon" />
              <span>Task Master</span>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <CustomNavLink location="/">Home</CustomNavLink>
            <CustomNavLink location="/todos">Todos</CustomNavLink>
          </Nav>
          <Nav>
            <CustomNavLink location="/login">Login</CustomNavLink>
            <CustomNavLink location="/signup">Sign up</CustomNavLink>
            <a
              href="mailto:rahafsalah070@gmail.com"
              className="btn btn-primary"
            >
              Contact us
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
