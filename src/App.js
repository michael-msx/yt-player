import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import Videolist from './components/video_list'
import config from './conf'
import VideoDetail from './components/video_detail'

const API_KEY = config.API_KEY

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      videos : [],
      selectVideo: null
    }
    this.go_search('')
  }

  go_search = (val) => {
    console.log('Search for :' + val)
    YTSearch({key:API_KEY, term: val}, (videos) => {
      this.setState({
        videos : videos,
        selectVideo : videos[0]
      })
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Youtube Video Player</h1>
        </header><br/>

        <SearchBar go_search = {this.go_search}/>
        <VideoDetail
          video={this.state.selectVideo}/>
        <Videolist
          onVideoSelect={selectVideo => this.setState({selectVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
