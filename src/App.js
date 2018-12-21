import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/common/Header';
import Recommend from './components/pages/Recommend';
import Hotsongs from './components/pages/Hotsongs';
import Search from './components/pages/Search';
import Playlist from './components/pages/Playlist';
import SongPlayer from './components/pages/SongPlayer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={ Recommend } />
          <Route path="/hotsongs" component={ Hotsongs } />
          <Route path="/search" component={ Search } />
          <Route path="/playlist/:id" component={ Playlist } />
          <Route path="/song/:id" component={ SongPlayer } />
        </div>
      </Router>
    );
  }
}

export default App;
