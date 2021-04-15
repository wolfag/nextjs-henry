import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

export default function NavbarMenu() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Link href='/'>
        <Navbar.Brand href='/'>My Next App</Navbar.Brand>
      </Link>
      <Nav>
        <Link href='/posts' passHref>
          <Nav.Link>Posts</Nav.Link>
        </Link>
        <Link href='/jokes' passHref>
          <Nav.Link>Jokes</Nav.Link>
        </Link>
        <Link href='/books' passHref>
          <Nav.Link>Books</Nav.Link>
        </Link>
        <Link href='/about' passHref>
          <Nav.Link>About</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  );
}
