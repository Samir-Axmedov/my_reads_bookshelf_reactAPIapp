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

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({myBookShelves: books});
    })
  }

  getBook = (bookIDFromMenu, shelfName) => {
    let bookToUpdate = this.state.myBookShelves.filter(book => book.id === bookIDFromMenu);
    console.log(bookToUpdate[0]);
    BooksAPI.update(bookToUpdate[0], shelfName).
    then(resp => {
      console.log(resp);
      // another idea: concat bookToUpdate[0] to this.state.myBookShelves
      BooksAPI.getAll().then(books => {
        this.setState({myBookShelves: books});
      });
    });
  }


  // getBook = (bookIDFromMenu, shelfName) => {
  //   let bookToUpdate = this.state.myBookShelves.filter(book => book.id === bookIDFromMenu);
  //   BooksAPI.update(bookToUpdate[0], shelfName).
  //   then(resp => {
  //     bookToUpdate[0].shelf = shelfName;
  //     this.setState(state => ({
  //       myBookShelves: state.myBookShelves.filter(book => book.id !== bookToUpdate[0].id).concat([bookToUpdate[0]])
  //     }));
  //   });
  // }

  updatePage = () => {
    BooksAPI.getAll().then(books => {
      console.log("updatePage called");
      this.setState({myBookShelves: books});
    })
  }

  render() {
    console.log(this.state.books);
    return (
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <Shelf
            books={this.state.myBookShelves.filter(book => book.shelf === "currentlyReading")}
            name={"Currently Reading"}
            getBook={this.getBook}
          />
          <Shelf
            books={this.state.myBookShelves.filter(book => book.shelf === "wantToRead")}
            name={"Want To Read"}
            getBook={this.getBook}
          />
          <Shelf
            books={this.state.myBookShelves.filter(book => book.shelf === "read")}
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
  getBook: PropTypes.func
}

export default Library;
