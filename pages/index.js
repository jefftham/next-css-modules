import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Nav from '../components/Nav'
/**
 * Button styles won't be bundled unless added on this route
 */
// import Button from '../components/Button'

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

        <h1>Home</h1>
        {/*<Button>Just a button</Button>*/}
    </div>
)
