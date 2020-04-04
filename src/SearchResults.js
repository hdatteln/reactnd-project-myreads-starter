import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class SearchResults extends Component {
  static propTypes = {
    searchResultBooks: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  };

  render () {
    const {searchResultBooks, onUpdateBook} = this.props;
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResultBooks.map((book) => (
            <li key={book.id}><Book bookDetails={book} onUpdateBook={onUpdateBook}/></li>
          ))}
        </ol>
      </div>
    )
  }
}

export default SearchResults
