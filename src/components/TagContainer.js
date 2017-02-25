import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import Tag from './Tag';
import '../styles/TagContainer.css';

class TagContainer extends Component{
    render(){
        const tagNodes = this.props.tags.map(function(tag){
            return(
                <Tag key={tag.Id} tagId={tag.Id} tagName={tag.Name} onClick={this.props.onClick} />      
            ); 
        }.bind(this));
        return (
            <div className="TagContainer">
                <ButtonToolbar>
                    {tagNodes}
                </ButtonToolbar>
            </div>
        );  
    }
}

export default TagContainer;