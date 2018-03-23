import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './component/header';
// import Main from './component/main';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Form />
        </div>
        <List />
      </div>
    );
  }
}
class Form extends Component {
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
class List extends Component {
  render() {
    return (
      <div className="main">
        <ul id="list">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </ul>
      </div>
    );
  }
}
class Item extends Component {
  render() {
    return (
      <li>Uet code camp<span class="close">×</span></li>
    );
  }
}
export default App;
