'use strict'
import React from 'react'

import {
    AccordionTitle,
    AccordionContent,
    Accordion,
    Message,
    Label,
    Icon,
} from 'semantic-ui-react'
import styles from './InformationSemantic.module.scss'


export default ((props) => {

  const { information } = props;

  console.log("Rendering InformationSemantic");

    const panels = information.map((profile,idx)=> ({
        key: `panel-${idx}`,
        title: {
            content: (<h4 className={[styles.panel__title].join(' ')}>{profile.title}</h4>),
        },
        content: {
            content: (
                <div key={'content' + idx} className={styles.panel__description}>{profile.description}</div>
            ),
        },
    }))

    return (
        <div className={styles.panel}>
            <Accordion panels={panels}/>
        </div>
  );
});


