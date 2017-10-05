import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import Videolist from './components/video_list'
import config from './conf'

const API_KEY = config.API_KEY

class App extends Component {

  constructor(props) {
    super(props);
    this.state={videos : [] }

    YTSearch({key:API_KEY, term: ''}, (videos) => {
      this.setState({videos})
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Youtube Video Player</h1>
        </header><br/>

        <SearchBar />
        <Videolist videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
