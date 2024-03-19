import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home">
          <Link>
          <i class="fa-solid fa-video fa-beat text-warning"></i>
           {' '}
            Video Player 

          </Link>
            
            
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header