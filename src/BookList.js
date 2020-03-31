import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BookList extends Component {
  static propTypes = {}
  state = {}

  render () {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf shelfTitle="Currently Reading" />
          <BookShelf shelfTitle="Want to Read" />
          <BookShelf shelfTitle="Read" />
        </div>
        <div className="open-search">
          <Link to='/search'>Add A Book</Link>
        </div>
      </div>

    )
  }
}

export default BookList
