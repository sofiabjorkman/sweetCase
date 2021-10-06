import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/HomePage';
import Application from './components/Application';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />

      <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/application" component={Application} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
