import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../../BooksAPI';
import './Library.css';
import { Header } from '../Header/Header';
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

<<<<<<< HEAD
=======

  // updateBook = (bookIDFromMenu, shelfName) => {
  //   let bookToUpdate = this.state.myBookShelves.filter(book => book.id === bookIDFromMenu);
  //   BooksAPI.update(bookToUpdate[0], shelfName).
  //   then(resp => {
  //     bookToUpdate[0].shelf = shelfName;
  //     this.setState(state => ({
  //       myBookShelves: state.myBookShelves.filter(book => book.id !== bookToUpdate[0].id).concat([bookToUpdate[0]])
  //     }));
  //   });
  // }

>>>>>>> 755e18fdfbe799978bab4d35d29e563dfc27eb3c
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
<<<<<<< HEAD
        <main className="list-books-content">
=======
        <div className="list-books-content">
>>>>>>> 755e18fdfbe799978bab4d35d29e563dfc27eb3c
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
<<<<<<< HEAD
          </main>
=======
          </div>
>>>>>>> 755e18fdfbe799978bab4d35d29e563dfc27eb3c
        <SearchIcon />
      </div>
    );
  }
}

Library.propTypes = {
  updateBook: PropTypes.func,
  bookShelf: PropTypes.string,
}

export default Library;
