import React from 'react';
import { Counter } from './Features/Counter/counter'
import { Flipper } from './Features/Flipper/Flipper'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="w-full h-full">
      <div className="App h-full bg-gray-100">
        <header className="App-header">
        </header>
        <Router>
          <Switch>
            <Route path="/game">
              <Flipper />
            </Route>
            <Route path="/">
              <Counter />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
