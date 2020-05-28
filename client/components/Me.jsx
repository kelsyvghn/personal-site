import React from 'react';
import styles from '../css/me.module.css';
import photo from '../../public/resources/Me.jpg';

const Me = () => {
    return (
        <div className={styles.image}>
            <img src={photo}/>
            </div>
    )
}

export default Me;