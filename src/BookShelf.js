import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    filteredBooks: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  render () {
    const { shelfTitle, filteredBooks, onUpdateBook } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {filteredBooks.map((book) => (
              <li key={book.id}><Book bookDetails={book} onUpdateBook={onUpdateBook}/></li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
