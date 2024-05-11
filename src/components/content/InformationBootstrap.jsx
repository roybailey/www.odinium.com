'use strict'
import React from 'react'

import Accordion from 'react-bootstrap/Accordion';
import styles from './InformationBootstrap.module.scss'


export default ((props) => {

  const { information } = props;

  console.log("Rendering InformationBootstrap");

  return (
      <div className={styles.panel}>
          <Accordion>
              {information.map((item,idx)=>
              <Accordion.Item eventKey={idx}>
                  <Accordion.Header className={styles.panel_header}>
                      <h4 className={["panel-title", styles.panel__title].join(' ')}>
                          <a className={idx === 0 ? "open" : "collapsed"} data-toggle="collapse"
                             data-parent="#accordion" href={"#collapse" + idx} aria-expanded={idx === 0}
                             aria-controls={"collapse" + idx}>
                              {item.title}
                          </a>
                      </h4>
                  </Accordion.Header>
                  <Accordion.Body className={styles.panel_body}>
                      <div className={["panel-body", styles.panel__description].join(' ')}
                           dangerouslySetInnerHTML={{__html: item.description}}></div>
                  </Accordion.Body>
              </Accordion.Item>
              )}
          </Accordion>
      </div>
  );
});


