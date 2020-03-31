import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static propTypes = {
    shelfTitle: PropTypes.string.isRequired
  }
  state = {}

  render () {
    const {shelfTitle} = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>Book 1</li>
            <li>Book 2</li>
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
