import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Header extends Component {
  render() {
    return (
        <div>
          <h1>My to do list</h1>
          <form className="create">
            <input type="text" id="inputAdd" placeholder="Title ... " size="50px" />
            <button id="buttonAdd">Add</button>
          </form>
        </div>
    );
  }
}
export default Header;