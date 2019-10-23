import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import ListCustomers from './components/ListCustomers';
import WikiSearch from './components/WikiSearch';
import ReduxCounter from './components/ReduxCounter';
import {BrowserRouter, Link, Route, MemoryRouter} from 'react-router-dom';
import CustomerDetails from './components/CustomerDetails';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <article>
      <div className="App">
        <header className="App-header">
          <h2>React Application</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <BrowserRouter basename="/react/">
          <section>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/counter">Counter</Link>
                </li>
                <li>
                  <Link to="/search">WikiSearch</Link>
                </li>
                <li>
                  <Link to="/redux">Redux</Link>
                </li>
                <li>
                  <Link to="/customers">Customers</Link>
                </li>
              </ul>
          </section>
          <section>
              <Route path="/" exact>
                <Hello message="Hello React!!"/>
              </Route>
              <Route path="/counter">
                <Counter title="Counter" value="10"/>
              </Route>
              <Route path="/search">
                <WikiSearch/>
              </Route>
              <Route path="/redux">
                <ReduxCounter/>
              </Route>
              {/* <Route path="/customers" exact component={ListCustomers}/> */}
              <ProtectedRoute path="/customers" exact component={ListCustomers}/>
              
              <Route path="/customers/:id" component={CustomerDetails}>
                {/* <CustomerDetails/> */}
              </Route>
          </section>
      </BrowserRouter>


    </article>


  );
}

export default App;
