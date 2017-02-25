import React, { Component } from 'react';
import { Grid, Row, Col, Well } from 'react-bootstrap';
import TagContainer from './TagContainer'
import '../styles/TagFilter.css';

class TagFilter extends Component{
    render(){      
        return(
            <div id="tag-filter">          
                <Grid>
                    <Well bsSize="small">
                        <TagContainer 
                            tags={this.props.tags}
                            onClick={this.props.onClick} />
                    </Well>
                </Grid>
            </div>
        );
    }
}

export default TagFilter;