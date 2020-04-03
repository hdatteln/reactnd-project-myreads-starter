import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

class BookList extends Component {
  static propTypes = {
    shelfBooks: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }
  state = {}

  render () {
    const { shelfBooks, onUpdateBook } = this.props;
    const currentlyReading = shelfBooks.filter((b) => (
      b.shelf === 'currentlyReading')
    );
    const read = shelfBooks.filter((b) => (
      b.shelf === 'read')
    );
    const wantToRead = shelfBooks.filter((b) => (
      b.shelf === 'wantToRead')
    );


    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf shelfTitle="Currently Reading"  filteredBooks={currentlyReading} onUpdateBook={onUpdateBook}/>
          <BookShelf shelfTitle="Want to Read"  filteredBooks={wantToRead} onUpdateBook={onUpdateBook}/>
          <BookShelf shelfTitle="Read" filteredBooks={read} onUpdateBook={onUpdateBook}/>
        </div>
        <div className="open-search">
          <Link to='/search'>Add A Book</Link>
        </div>
      </div>

    )
  }
}

export default BookList
