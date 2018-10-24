import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import ShelfChanger from '../ShelfChanger/ShelfChanger';

const Book = (props) => {
    return (
          <li>
            <section className="book">
              <div className="book-top">
                <div className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${
                      !props.book.imageLinks ? ''
                      :
                      (props.book.imageLinks.thumbnail || props.book.imageLinks.smallThumbnail)
                    })`
                  }}>
                </div>

                <ShelfChanger currentShelf={props.book.shelf}
                              bookMenuID={props.book.id}
                              updateBook={props.updateBook}
                              />
              </div>

              <div className="book-title">{props.book.title}</div>
              <div className="book-authors">{props.book.authors}</div>
            </section>
          </li>
    );
  }


Book.propTypes = {
  book: PropTypes.object,
  updateBook: PropTypes.func,
}

export default Book
