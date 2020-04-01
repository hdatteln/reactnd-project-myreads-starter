import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  static propTypes = {
    bookDetails: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  render () {
    const { bookDetails, onUpdateBook } = this.props;
    console.log(bookDetails.shelf)
    const options = [
      { value: 'move', label: 'Move to...' },
      { value: 'currentlyReading', label: 'Currently Reading' },
      { value: 'wantToRead', label: 'Want to Read' },
      { value: 'read', label: 'Read' },
      { value: 'none', label: 'None' }
    ];
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128, height: 192, backgroundImage: `url(${bookDetails.imageLinks.thumbnail})` }}>

          </div>
          <div className="book-shelf-changer">
            <select onChange={(e) => onUpdateBook(bookDetails, e.target.value)} defaultValue={bookDetails.shelf}>

              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{bookDetails.title}</div>
        {bookDetails.authors.map((author, index) => (
          <div className="book-authors" key={ `author${index}` }>{author}</div>
        ))}
      </div>
    )
  }
}

export default Book