import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import ShelfChanger from '../ShelfChanger/ShelfChanger';

class Book extends Component {
  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>

                <ShelfChanger />

              </div>
              <div className="book-title">{this.props.book.title}</div>
              <div className="book-authors">{this.props.book.authors[0]}</div>
            </div>
          </li>
        </ol>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object,

}

export default Book
