import React, { PropTypes } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

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
