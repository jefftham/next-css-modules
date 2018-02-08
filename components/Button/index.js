import React, { Component } from 'react'

import styles from './styles.css'

export default ({ children }) => (
    <button className={styles.root}>
        {children}
    </button>
)
