import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './View/HomePage/HeaderComponent/header.js';
import PostContainer from './View/HomePage/PostComponents/postcontainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header title='Wonder-Wall'/>
        <PostContainer/>
      </div>
    );
  }
}

export default App;
