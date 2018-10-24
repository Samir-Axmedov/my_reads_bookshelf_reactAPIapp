import React from 'react';
import PropTypes from 'prop-types';
import './ShelfChanger.css';

const ShelfChanger = ({ currentShelf, bookMenuID, updateBook }) => {
    return (
      <section className="book-shelf-changer">
        <select value={currentShelf || "none"}
                id={bookMenuID}
                onChange={(e) => updateBook(e.target.id, e.target.value)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </section>
    );
  }

ShelfChanger.propTypes = {
  currentShelf: PropTypes.string,
  bookMenuID: PropTypes.string,
  handleShelfSelect: PropTypes.func
}

export default ShelfChanger;
