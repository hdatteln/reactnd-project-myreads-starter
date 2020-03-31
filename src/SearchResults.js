import React, { Component } from 'react'
import Book from './Book'

class SearchResults extends Component {
  static propTypes = {}
  state = {}

  render () {
    return (
        <div className="search-books-results">
          <ol className="books-grid">
            <li>
              <Book/>
            </li>
          </ol>
        </div>
    )
  }
}

export default SearchResults
