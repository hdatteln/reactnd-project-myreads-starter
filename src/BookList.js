import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }
  state = {}

  render () {
    const { books } = this.props;
    const currentlyReading = books.filter((b) => (
      b.shelf === 'currentlyReading')
    );
    const read = books.filter((b) => (
      b.shelf === 'read')
    );
    const wantToRead = books.filter((b) => (
      b.shelf === 'wantToRead')
    );


    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf shelfTitle="Currently Reading"  filteredBooks={currentlyReading}/>
          <BookShelf shelfTitle="Want to Read"  filteredBooks={wantToRead}/>
          <BookShelf shelfTitle="Read" filteredBooks={read}/>
        </div>
        <div className="open-search">
          <Link to='/search'>Add A Book</Link>
        </div>
      </div>

    )
  }
}

export default BookList
