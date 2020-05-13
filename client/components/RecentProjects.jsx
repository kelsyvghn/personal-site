import React from 'react';
import YouTube from 'react-youtube';

class RecentProjects extends React.Component {
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
      <YouTube videoId="hon0BYuzFak" opts={opts} onReady={this.onReady} />
      )
    }
   
  }

export default RecentProjects;
