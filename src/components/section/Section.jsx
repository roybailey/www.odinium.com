'use strict'
import React from 'react'
import styles from './Section.module.scss'

export default ((props) => {

    let namespace = props.namespace || props.id || 'unknown';
    console.log("Rendering Section " + namespace);

    return (
        <section id={props.id} className={props.className}>
            <div className="container">
                <div className="row">
                    {props.children}
                </div>
            </div>
        </section>
    );
});
