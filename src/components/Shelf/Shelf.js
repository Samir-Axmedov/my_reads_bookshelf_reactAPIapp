import React from 'react';
import PropTypes from 'prop-types';
import './Shelf.css';
import Book from '../Book/Book';


const Shelf = (props) => {
    return (
      <section className="bookshelf-books">
        <ol className="books-grid">
          <div>
            <section className="bookshelf">
              <h2 className="bookshelf-title">{props.name}</h2>
              {
                props.books.map(book => {
                  return <Book book={book}
                               key={book.id}
                               updateBook={props.updateBook}
                               />
                })
              }
            </section>
          </div>
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
