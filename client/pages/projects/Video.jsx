import React from 'react';
import YouTube from 'react-youtube';
import styles from './projects.css';

class Video extends React.Component {
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
        <div className={styles.projectL}>
      <YouTube videoId="hon0BYuzFak" opts={opts} onReady={this.onReady} />
</div>
      )
    }
   
  }

export default Video;
