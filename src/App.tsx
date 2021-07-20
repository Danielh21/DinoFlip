import React from 'react';
import { Flipper } from './Pages/Flipper'
import { Welcome } from './Pages/Welcome'
import { SetLang } from './Services/Translations'
import { useAppSelector } from './Hooks/Hooks'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  let lang = useAppSelector( state => state.userSlice.language);
  SetLang(lang);
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
