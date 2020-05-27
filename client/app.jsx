import React from 'react';
import ReactDOM from 'react-dom';
import { ajax } from 'jquery';
import Line from './components/Line.jsx';
import styles from './css/title.module.css';
import Arrow from './svgs/Arrow.jsx';
import Arrow2 from './svgs/Arrow2.jsx';
import Summary from './components/Summary.jsx';
import Links from './components/Links.jsx';
import Me from './components/Me.jsx';
import Name from './svgs/Name.jsx';
import Subtitle from './svgs/Subtitle.jsx';
import AboutMe from './svgs/AboutMe.jsx';
import Projects from './svgs/Projects.jsx';


export default class App extends React.Component{

  render(){

    return (
        <div className={styles.title}>
          <div className={styles.opening}>
      <Me />
      <div className={styles.name}>
  <Name />
      </div>
      <div className={styles.subtitle}>
     <Subtitle />
        <div className={styles.arrow}>
      <AboutMe /><Arrow />
        </div>
      </div>
          </div>
      {/* <div className={styles.icons}>
      <Icons />
      </div> */}
      <div className={styles.summary}>
    <Summary />
      </div>
    <Links />
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
