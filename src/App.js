import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import BookList from './BookList';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
  state = {
    shelfBooks: [],
    searchBooks: []
  };

  componentDidMount () {
    BooksAPI.getAll().then(
      (books) => {
        this.setState(() => ({
          shelfBooks: books
        }));
      }
    );
  };

  updateSearchState = (books) => {
    this.setState(currentState => ({
      searchBooks: books
    }))
  };

  updateBook = (book, newVal) => {
    if (book.shelf === 'none' && newVal !== 'none') {
      // Search Page
      book.shelf = newVal;
      this.setState(currentState => ({
        shelfBooks: [...currentState.shelfBooks, book],
        searchBooks: currentState.searchBooks.filter((b) => {
          return b.shelf === 'none';
        })
      }));
    } else if (book.shelf !== 'none' && newVal === 'none') {
      // removing a book from a shelf
      book.shelf = newVal;
      this.setState((currentState) => ({
          shelfBooks: currentState.shelfBooks.filter((b) => {
              return b.id !== book.id;
            }
          )
        })
      );
    } else {
      this.setState((currentState) => ({
          //moving a book from one shelf to another
          shelfBooks: currentState.shelfBooks.map((b) => {
              if (b.id === book.id && newVal !== 'none') {
                b.shelf = newVal;
              }
              return b;
            }
          )
        })
      );
    }
    BooksAPI.update(book, book.shelf);
  };

  render () {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList shelfBooks={this.state.shelfBooks} onUpdateBook={this.updateBook}/>
        )}/>
        <Route path="/search" render={({history}) => (
          <SearchPage shelfBooks={this.state.shelfBooks} searchBooks={this.state.searchBooks}
                      updateSearchState={this.updateSearchState} onUpdateBook={this.updateBook}/>
        )}/>
      </div>
    );
  }
}

export default BooksApp;
