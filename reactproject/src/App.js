import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js";
import User from "./components/User";

class App extends Component {
  render() {
    return (
      <div className = "container">
      <Navbar title = "Library List"/>
      <hr/>
      <User
        name = "CERVANTES"
        book = "DON KİŞOT"
        page = "320"

      />
      <User
        name = "DOSTOYEVSKİ"
        book = "SUÇ VE CEZA"
        page = "384"

      />
      </div>
    );
  }
}
export default App;
