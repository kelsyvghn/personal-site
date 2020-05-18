import React from 'react';
import styles from '../css/me.module.css';
import photo from '/Users/kelsyvaughn/Documents/Coding Projects/personal_website/resources/Me.png';

const Me = () => {
    return (
        <div className={styles.image}>
            <img src={photo}/>
            </div>
    )
}

export default Me;