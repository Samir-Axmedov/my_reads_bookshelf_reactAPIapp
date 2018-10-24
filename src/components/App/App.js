import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Search from '../Search/Search';
import Library from '../Library/Library';

const BooksApp = () => {
  return (
    <div className="app">
      <Route exact path="/" component={ Library } />
      <Route exact path="/search" component={ Search } />
    </div>
  )
}

export default BooksApp
