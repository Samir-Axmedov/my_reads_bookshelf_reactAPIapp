import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
// import logo from './logo.svg';
import './App.css';
import Search from '../Search/Search';
import Library from '../Library/Library';
import SearchIcon from '../SearchIcon/SearchIcon';
import {get, getAll, update, search} from '../../BooksAPI';

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

BooksApp.propTypes = {

}

export default BooksApp
