'use strict'
import React from 'react'

import styles from './ServiceModule.module.scss'


export default ((props) => {

    console.log("Rendering ServiceModule");

    return (
        <div className={styles.service_bar}>

          {props.services.map((service,idx)=>
            <div key={'service.'+idx} className={styles.service_box}>
                <div className={styles.service_point}>
                    <div className={styles.ico}>
                        <i className={service.icon}></i>
                    </div>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                </div>
            </div>
          )}

        </div>
    );
});
