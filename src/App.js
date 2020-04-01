import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookList from './BookList'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount () {
    BooksAPI.getAll().then(
      (books) => {
        this.setState(() => ({
          books
        }))
      }
    )
  }

  updateBook = (book, newVal) => {
    console.log(newVal)
    this.setState((currentState) => ({
        books: currentState.books.map((b) => {
            if (b.id === book.id && newVal !== 'none') {
              b.shelf = newVal
            }
            return b
          }
        )
      })
    )

    BooksAPI.update(book)
  }

  render () {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList books={this.state.books} onUpdateBook={this.updateBook}/>
        )}/>
        <Route path="/search" render={({history}) => (
          <SearchPage books={this.state.books} onUpdateBook={this.updateBook}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
