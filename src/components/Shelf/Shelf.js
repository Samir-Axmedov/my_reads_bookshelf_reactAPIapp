import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Shelf.css';
import Book from '../Book/Book';


class Shelf extends Component {

  render() {
    return (
      <section className="bookshelf-books">
        <ol className="books-grid">
          <div>
            <section className="bookshelf">
              <h2 className="bookshelf-title">{this.props.name}</h2>
              {
                this.props.books.map(book => {
                  return <Book book={book}
                               key={book.id}
                               updateBook={this.props.updateBook}
                               />
                })
              }
            </section>
          </div>
        </ol>
      </section>
    );
  }
}

Shelf.propTypes = {
  currentReads: PropTypes.array,
  name: PropTypes.string,
  updateBook: PropTypes.func
}

export default Shelf;
