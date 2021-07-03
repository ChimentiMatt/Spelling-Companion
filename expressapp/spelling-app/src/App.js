import React, { useState } from 'react'
import './App.css';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from './components/landing.js' 
import SpellingPage from './components/speller.js'
import DictPage from './components/dictpage.js'
import FlashCardPage from "./components/flashcards.js"

import "./components/speller.css"


function App() {
  function OpenLogIn() {
    console.log('test')
  }
  return (
    <div className="App">

      <Router>
        <Switch>
        <Route exact path="/">
            <Landing/>
        </Route>

          <Route exact path="/speller">
            <SpellingPage/>
          </Route>

          <Route exact path="/missedwords">
            <DictPage />
          </Route>

          <Route exact path="/flashcards">
            <FlashCardPage />
          </Route>

        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
