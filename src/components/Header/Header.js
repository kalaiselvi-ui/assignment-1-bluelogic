import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsSearch } from "react-icons/bs";
import {FiVolume2} from 'react-icons/fi';
import logo from '../../images/logo.png'
import './header.css'

const Header =() => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">ABOUT US</Nav.Link>
            <Nav.Link href="#link">GLOBAL NETWORK</Nav.Link> 
            <Nav.Link href="#link">EXCELLENCE</Nav.Link>
            <Nav.Link href="#link">INNOVATION</Nav.Link>
            <Nav.Link href="#link">INVESTORS</Nav.Link>
            <Nav.Link href="#link">ASTER VOULENTEERS</Nav.Link>
            <Nav.Link href="#link">MEDIA CENTRE</Nav.Link>
            <Nav.Link href="#link">CAREERS</Nav.Link>
            <Nav.Link href="#link">CONTACT US</Nav.Link>

          </Nav>
          <Nav className="mx-auto header-icons">
              <BsSearch className="mx-2" />
              <FiVolume2 />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;