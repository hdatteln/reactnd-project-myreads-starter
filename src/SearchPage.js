import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchResults from './SearchResults';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';

class SearchPage extends Component {
  static propTypes = {
    shelfBooks: PropTypes.array.isRequired,
    searchBooks: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
    updateSearchState: PropTypes.func.isRequired
  };
  state = {
    query: ''
  };

  componentWillUnmount () {
    this.setState(() => ({
      query: ''
    }));
    this.props.updateSearchState([])
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }));
    if (!query || (query.trim() && query.trim().length < 1)) {
      this.setState(() => ({
        query: ''
      }));
      this.props.updateSearchState([]);
    } else {
      BooksAPI.search(query)
        .then((books) => {
          let searchRes = [];
          if (books && !books.error) {
            searchRes = books.filter((b) => {
              let retval = true;
              if(!b.imageLinks) {
                retval = false;
              }
              if (!b.shelf) {
                b.shelf = 'none';
              }
              this.props.shelfBooks.map((bk) => {

                if (b.id === bk.id) {
                  b.shelf = bk.shelf;
                }
                return bk;
              });
              return retval;
            });
            this.props.updateSearchState(searchRes);
          } else {
            this.props.updateSearchState([]);
          }
        })
        .catch((err) => {
          console.log(err);
          this.props.updateSearchState([]);
        });
    }
  };

  render () {
    const {query} = this.state;
    const {onUpdateBook, searchBooks} = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
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
              onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <SearchResults searchResultBooks={searchBooks} onUpdateBook={onUpdateBook}/>
      </div>
    );
  }
}

export default SearchPage;
