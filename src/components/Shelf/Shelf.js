import React from 'react';
import PropTypes from 'prop-types';
import './Shelf.css';
import Book from '../Book/Book';


const Shelf = ({ name, books, updateBook }) => {
    return (
      <section className="bookshelf-books">
        <ol className="books-grid">
            <section className="bookshelf">
              <h2 className="bookshelf-title" tabIndex="0">{name}</h2>
              {
                books.map(book => {
                  return <Book book={book}
                               key={book.id}
                               updateBook={updateBook}
                               />
                })
              }
            </section>
        </ol>
      </section>
    );
  }

Shelf.propTypes = {
  books: PropTypes.array,
  name: PropTypes.string,
  updateBook: PropTypes.func
}

export default Shelf;
