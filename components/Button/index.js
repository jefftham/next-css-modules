import React, { Component } from 'react'

import  './styles.css'

export default ({ children }) => (
    <button className="root">
        {children}
    </button>
)
