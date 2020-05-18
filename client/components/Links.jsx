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
import resume from '../../resources/resume.jpg'
import Contact from './Contact.jsx';
import Line from './Line.jsx';

const Links = () => {
    return (
<div className={styles.links}>
    <div className={styles.line}>
<Line color="turquoise" />

    </div>
<div className={styles.footer}> 
    <a href="https://www.instagram.com/coder_kelsy/"><Insta /></a>
    <a href="https://www.linkedin.com/in/kelsyavaughn/"><LinkedIn /></a>
    <a href="https://github.com/kelsyvghn"><Github /></a>
    <a href="https://www.youtube.com/channel/UCuWCTc_1TtHYJ9dW4PJjWZw?view_as=subscriber"><Youtube /></a>
    <a href="https://twitter.com/Vghnkels"><Twitter /></a>
    <Contact />
    <a href={resume} style={{"textDecoration": "none", "color": "peachpuff"}}><Resume />Resume</a> 
     </div> 
    <div className={styles.flaticon}>Icons made by<a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
</div>
    )
}

export default Links;