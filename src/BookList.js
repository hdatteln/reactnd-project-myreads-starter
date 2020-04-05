import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';

class BookList extends Component {
  static propTypes = {
    shelfBooks: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  };
  state = {};

  render () {
    const {shelfBooks, onUpdateBook} = this.props;

    function booksByShelfReducer (acc, b) {
      acc[b.shelf].push(b);
      return acc;
    }

    const booksByShelf = shelfBooks.reduce(booksByShelfReducer, {'currentlyReading': [], 'read': [], 'wantToRead': []});

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf shelfTitle="Currently Reading" filteredBooks={booksByShelf.currentlyReading}
                     onUpdateBook={onUpdateBook}/>
          <BookShelf shelfTitle="Want to Read" filteredBooks={booksByShelf.wantToRead} onUpdateBook={onUpdateBook}/>
          <BookShelf shelfTitle="Read" filteredBooks={booksByShelf.read} onUpdateBook={onUpdateBook}/>
        </div>
        <div className="open-search">
          <Link to="/search">Add A Book</Link>
        </div>
      </div>

    );
  }
}

export default BookList;
