import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Nav from '../components/Nav';

import './Layout.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';

export default () => (
  <div>
    <Head>
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>

    <Nav>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

    </Nav>

    <h1>test</h1>
    <button type="button" className="btn btn-primary">
      Primary
    </button>
    <button type="button" className="btn btn-secondary">
      Secondary
    </button>
    <button type="button" className="btn btn-success">
      Success
    </button>
    <button type="button" className="btn btn-danger">
      Danger
    </button>
    <button type="button" className="btn btn-warning">
      Warning
    </button>
    <button type="button" className="btn btn-info">
      Info
    </button>
    <button type="button" className="btn btn-light">
      Light
    </button>
    <button type="button" className="btn btn-dark">
      Dark
    </button>

    <button type="button" className="btn btn-link">
      Link
    </button>
  </div>
);
