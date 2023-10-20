import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import './header.css';

export default class Header extends React.Component {
  render() {
    return (
      <>
      
      
        <Navbar expand="lg" className="navback">
          <Container>
              <Nav className="me-auto">
                <NavLink
                  className="nav-link"
                  to="/"
                >
                  Home
                </NavLink>
                
               
              </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
