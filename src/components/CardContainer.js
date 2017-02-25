import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import { ThreeBounce } from 'better-react-spinkit';
import Jumbotron from './Jumbotron';
import Card from './Card';
import TagFilter from './TagFilter';
import isEmpty from 'lodash/isEmpty';

 const cardApi = process.env.REACT_APP_CARD_API;
 const tagApi = process.env.REACT_APP_TAG_API;

class CardContainer extends Component{
    constructor(props) {
        super(props)
        this.state = { 
            cards: [],
            tags: [],
            loading: true
        }
        this.updateData = this.updateData.bind(this)
        this.loadFromServer = this.loadFromServer.bind(this)
    }
    componentDidMount(){
        var query = this.props.location.search
        console.log("componentDidMount query: " + query)
        this.updateData(query)
    }
    componentWillReceiveProps(nextProps) {
        var query = nextProps.location.search
        console.log("componentWillReceiveProps new query: " + query)
        var old_query = this.props.location.search
        console.log("componentWillReceiveProps old query: " + old_query)
        if (query !== old_query) {this.updateData(query)}
    }
    updateData(query){
        //load the cards
        var all_query = '?tagId=1'
        console.log("updateData query: " + query)
        if (isEmpty(query) || query === all_query) {
            this.loadFromServer(cardApi, 'cards')
        }
        else {
            this.loadFromServer(cardApi + query, 'cards')
        }
        //load the tags
        this.loadFromServer(tagApi, 'tags')  
    }
    loadFromServer(apiUrl, stateProp){
        var xhr = new XMLHttpRequest()
        xhr.open("get", apiUrl, true)
        xhr.onload = () => {
            var data = JSON.parse(xhr.responseText)
            console.log('loadFromServer stateProp: ' + stateProp)
            this.setState({
                [stateProp]: data,
                loading: false 
            })
        }
        xhr.send()
    }
    handleClick(url){
        browserHistory.push(url)
    }
    render(){
        const cardNodes = this.state.cards.map(function(card){
            return (
                <Card 
                    key={card.Id} 
                    id={card.Id}
                    slug={card.Slug}
                    title={card.Title} 
                    summary={card.Summary} 
                    createdDate={card.CreatedDate} 
                    tags={card.Tags}
                    onClick={this.handleClick}
                />
            );
        }.bind(this));
        if (this.state.loading){
            return (
                <div className="card-container">
                    <Jumbotron title="Loading..." />
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <ThreeBounce size={50}/>
                            </Col>
                        </Row> 
                    </Grid>
                </div>    
            ) 
        }
        else {
            return(
                <div className="card-container">
                    <Jumbotron
                        title="Train your brain"
                        description="Give your brain a workout! Click an article below to learn more."
                        imageUrl="/images/neurons.jpg" 
                        includeLogo={true} />
                    <TagFilter 
                        tags={this.state.tags}
                        onClick={this.handleClick} />
                    <Grid>
                        <Row>
                            {cardNodes}
                        </Row> 
                    </Grid>
                </div>
            )
        }
        
    }  
}

export default CardContainer;
