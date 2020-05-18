import React from 'react';
import YouTube from 'react-youtube';
import Video from '../client/components/Video.jsx';
import Video2 from '../client/components/Video2.jsx';
import styles from '../css/projects.module.css';

class ProjectClips extends React.Component {
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
        <div className={styles.rightAlign}>
      <YouTube videoId="hon0BYuzFak" opts={opts} onReady={this.onReady} />
      <Video2 />
      {/* <Video /> */}
      </div>
      )
    }
  }

export default ProjectClips;
