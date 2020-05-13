import React from 'react';
import styles from '../css/me.module.css';

const AboutMe = ({ show, handleClose, children }) => {
    const showHideClassName = show ? `${styles.displayAll}` : `${styles.displayFade}`;

    return (
        <div className={showHideClassName}>
            <section className={styles.me}>
        <p>Hello and welcome to my personal website! Everything here is made by yours truly and I am truly excited that you want to know more! 
            Personally, I don't like to share too much on the first day, but for you, I'll make an exception. After all, you did take the time to look me up.
            I've lived in San Diego for the better part of half my life, moving around since birth, to Montana, Minnesota, Ohio, and Los Angeles; but I've always considered San Diego my home. I was born here, after all.
        </p>
        <p>
            In 2004 I graduated from Redlands High School in San Bernadino, CA, and since then I've had some pretty awesome experiences. I moved to Leeds, in England, where I studied Architecture and
            learned the ways of real football and got to know a culture a lot different from my own in California. A place where sunshine was revered and days off were spent at the pub with friends.
            After a year I moved back to San Diego, continued studying Architecture at NewSchool of Architecture and Design, and did my best to enjoy southern California as an adult. 
            It was two years into my degree that I decided to venture down a different more affordable path, away from a private school and into the public at the University of California, Davis. 
            As much as I loved Architecture, I realized it wasn't the career for me. Lost and unwitting, I pursued Anthropology because I loved learning about our genetic history and understanding evolution.
            And, because I loved reading and writing, I graduated with a minor in English.
</p>
<p>
        After college, I decided against a graduate degree, despite having gotten into some pretty okay schools. Instead, I decided to serve my country and do something only 1% of the population ever does (and even less women do), which was
        join the military. I packed up my bags and joined the Navy in 2014, just as Obama prepared to run for his second term in office. 
        In the Navy I did a lot of awesome things, but I also did so really difficult things. It was definitely a challenge, but I took it all in stride. I worked as an Electronics Technician, 
        repairing, maintaining, and programming systems prior to deployment and man, I was pretty good at that. I loved it, you might say, but I didn't like the Navy much. It's hard being away from family all the time. So after 6 years of working
        in tech with the Navy, I decided to go into a different sector... and I began programming. 
</p>
<p>
    By now you're probably wondering how much longer this goes, and the truth is, I don't know. I'm done for now, but as always, life has much more in store for me I'm sure. I am here (and so are you), and I'm excited to see where I go next. 
</p>
<p> 
    If you're curious, I've got an AWESOME link to where I've been in the world on my home page. Have a look!
    And as always, feel free to reach out!
</p>
<button onClick={handleClose}>close X</button>
</section>
        </div>
    )
}

export default AboutMe;