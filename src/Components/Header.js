import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <i class="fa-solid fa-people-group fa-beat me-3"></i>
          Employee Management System
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header