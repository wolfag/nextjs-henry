import Head from 'next/head';

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavbarMenu from './NavbarMenu';

function Layout({ children }) {
  return (
    <Container>
      <Head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
        <title>My Next app</title>
      </Head>
      <header>
        <NavbarMenu />
      </header>
      <main>{children}</main>
    </Container>
  );
}

export default Layout;
