import React, { Component, PropTypes } from 'react'
import DetailView from '../components/DetailView'
import LoadingView from '../components/LoadingView'
import { connect } from 'react-redux'
import { selectTag, requestCardDetail } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    route_slug: ownProps.params.slug,
    isFetching: state.cardDetail.isFetching,
    card: state.cardDetail.item
})

const mapDispatchToProps = (dispatch) => ({
    onTagClick: slug => dispatch(selectTag(slug)),
    requestCardDetail: slug => dispatch(requestCardDetail(slug))
})

class DetailViewContainer extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const { requestCardDetail, route_slug } = this.props
        requestCardDetail(route_slug)
    }
    render() {
        const { isFetching, onTagClick, card } = this.props
        return (
            <div>
                { isFetching && <LoadingView />}
                { !isFetching && 
                    <DetailView 
                        isFetching={isFetching} 
                        card={card} 
                        onTagClick={onTagClick} />
                }
            </div>
        )
    }
}

DetailViewContainer.propTypes = {
    route_slug: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    card: PropTypes.object.isRequired,
    onTagClick: PropTypes.func.isRequired,
    requestCardDetail: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailViewContainer)