'use strict'
import React from 'react'
import Section from './Section'
import { DivIfPresent } from '../_common'
import styles from './HorizontalBar.module.scss'

export default ((props) => {

    console.log("Rendering HorizontalBar: " + props.title);

    return (
        <Section {...props} className={styles.bar}>

            <DivIfPresent show={props.title}>
                <h1>{props.title}</h1>
            </DivIfPresent>
            <DivIfPresent show={props.subtitle}>
                <h2>{props.subtitle}</h2>
            </DivIfPresent>
            {props.children}

        </Section>
    );
});

