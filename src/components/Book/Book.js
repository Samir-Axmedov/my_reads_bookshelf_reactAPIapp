import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import ShelfChanger from '../ShelfChanger/ShelfChanger';

const Book = ({ book, updateBook }) => {
    return (
          <li>
            <section className="book">
              <div className="book-top">
                <div className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${
                      !book.imageLinks ? ''
                      :
                      (book.imageLinks.thumbnail || book.imageLinks.smallThumbnail)
                    })`
                  }}>
                </div>

                <ShelfChanger currentShelf={book.shelf}
                              bookMenuID={book.id}
                              updateBook={updateBook}
                              />
              </div>

              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </section>
          </li>
    );
  }


Book.propTypes = {
  book: PropTypes.object,
  updateBook: PropTypes.func,
}

export default Book
