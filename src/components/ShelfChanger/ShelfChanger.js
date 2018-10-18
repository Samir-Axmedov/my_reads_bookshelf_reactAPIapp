import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ShelfChanger.css';

class ShelfChanger extends Component {
  state = {
    shelf: '',
    bookID: ''
  }

  handleShelfSelect = (event) => {
    this.props.getBook(event.target.id, event.target.value)
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.props.currentShelf}
                id={this.props.bookMenuID}
                onChange={this.handleShelfSelect}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}


ShelfChanger.propTypes = {

}

export default ShelfChanger;
