import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { ThreeBounce } from 'better-react-spinkit';
import Markdown from 'react-markdown-plus';
import Jumbotron from './Jumbotron';
import TagFilter from './TagFilter';
import CardComments from './CardComments';

const cardApi = process.env.REACT_APP_CARD_API;


class CardDetail extends Component{
    constructor(props) {
        super(props)
        this.state = { 
            cardDetail: null,
            loading: true
        }
        this.loadFromServer = this.loadFromServer.bind(this)
    }
    componentDidMount(){
        //fetch data
        var apiUrl = cardApi + '/' + this.props.params.slug
        console.log("componentDidMount apiUrl: " + apiUrl)
        this.loadFromServer(apiUrl)
    }
    loadFromServer(apiUrl){
        var xhr = new XMLHttpRequest()
        xhr.open("get", apiUrl, true)
        xhr.onload = () => {
            var data = JSON.parse(xhr.responseText)
            console.log('loadFromServer cardDetail')
            this.setState({
                cardDetail: data,
                loading: false 
            })
        }
        xhr.send()
    }
    handleClick(url){
        browserHistory.push(url)
    }
    render(){
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
            return (
                <div className="card-container">
                    <Jumbotron
                        title={this.state.cardDetail.Title}
                        description={this.state.cardDetail.CreatedDate}
                        imageUrl={this.state.cardDetail.ImageUrl} />
                    <TagFilter 
                        tags={this.state.cardDetail.Tags}
                        onClick={this.handleClick} />
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <div className="card">
                                    <div className="card-content">
                                        <Markdown text={this.state.cardDetail.Content} style={{maxWidth: 768}} />
                                    </div>
                                </div>
                            </Col>
                        </Row> 
                        <Row>
                            <CardComments 
                                title={this.state.cardDetail.Title}
                                identifier={this.state.cardDetail.Slug}
                            />                       
                        </Row>
                    </Grid>
                </div>    
            )
        } 
    } 
}

export default CardDetail;