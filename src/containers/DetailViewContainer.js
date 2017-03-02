import React, { Component, PropTypes } from 'react'
import DetailView from '../components/DetailView'
import LoadingView from '../components/LoadingView'
import { connect } from 'react-redux'
import { selectTag, requestCardDetail, fetchCardDetail } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    route_slug: ownProps.params.slug,
    isFetching: state.cardDetail.isFetching,
    card: state.cardDetail.item
})

const mapDispatchToProps = (dispatch) => ({
    onTagClick: slug => dispatch(selectTag(slug)),
    requestCardDetail: slug => dispatch(requestCardDetail(slug)),
    fetchCardDetail: slug => dispatch(fetchCardDetail(slug))
})

class DetailViewContainer extends Component {
    componentDidMount() {
        const { requestCardDetail, fetchCardDetail, route_slug } = this.props
        console.log(`Requesting card detail:${route_slug}`)
        requestCardDetail(route_slug)
        fetchCardDetail(route_slug)
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