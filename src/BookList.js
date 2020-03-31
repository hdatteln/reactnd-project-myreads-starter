import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BookList extends Component {
  static propTypes = {};
  state = {};
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          Book content goes here
        </div>
      </div>

    )
  }
}

export default BookList
