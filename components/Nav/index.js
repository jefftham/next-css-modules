import React, { Component } from 'react'

import styles from './styles.css'

export default ({ children }) => (
    <nav className={styles.root}>
        {children}
    </nav>
)
