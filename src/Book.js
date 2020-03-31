import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    'bookDetails': PropTypes.object.isRequired
  }

  render () {
    const { bookDetails } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128, height: 192, backgroundImage: `url(${bookDetails.imageLinks.thumbnail})` }}>

          </div>
          <div className="book-shelf-changer">
            <select>
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