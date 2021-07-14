import React from 'react';
import { Flipper } from './Pages/Flipper/Flipper'
import { Welcome } from './Pages/Welcome'
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
              <Welcome />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
