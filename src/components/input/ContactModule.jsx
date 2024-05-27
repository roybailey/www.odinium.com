'use strict'
import React, {useState} from 'react'
import SocialMediaList from '../section/SocialMediaList'

import styles from './ContactModule.module.scss'


export default ((props) => {

    const { contact, action, method } = props;

    console.log("Rendering ContactContainer");

    // Step 1: Set up state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Step 2: Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Step 3: Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Run your JavaScript function
        sendContactDetails();
    };

    // Example JavaScript function to run on form submission
    const sendContactDetails = () => {
        console.log('Form submitted:', formData);
        // Add your custom logic here
        // The URL of the API endpoint
        const apiUrl = 'https://api.odinium.com/email/v1/contact';

        // Make the API call using fetch
        fetch(apiUrl, {
            method: 'POST', // Set the method to POST
            headers: {
                'Content-Type': 'application/json' // Set the Content-Type header
            },
            body: JSON.stringify(formData) // Convert the data to JSON
        })
            .then(response => {
                // Check if the response is OK (status code 200-299)
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                // Parse the response as JSON
                return response.json();
            })
            .then(data => {
                // Handle the data (success case)
                console.log('Success:', data);
                document.getElementById("contact_form").style.display = 'none';
                document.getElementById("contact_form_message").textContent = 'Thanks!  Your details have been sent to us.<br/>'+JSON.stringify(data, null, 2);
                document.getElementById("contact_form_message").classList.add(styles.success);
            })
            .catch(error => {
                // Handle any errors (network or other)
                console.error('There was a problem with the fetch operation:', error);
                document.getElementById("contact_form").style.display = 'none';
                document.getElementById("contact_form_message").textContent = 'Contact service is not currently available, please try again another time';
                document.getElementById("contact_form_message").classList.add(styles.error);
            });
    };


    return (
      <div className={"row "+styles.contact_section}>
          <h1>{contact.title}</h1>
          <h3 id="contact_form_message">{contact.description}</h3>

          <div className="col col--6">
              <div className={styles.contact_form}>
                  <form onSubmit={handleSubmit}>
                      <fieldset id="contact_form">
                          <div id="result"></div>
                          <label htmlFor="name">
                              <input
                                  id="name"
                                  type="text"
                                  name="name"
                                  placeholder="Enter Your Name"
                                  value={formData.name}
                                  onChange={handleChange}
                              />
                          </label>

                          <label htmlFor="email">
                              <input
                                  id="email"
                                  type="email"
                                  name="email"
                                  placeholder="Enter Your Email"
                                  value={formData.email}
                                  onChange={handleChange}
                              />
                          </label>

                          <label htmlFor="phone">
                              <input
                                  id="phone"
                                  type="text"
                                  name="phone"
                                  placeholder="Phone Number"
                                  value={formData.phone}
                                  onChange={handleChange}
                              />
                          </label>

                          <label htmlFor="message">
                              <textarea
                                  name="message"
                                  id="message"
                                  placeholder="Enter Your Message"
                                  value={formData.message}
                                  onChange={handleChange}
                              ></textarea>
                          </label>

                          <button className={"button button--primary "+styles.submit_btn} id="submit_btn">Submit</button>
                      </fieldset>
                  </form>
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
