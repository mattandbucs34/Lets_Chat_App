import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyDuELVYsbEg20n2acmwcP47j56kqRiyYsI",
  authDomain: "blocchat-mattyj.firebaseapp.com",
  databaseURL: "https://blocchat-mattyj.firebaseio.com",
  projectId: "blocchat-mattyj",
  storageBucket: "blocchat-mattyj.appspot.com",
  messagingSenderId: "762483820918"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <main>
        </main>
        <RoomList firebase={firebase} />
      </div>
    );
  }
}

export default App;