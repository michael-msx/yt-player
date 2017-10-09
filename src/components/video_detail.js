import React, { Component } from 'react';

export default class VideoDetail extends Component {
  render() {

    const video = this.props.video
    if (!video) {
      return <div>Loading...</div>
    }
    const videoId = video.id.videoId
    const url = `https://www.youtube.com/embed/${videoId}`

    return (
      <div className="video-detial">
        <iframe title='yp-player' src={url}></iframe>
        <div className="detail">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }

}
