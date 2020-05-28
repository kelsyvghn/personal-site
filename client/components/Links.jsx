import React from 'react';
import styles from '../css/links.module.css';
import Insta from '../svgs/Insta.jsx';
import LinkedIn from '../svgs/LinkedIn.jsx';
import Youtube from '../svgs/Youtube.jsx';
import Github from '../svgs/Github.jsx';
import Twitter from '../svgs/Twitter.jsx';
import Facebook from '../svgs/Facebook.jsx';
import Spotify from '../svgs/Spotify.jsx';
import iTunes from '../svgs/iTunes.jsx';
import Resume from '../svgs/Resume.jsx'
import resume from '../../public/resources/resume.jpg'
import Contact from './Contact.jsx';
import Line from './Line.jsx';
import Mail from '../svgs/Mail.jsx';
import Phone from '../svgs/Phone.jsx';

const Links = () => {
    return (
<div className={styles.links}>
    {/* <Line color="turquoise"/> */}
<div className={styles.footer}> 
    <a href="https://www.instagram.com/coder_kelsy/"><Insta /></a>
    <a href="https://www.linkedin.com/in/kelsyavaughn/"><LinkedIn /></a>
    <a href="https://github.com/kelsyvghn"><Github /></a>
    <a href="https://www.youtube.com/channel/UCuWCTc_1TtHYJ9dW4PJjWZw?view_as=subscriber"><Youtube /></a>
    <a href="https://twitter.com/Vghnkels"><Twitter /></a>
    <a href={resume} style={{"textDecoration": "none", "color": "black"}}><Resume /></a> 
    <a href="mailto: kelsyavaughn@gmail.com"><Mail /></a>
     </div> 
    <ul className={styles.flaticon}><li>Icons made by<a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
            <li>And Handrawn by: </li>
              <li>Kelsy Vaughn</li>
              <li>
               2020
              </li>
            </ul> 
</div>
    )
}

export default Links;