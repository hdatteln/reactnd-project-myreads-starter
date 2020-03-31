import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'
import PropTypes from 'prop-types'

class SearchPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }
  state = {}

  render () {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" exact to='/'>Close</Link>

          <div className="search-books-input-wrapper">
            {/*
                   NOTES: The search from BooksAPI is limited to a particular set of search terms.
                   You can find these search terms here:
                   https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                   However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                   you don't find a specific author or title. Every search is limited by search terms.
                 */}
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <SearchResults />
      </div>
    )
  }
}

export default SearchPage
