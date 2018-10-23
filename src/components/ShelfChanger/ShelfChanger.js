import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ShelfChanger.css';

class ShelfChanger extends Component {

  handleShelfSelect = (event) => {
    this.props.updateBook(event.target.id, event.target.value)
  }

  render() {
    return (
<<<<<<< HEAD
      <section className="book-shelf-changer">
=======
      <div className="book-shelf-changer">
>>>>>>> 755e18fdfbe799978bab4d35d29e563dfc27eb3c
        <select value={this.props.currentShelf || "none"}
                id={this.props.bookMenuID}
                onChange={this.handleShelfSelect}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
<<<<<<< HEAD
      </section>
=======
      </div>
>>>>>>> 755e18fdfbe799978bab4d35d29e563dfc27eb3c
    );
  }
}


ShelfChanger.propTypes = {
  currentShelf: PropTypes.string,
  bookMenuID: PropTypes.string,
  handleShelfSelect: PropTypes.func
}

export default ShelfChanger;
