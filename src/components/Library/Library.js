import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../../BooksAPI';
import './Library.css';
import Header from '../Header/Header';
import Shelf from '../Shelf/Shelf';
import SearchIcon from '../SearchIcon/SearchIcon';


class Library extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books: books});
    })
  }

  render() {
    return (
      <div className="list-books">
        <Header />
          <div className="list-books-content">
              <Shelf
                books={this.state.books.filter(book => book.shelf === "currentlyReading")}
                name={"Currently Reading"}
                />
              <Shelf
                books={this.state.books.filter(book => book.shelf === "wantToRead")}
                name={"Want To Read"}
                />
              <Shelf
                books={this.state.books.filter(book => book.shelf === "read")}
                name={"Read"}
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
