import React, { PropTypes } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import '../styles/App.css'

const App = ({ children }) => (
    <div className="App">
        <Navigation />
        {children}
        <Footer />
    </div>  
)

App.propTypes = {
    children: PropTypes.object.isRequired
}

export default App;
