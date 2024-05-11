'use strict'
import React from 'react'

import styles from './TimeBar.module.scss'


export default ((props) => {

    const {dataset} = props;

    console.log("Rendering TimeBar");

    return (
        <ul className={styles.timebar}>
            {dataset.map((data, idx) => <li key={'timebar.' + idx}>
                <div className={styles.timebar__date}>{data.date}</div>
                <div className={styles.timebar__title}>{data.title}</div>
                <div className={styles.timebar__subtitle}>{data.subtitle}</div>
                <div className={styles.timebar__desc}>{data.description}</div>
            </li>)}
        </ul>
    );
});
