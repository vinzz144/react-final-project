import React from 'react';
import './VideoItem.css';
import {Link} from 'react-router-dom'

// Component video list pada saat melakukan pencarian
const VideoItem = ({ video}) => {
    //onClick={() => onVideoSelect(video)}
    console.log(video);
  return (
         
    <div className="col-md-3">
      <div className="card-horizontal">
        <div className="img-square-wrapper">
        <Link title={video.snippet.title} to={'/video/detail/'+video.id.videoId}><img src={video.snippet.thumbnails.high.url} height="100" alt={video.snippet.title} /></Link>
        </div>
        <div className="card-body">
          <div className="video-title"><Link title={video.snippet.title} to={'/video/detail/'+video.id.videoId}>{video.snippet.title}</Link></div>
          <div className="video-maker">By: {video.snippet.channelTitle}</div>
        
        </div>
      </div>
    </div>
  );
}

export default VideoItem;