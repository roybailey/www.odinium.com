'use strict'
import React from 'react'

import styles from './ShoutOutPanel.module.scss'

export default ((props) => {

    console.log("Rendering ShoutOutPanel");

    let image = (props.image)? <img className={styles.shoutoutAvatar} src={props.image}/> : '';

    let author = (props.author)? (
        <div className={styles.shoutoutAuthor}>
            <a href={props.href}>{props.author}</a>
        </div>
      ) : '';

    let shoutStyle = (props.display === "normal")? styles.quote : styles.shoutout;

    let animate = (props.animate)? "animate__animated "+props.animate : '';

    return (
        <blockquote className={[shoutStyle,animate].join(' ')}>
            {image}
                “<span>{props.quote}</span>”
            {author}
        </blockquote>
    );
});
