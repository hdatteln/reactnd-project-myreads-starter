import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'
import PropTypes from 'prop-types'

class SearchPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }
  state = {
    query: ''
  };
  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))

  };
  clearQuery = () => {
    this.updateQuery('')
  };
  render () {
    const { query } = this.state;
    const { books, onUpdateBook } = this.props;
    const showingBooks = query === '' ? books : books.filter((b) => (
      b.title.toLowerCase().includes(query.toLowerCase()) || b.authors.join().toLowerCase().includes(query.toLowerCase())
    ));
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                   NOTES: The search from BooksAPI is limited to a particular set of search terms.
                   You can find these search terms here:
                   https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                   However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                   you don't find a specific author or title. Every search is limited by search terms.
                 */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}  />
          </div>
        </div>
        <SearchResults searchResultBooks={showingBooks} onUpdateBook={onUpdateBook}/>
        {showingBooks.length !== books.length && (
          <div className='search-results-message'>
            <span>Now showing {showingBooks.length} of {books.length} available books </span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}
      </div>
    )
  }
}

export default SearchPage
