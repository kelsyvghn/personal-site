import React from 'react';
import ReactDOM from 'react-dom';
import Line from '../../components/Line.jsx';
import Links from '../../components/Links.jsx';
import styles from './about.css';
// import rowan from '/Users/kelsyvaughn/Documents/Coding Projects/personal_website/resources/rowan.jpg';
// import sky from '/Users/kelsyvaughn/Documents/Coding Projects/personal_website/resources/sky.jpg';

export default class AboutMe extends React.Component{

    render(){
        return (
          <>
            <div className={styles.me}>
        <p>Hello and welcome to my personal website! Personally, I don't like to share too much on the first day, but for you, I'll make an exception. After all, you did take the time to look me up. I've lived in San Diego for the better part of half my life, moving around since birth, to Montana, Minnesota, Ohio, and Los Angeles; but I've always considered San Diego my home. I was born here, after all, and what's not to love?!
        </p>
        <p>
        In 2004 I graduated from Redlands High School in San Bernadino, CA, and since then I've had some pretty awesome experiences. I moved to Leeds, in England, where I studied Architecture and learned the ways of real football and got to know a culture a lot different from my own in California. A place where sunshine was revered and days off were spent at the pub with friends. After a year I moved back to San Diego, continued studying Architecture at NewSchool of Architecture and Design, and did my best to enjoy southern California as an adult. It was two years into my degree that I decided to venture down a different more affordable path, away from a private school and into the public at the University of California, Davis. As much as I loved Architecture, I realized it wasn't the career for me. Lost and unwitting, I pursued Anthropology because I loved learning about our genetic history and understanding evolution. And, because I loved reading and writing, I graduated with a minor in English.
        </p>
        <p>
        After college, I decided against a graduate degree, despite having gotten into some pretty okay schools. Instead, I decided to serve my country and do something only 1% of the population ever does (and even fewer women do), which was to join the military. I packed up my bags and joined the Navy in 2014. In the Navy, I did a lot of awesome things, but I also did some really difficult things. It was definitely a challenge, but I took it all in stride. I worked as an Electronics Technician, repairing, maintaining, and programming systems prior to deployment and man, I was pretty good at that. I loved it, you might say, but I didn't like the Navy much. It's hard being away from family all the time. So after 6 years of working in tech with the Navy, I decided to go into a different sector... and I began programming.
        </p>
        <p>As a lover of creativity, I also have been slowly but surely working towards a Master's in English so I can feel comfortable about also writing fiction in my spare time. 
            Much like everything in my life, it's a bit of a lifelong passion project. And so far I've written two books.</p>
        <p>
        I live in San Diego with my two wonderful dogs, Rowan and Sky. Sky, my beautiful white shepherd, was rescued from Bahrain and has been with me since my very first deployment in the Navy! Rowan, my shorthaired pointer,  is my running partner and coding chair sidekick (he loves sitting behind me while I type away)!    
        </p>
        <p> 
        </p>
        </div>
        <div className={styles.links}>
        {/* <Line color="turquoise" /> */}
        <Links />
        </div>

            </>
        )
    }
}

ReactDOM.render(<AboutMe />, document.getElementById('about'));
