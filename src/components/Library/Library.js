import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../../BooksAPI';
import './Library.css';
import Header from '../Header/Header';
import Shelf from '../Shelf/Shelf';
import SearchIcon from '../SearchIcon/SearchIcon';


class Library extends Component {
  state = {
    myBookShelves: [],
  }

  getMyBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({myBookShelves: books});
    });
  }

  componentDidMount() {
    this.getMyBooks();
  }

  updateBook = (bookIDFromMenu, shelfName) => {
    let bookToUpdate = this.state.myBookShelves.filter(book => book.id === bookIDFromMenu);
    console.log(bookToUpdate[0]);
    BooksAPI.update(bookToUpdate[0], shelfName)
    .then(resp => {
      console.log(resp);
      // another idea: concat bookToUpdate[0] to this.state.myBookShelves
      this.getMyBooks();
    });
  }

  updatePage = () => {
    BooksAPI.getAll().then(books => {
      console.log("updatePage called");
      this.setState({myBookShelves: books});
    })
  }

  render() {
    return (
      <div className="list-books">
        <Header bookShelf={"My BookShelf"} />
        <main className="list-books-content">
          <Shelf
            books={this.state.myBookShelves.filter(book => book.shelf === "currentlyReading")}
            name={"Currently Reading"}
            updateBook={this.updateBook}
          />
          <Shelf
            books={this.state.myBookShelves.filter(book => book.shelf === "wantToRead")}
            name={"Want To Read"}
            updateBook={this.updateBook}
          />
          <Shelf
            books={this.state.myBookShelves.filter(book => book.shelf === "read")}
            name={"Read"}
            updateBook={this.updateBook}
          />

          </main>
        <SearchIcon />
      </div>
    );
  }
}

Library.propTypes = {
  myBookShelves: PropTypes.array,
  updateBook: PropTypes.func,
}

export default Library;
