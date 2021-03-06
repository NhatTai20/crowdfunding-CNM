import React from 'react';
import Header from './header';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';

const Layout = (props) => {
  return (
    <Container style={{width: '100%'}}>
      <Head>
        <link
          async
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.0.3/dist/semantic.min.css"
        />
      </Head>
      <Header/>
      {props.children}
    </Container>
  )
}

export default Layout;