import React, { Component } from 'react';
import './header.css'
class Header extends Component {
  render()
  {
    return (
      <div className="header">
        <h1> {this.props.title} </h1>
      </div>
    );
  }
}
export default Header;