import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../../BooksAPI';
import './Library.css';
import Header from '../Header/Header';
import Shelf from '../Shelf/Shelf';
import SearchIcon from '../SearchIcon/SearchIcon';


class Library extends Component {
    state = {
      books: [],
      shelf: ""
    }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books: books});
    })
  }

  getBook = (bookIDFromMenu, shelfName) => {
    this.setState({shelf: shelfName}, () => {
      BooksAPI.get(bookIDFromMenu).then(book => {
        BooksAPI.update(book, this.state.shelf);
        console.log(book, shelfName);
      });
    });
  }

  render() {
    console.log(this.state.books);
    return (
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <Shelf
            books={this.state.books.filter(book => book.shelf === "currentlyReading")}
            name={"Currently Reading"}
            getBook={this.getBook}
          />
          <Shelf
            books={this.state.books.filter(book => book.shelf === "wantToRead")}
            name={"Want To Read"}
            getBook={this.getBook}
          />
          <Shelf
            books={this.state.books.filter(book => book.shelf === "read")}
            name={"Read"}
            getBook={this.getBook}
          />
          </div>
        <SearchIcon />
      </div>
    );
  }
}

Library.propTypes = {

}

export default Library;
