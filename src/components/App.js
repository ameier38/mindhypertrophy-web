import React, { PropTypes } from 'react'
import NavigationContainer from '../containers/NavigationContainer'

const App = ({ children }) => (
    <div className="App">
        {children}
        <NavigationContainer />
    </div>  
)

App.propTypes = {
    children: PropTypes.object.isRequired
}

export default App
