import React from 'react';
import ReactDOM from 'react-dom';
import Line from '../../components/Line.jsx';
import Links from '../../components/Links.jsx';
import Video from './Video.jsx';
import Video2 from './Video2.jsx';
import styles from './projects.css';
import Github from '../../svgs/Github.jsx';
import Arrow from '../../svgs/Arrow.jsx';

export default class RecentProjects extends React.Component{
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
        <>
        <main>
        <div className={styles.arrow}>
    <h1><Arrow /></h1>
        </div>
        <section className={styles.video} id={styles.center}>
        <a href="https://github.com/Soundiverse/SDC-sidebar-service"><Github />Code on Github</a>
        {/* <Video2 /> */}
    <a href="">
                <h1 className={styles.title}>
                    GreenHouse App
                        </h1>
                    <h2 className={styles.font}>
                   - Project: A long-range money tracking application that allows users to link bank accounts, credit cards, etc., to track spending, budget, and project long-term interest costs and savings. 
                    </h2>
                    <p className={styles.font}>
                   - I was tired of using an excel sheet to track my budget and predict or calculate approximately how much I might save with a certain bill or credit card if I paid it off early. The goal of this application is to remove that guesswork and calculate precisely what you'll save 
                   over the course of 3-12 months by paying things off early, depositing extra cash into an account, or if you have to unfortunately pay a bill late. It also can help determine the best ways to save, spend, and avoid extra costs over time. 
                    </p>
                    <h3 className={styles.frameworks}>
                   - React-Native, Javascript, PostgreSQL, Node, Google VM/Cloud
                    </h3>
    </a>
        </section>     
<div className={styles.clearfix}></div> 
        <section className={styles.video} id={styles.top}>
        <a href="https://github.com/kelsyvghn/my-workout-app"><Github />Code on Github</a>
        {/* <Video2 /> */}
    <a href="https://www.youtube.com/watch?v=HcC5Zozv7qU">
                <h1 className={styles.title}>
                    TrackHiit Mobile ios Workout Application
                        </h1>
                    <h2 className={styles.font}>
                    - Project: a mobile fitness application that utilizes React Native to track workout routines and maintain a record of weights, reps, and time spent on various muscle groups in order to track and maintain a better workout regime.
                    </h2>
                    <p className={styles.font}>
                    - My goal was to make a user-friendly application that I might use to track different routines when I workout, so I’m not scrambling to remember what I did last time or what weight set I was at.
                    </p>
                    <h3 className={styles.frameworks}>
                    - React-Native, MongoDB, Node/Express
                    </h3>

    </a>
        </section>
        <section className={styles.video} id={styles.center}>
        <a href="https://github.com/Soundiverse/SDC-sidebar-service"><Github />Code on Github</a>
        {/* <Video2 /> */}
    <a href="">
                <h1 className={styles.title}>
                    Sidebar Music Backend
                        </h1>
                    <h2 className={styles.font}>
                   - Project: music and playlist sharing app, my component was specifically the sidebar element that displays related playlists and songs as well as other users who like and have shared the current song or playlist.
                    </h2>
                    <p className={styles.font}>
                   - My Goal in building out the backend: was to get it to accept over 1000 requests per second on a t2 micro Amazon EC2 instance, in under 2000 ms per request.
                    </p>
                    <h3 className={styles.frameworks}>
                   - Postgres, CassandraDB, Node, Express, AWS/EC2, Docker, K6, New Relic, loader.io
                    </h3>
    </a>
        </section>     
<div className={styles.clearfix}></div>
        <section className={styles.video} id={styles.bottom}>
        <a href="https://github.com/wonder4-com/see-all-photos-services"><Github />Code on Github</a>
        {/* <Video /> */}
    <a href="https://www.youtube.com/watch?v=hon0BYuzFak&t=20s">
                <h1 className={styles.title}>
                    Services Photo and Review Application
                    </h1>
                    <h2 className={styles.font}>
                    - Project: a services review and photo sharing app, like Yelp, that allows users to submit reviews, share photos, see menu items and ratings, within a single-page application.
                    </h2>
                    <p className={styles.font}>
                    - My goal was to build a nice, seamless, photo carousel and modal to display user and restaurant photos.
                    </p>
                    <h3 className={styles.frameworks}>
                    - ReactJS, Node/Express, MongoDB, AWS/S3, Docker
                    </h3>
    </a>
        </section>
        </main>
        <footer>
        <Line color="turquoise"/>
    <Links />
        </footer>
        </>
    )
    }
}

ReactDOM.render(<RecentProjects />, document.getElementById('projects'));
