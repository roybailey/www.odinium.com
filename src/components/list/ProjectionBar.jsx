'use strict'
import React from 'react'

import styles from './ProjectionBar.module.scss'


export default ((props) => {

    const { projection } = props;
    //const styles = { width: ''+(100/projection.length)+'%' };

    console.log("Rendering ProjectionBar");

    return (
        <div className="module-content">

            <ul className={styles.projection}>
                {projection.map((point,idx)=>
                    <li key={'projection.'+idx} className={styles.item} style={{width: (100/projection.length)+'%'}}>
                        <div className={styles.station}>
                            <div className={styles.title}>{point.title}</div>
                            <div className={styles.date}>{point.subtitle}</div>
                        </div>
                        <div className={styles.description} dangerouslySetInnerHTML={{__html: point.description}}></div>
                    </li>
                )}
            </ul>

        </div>
    );
});
