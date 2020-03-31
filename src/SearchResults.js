import React, { Component } from 'react'
import Book from './Book'

class SearchResults extends Component {
  static propTypes = {}
  state = {}

  render () {
    const { searchResultBooks } = this.props;
    return (
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResultBooks.map((book) => (
              <li key={book.id}><Book bookDetails={book} /></li>
            ))}
          </ol>
        </div>
    )
  }
}

export default SearchResults
