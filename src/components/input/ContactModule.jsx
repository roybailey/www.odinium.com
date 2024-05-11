'use strict'
import React from 'react'
import SocialMediaList from '../section/SocialMediaList'

import styles from './ContactModule.module.scss'


export default ((props) => {

    const { contact } = props;

    console.log("Rendering ContactContainer");

    return (
      <div className={"row "+styles.contact_section}>
          <h1>{contact.title}</h1>
          <p>{contact.description}</p>

          <div className="col col--6">
              <div className={styles.contact_form}>
                  <fieldset id="contact_form">
                      <div id="result"></div>
                      <label htmlFor="name">
                          <input type="text" name="name" id="name" placeholder="Enter Your Name" />
                      </label>

                      <label htmlFor="email">
                          <input type="email" name="email" id="email" placeholder="Enter Your Email" />
                      </label>

                      <label htmlFor="phone">
                          <input type="text" name="phone" id="phone" placeholder="Phone Number" />
                      </label>

                      <label htmlFor="message">
                          <textarea name="message" id="message" placeholder="Enter Your Message"></textarea>
                      </label>

                      <button className={"button button--primary "+styles.submit_btn} id="submit_btn">Submit</button>
                  </fieldset>
              </div>
          </div>
          <div className="col col--6">
              <div className={styles.contact_text}>
                  <p>{contact.footnote}</p>
                  <h3>contact info</h3>
                  <ul className={styles.contact_info}>
                      {contact.address.map((detail,idx)=>
                        <li key={'contact.detail.'+idx}>{detail}</li>
                      )}
                  </ul>
                  <h3>{contact.follow}</h3>
                  <SocialMediaList social={contact.social} />
              </div>
          </div>
      </div>
    );
});
