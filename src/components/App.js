import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

class App extends Component{
    render(){
        return(
            <div className="App">
                <Navigation />
                <div className="view">       
                    {this.props.children}
                </div>
                <Footer />
            </div>  
        );
    }
}

export default App;
