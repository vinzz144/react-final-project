import React from 'react';
import youtube from '../Youtube';

export default class VideoDetail extends React.Component {

  constructor(props) {
      super(props);
  }

  state={
    video:'',snippet:'',player:''
  }
  async componentDidMount() {

    this.setState({
        loading: true
    });
    const {
        match: {
            params: {
              videoid
            }
        }
    } = this.props;

    
    const response = await youtube.get('/videos', {
      params: {
        part: 'id,snippet,player',
        id: videoid
      }
    });
// console.log(response.data.items);
    this.setState({
      video: response.data.items[0],
      snippet: response.data.items[0].snippet,
      player:response.data.items[0].player
    })

  }

  render() {
    // console.log(this.state.snippet);
// return true;
    const detail=this.state.snippet;
    // console.log(detail);

      let videoSrc = `https://www.youtube.com/embed/${this.state.video.id}`;
      let desc=JSON.stringify(detail.description);

        return (
          <div className="col-md-12 mt-3 text-left">
            <div className="row">
              <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" title={detail.title} src={videoSrc} />

              </div>
              <div className="col-md-12 px-0 py-2">
                  <h4><a href={"https://www.youtube.com/channel/"+detail.channelId}>{detail.channelTitle}</a></h4>
                  <p>Published at: {detail.publishedAt}</p>
                </div>
              <div className="col-md-12 px-0 py-2 ">
                  <h4>{detail.title}</h4>
                  <p>{desc}</p>
              </div></div>
          </div>
        );
      
  }
}