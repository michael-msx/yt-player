import React from 'react';
import {Media, ListGroupItem} from 'react-bootstrap'

export default class VideoListItem extends React.Component {
  render() {
    const video = this.props.video
    const imageUrl = video.snippet.thumbnails.default.url

    return (
      <ListGroupItem>
          <Media onClick={() => this.props.onVideoSelect(video)}>
            <Media.Left align="top">
              <img src={imageUrl} alt='video'/>
            </Media.Left>
            <Media.Body>
              <Media.Heading>{video.snippet.title}</Media.Heading>
                {video.snippet.description}
            </Media.Body>
          </Media>
      </ListGroupItem>
    );
  }
}
