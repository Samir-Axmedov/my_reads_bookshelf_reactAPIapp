import React, { Component } from 'react';
import './Header.css';

export const Header = (props) => {
    return (
      <div className="list-books-title">
        <h1>{props.bookShelf}</h1>
      </div>
    );
}
