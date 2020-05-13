import React from 'react';
import Phone from './svgs/Phone.jsx';
import Line from './components/Line.jsx';
import ReactDOM from 'react-dom';
import { ajax } from 'jquery';
import styles from './css/title.module.css';
import AboutMe from './components/AboutMe.jsx';
import MapMe from './components/MapMe.jsx';
import Insta from './svgs/Insta.jsx';
import LinkedIn from './svgs/LinkedIn.jsx';
import Youtube from './svgs/Youtube.jsx';
import Github from './svgs/Github.jsx';
import Twitter from './svgs/Twitter.jsx';
import Facebook from './svgs/Facebook.jsx';
import Spotify from './svgs/Spotify.jsx';
import iTunes from './svgs/iTunes.jsx';
import Mail from './svgs/Mail.jsx';
import MyMap from '../resources/MyMap.png';
import Arrow from './svgs/Arrow.jsx';
import Arrow2 from './svgs/Arrow2.jsx';
import Resume from './svgs/Resume.jsx'
import resume from '../resources/resume.jpg'
import RecentProjects from './components/RecentProjects.jsx';
import Video from './components/Video.jsx';
import Video2 from './components/Video2.jsx';
import Summary from './components/Summary.jsx';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            showMain: true,
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    componentDidMount(){
        ajax({
            type: 'get',
            url: 'http://localhost:4000/',
            success: success => console.log('success'),
            error: e => console.log('error loading!')
        })
    }

    showModal() {
        console.log('show modal was invoked');
        this.setState({ 
          show: true, 
          showMain: false,
        });
      }
    
      hideModal() {
        this.setState({ 
          show: false,
          showMain: true,
        });
      }
    
    render(){
        const { show, showMain } = this.state;
        // const showHideClassName = showMain ? `${styles.displayAll}` : `${styles.displayFade}`;
        return (
            <div className={styles.title}>
          <div >
          <h1>Kelsy Vaughn</h1>
          <h2>Full Stack Software Engineer/ Developer / Author</h2>
                <h2>You Are Here</h2>
            <Arrow2 />
            <Summary />
          <Line color="white" />
                <Arrow />
                <h2>Recent Projects</h2>
                <div className={styles.middle}>
                    <RecentProjects />
                    <Video2 />
                    <Video />
                </div>
                <div className={styles.map}>
                <Arrow />
                <div className={styles.button}>
                    <AboutMe show={show} handleClose={this.hideModal} />
                    <button type="button" onClick={this.showModal}>Wanna Know More (click here)</button>
                    <Line color="yellow" />
                </div>

                <h2>My World Map</h2>
               <img src={MyMap} />
                </div>
                <Arrow />
                <Line color="turquoise" />
                <div className={styles.footer}>
                    <div className={styles.linksLeft}>
                    <h3>Links</h3>
                    <a href="https://www.instagram.com/cali_kelsy/"><Insta /> </a>
                    <a href="https://www.linkedin.com/in/kelsyavaughn/"><LinkedIn /> </a>
                    <a href="https://github.com/kelsyvghn"><Github /> </a>
                    <a href="https://www.youtube.com/channel/UCuWCTc_1TtHYJ9dW4PJjWZw?view_as=subscriber"><Youtube /> </a>
                    <a href="https://twitter.com/Vghnkels"><Twitter /> </a>
                    {/* <a href="https://www.instagram.com/cali_kelsy/"><Spotify /> </a> */}
                    {/* <a href="https://www.instagram.com/cali_kelsy/"><iTunes /> </a> */}
                    {/* <a href="https://www.instagram.com/cali_kelsy/"><Facebook /> </a> */}
                    </div>
                    <div className={styles.linksCenter}>
                    <h3>Contact</h3>
                    <a href="mailto: kelsyavaughn@gmail.com"><Mail /></a>
                    <a href="tel: +18589254330"><Phone /></a>
                    </div>
                    <div className={styles.linksRight}>
                    <h3>Resume</h3>
                    <a href={resume}><Resume /></a> 
                    </div>
                    </div>
                    <div className={styles.flaticon}>Icons made by<a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
