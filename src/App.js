import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';

import BooksComponent from './BooksComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Changed code.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           <BooksComponent />
        </a>
      </header>
    </div>
  );
}

export default App;
