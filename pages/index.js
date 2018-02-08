import React from 'react'
import Link from 'next/link'

import Nav from '../components/Nav'

export default () => (
    <div>
        <Nav>
            <Link href="/">
                <a>Home</a>
            </Link>

            <Link href="/about">
                <a>About</a>
            </Link>
        </Nav>

        <h1>Home</h1>
    </div>
)
