import React from 'react'
import '../styles/Paper.css'

const Paper = ({ children }) => (
    <div className="Paper container z-depth-2">
        {children}
    </div>
)

export default Paper