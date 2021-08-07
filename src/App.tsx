import React from 'react';
import { Game } from './Pages/Game'
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
      <div className="App min-h-screen bg-gray-100">
        <header className="App-header">
        </header>
        <Router>
          <Switch>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
