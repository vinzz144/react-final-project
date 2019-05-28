import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import youtube from './Youtube';
import Content from './components/Content';
import Home from './components/Home'
import VideoDetail from './components/VideoDetail';
import { BrowserRouter as Router, Route, Redirect }  from 'react-router-dom';

import Login from './components/Login';
import History from './components/History';

class App extends React.Component {
  
  state = { 
    videos: [], selectedVideo: null  };

   searchvideo = async (keyword) =>{
    const response = await youtube.get('/search', {
      params: {
        q: keyword
      }
    });

    // console.log(response);

    this.setState({
      videos: response.data.items
    });
  }

  async componentDidMount() {   
    const urlParams = new URLSearchParams(window.location.search);
    const keyword = urlParams.get('q');

    if(keyword!==null){
      // console.log(keyword);
      this.searchvideo(keyword);
    }
    else{
      this.searchvideo('lazy monday');
    }
  }

  

  // onFormSubmit = async (keyword) =>{
  
  //   this.searchvideo(keyword);
  // }
  
  render(){
    return (      
      <Router>
        <div className="App">
          <Navbar onFormSubmit={this.onFormSubmit} />
          <div className="container">
            <Route exact path='/' render={() => (
              <Content videos={this.state.videos} />
            )} />
            <Route path='/login' component={Login} />
            <Route path='/history' component={History} />       
            <Route exact path='/video/detail/:videoid' component={VideoDetail} />
          </div>
        </div>      
      </Router>
    );
  }
}

export default App;
