import React from 'react';
import VideoItem from './VideoItem';

// Kerangka video list, nantinya pada saat sukses melakukan hit API Youtube maka component ini akan diisi oleh component VideoItem.js
const Content = ({ videos, onVideoSelect }) => {
  // Mapping dari JSON API Youtube
  const renderedList = videos.map((video, index) => {
    return <VideoItem key={index} onVideoSelect={onVideoSelect} video={video} />;
	});
	
  return (
    <div className="col-md-12 mt-3">
        <div className="row">
            {renderedList}
        </div>
    </div>
  );
}

export default Content;