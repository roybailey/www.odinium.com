'use strict'
import React from 'react'
import { DivIfPresent } from "../_common";
import styles from './Panel.module.scss'

export default ((props) => {

    console.log("Rendering Panel: " + props.title);

    return (
        <div className={"module " + styles.panel}>

            <DivIfPresent show={props.title} className="module-header">
                <h1>{props.title}</h1>
            </DivIfPresent>

            <div className="module-content">
                {props.children}
            </div>

            <DivIfPresent show={props.footnote} className="module-footer">
                <h6>{props.footnote}</h6>
            </DivIfPresent>

        </div>
    );
});
