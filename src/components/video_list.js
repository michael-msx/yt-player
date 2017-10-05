import React from 'react';
import VideoListItem from './video_list_item'
import {ListGroup} from 'react-bootstrap'

export default class VideoList extends React.Component {

  render() {
    const Videolist = this.props.videos.map((video) =>{
        return <VideoListItem key={video.etag} video={video} />
    })

    return (
      <div>
        <ListGroup>
          {Videolist}
        </ListGroup>
      </div>
    );
  }
}
