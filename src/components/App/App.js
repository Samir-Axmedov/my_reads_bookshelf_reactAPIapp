import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Search from '../Search/Search';
import Library from '../Library/Library';


class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={ Library } />
        <Route exact path="/search" component={ Search } />
      </div>
    )
  }
}

export default BooksApp
