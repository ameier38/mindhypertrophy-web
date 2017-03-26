import React, { Component, PropTypes } from 'react'
import TagBox from './TagBox'

const $ = window.$;

class SearchModal extends Component {
    componentDidMount() {
        $('.chips').material_chip({
            autocompleteData: this.props.tags,
            data: this.props.selectedTags.map(tag => ({
                tag: tag.name,
                id: tag.id
            })),
            placeholder: 'Search for a tag',
            secondaryPlaceholder: '+Tag'
        })
        $('.chips').on('chip.add', (e, tag) => {
            this.handleTagSearch(tag.tag)
        })
        $('.chips').on('chip.delete', (e, tag) => {
            this.handleTagSearch(tag.tag)
        })
    }
    handleTagSearch(tagName) {
        this.props.onTagClick(tagName)
    }
    render() {
        const { tags, onTagClick, target } = this.props
        return (
            <div id={`${target}`} className="modal bottom-sheet">
                <div className="modal-content">
                    <div className="chips chips-autocomplete chips-placeholder chips-initial"></div>
                    <TagBox tags={tags} onTagClick={onTagClick} />
                </div>
            </div>
        )
    }
}

SearchModal.propTypes = {
    target: PropTypes.string.isRequired,
    onTagClick: PropTypes.func.isRequired,
    tags: PropTypes.array.isRequired,
    selectedTags: PropTypes.array.isRequired
}

export default SearchModal