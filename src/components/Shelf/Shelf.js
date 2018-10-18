import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Shelf.css';
import Book from '../Book/Book';


class Shelf extends Component {

  render() {
    console.log(this.props.books);
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.name}</h2>
              {
                this.props.books.map(book => {
                  return <Book book={book}
                               key={book.id}
                               getBook={this.props.getBook}
                               />
                })
              }
            </div>
          </div>
        </ol>
      </div>
    );
  }
}

Shelf.propTypes = {
  currentReads: PropTypes.array
}

export default Shelf;
