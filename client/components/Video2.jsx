import React from 'react';
import YouTube from 'react-youtube';

class Video2 extends React.Component {
    onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
      console.log(event.target);
    }

    render() {
      const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
   
      return (
      
      <YouTube videoId="HcC5Zozv7qU" opts={opts} onReady={this.onReady} />
      )
    }
   
  }

export default Video2;
