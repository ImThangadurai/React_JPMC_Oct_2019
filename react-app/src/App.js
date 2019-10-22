import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import ListCustomers from './components/ListCustomers';
import WikiSearch from './components/WikiSearch';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <Hello message="Hello World"/>

      <Hello message="Welcome to React!"/>

      <Hello message="With Children">
        <p>This is an inner element</p>
      </Hello> */}

      {/* <Counter title="Count" value="10"/>
      <Counter title="Test" value="0"/> */}

      {/* <ListCustomers/> */}

      <WikiSearch/>
      <Hello message="Hello World"/>

    </div>
  );
}

export default App;
