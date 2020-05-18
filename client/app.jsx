import React from 'react';
import ReactDOM from 'react-dom';
import { ajax } from 'jquery';
import Line from './components/Line.jsx';
import styles from './css/title.module.css';
import MyMap from '../resources/MyMap.png';
import Arrow from './svgs/Arrow.jsx';
import Arrow2 from './svgs/Arrow2.jsx';
import Summary from './components/Summary.jsx';
import Links from './components/Links.jsx';
import Me from './components/Me.jsx';

export default class App extends React.Component{

  // componentDidMount(){
  //     ajax({
  //         type: 'get',
  //         url: 'http://localhost:4000/',
  //         success: success => console.log('success'),
  //         error: e => console.log('error loading!')
  //     })
  // }
    
  render(){
    return (
        <div className={styles.title}>
      <Me />
      <h1>Kelsy Vaughn</h1>
      <h2>Full Stack Software Engineer</h2>
    <Summary />
    <Links />
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
