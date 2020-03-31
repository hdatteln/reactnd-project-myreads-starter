import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    shelfTitle: PropTypes.string.isRequired
  }
  state = {
    books: []
  }

  render () {
    const {shelfTitle} = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li><Book/></li>
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
