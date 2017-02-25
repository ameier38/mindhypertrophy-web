import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import logoImage from '../mindhypertrophy.png';
import '../styles/Jumbotron.css';

class Jumbotron extends Component{
    render(){
        var jumboStyle = {backgroundImage: `url(${this.props.imageUrl})`}
        var logo = this.props.includeLogo ? (<img src={logoImage} role="presentation" />) : null
        return(
            <div className="Jumbotron" style={jumboStyle}>
                <Grid>
                    <div>
                        {logo}
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                    </div>
                </Grid>               
            </div>
        );
    }
}

export default Jumbotron;