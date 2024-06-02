'use strict'
import React, {useState} from 'react'
import SocialMediaList from '../section/SocialMediaList'

import styles from './ContactModule.module.scss'


export default ((props) => {

    const { contact, action, method, apiUrl } = props;

    console.log("Rendering ContactContainer for "+apiUrl);

    // Step 1: Set up state
    const [formData, setFormData] = useState({
        to: props.to,
        name: '',
        email: '',
        number: '',
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
                    throw new Error('We are unable to send contact information at this time ' + response.statusText);
                }
                // Parse the response as JSON
                return response.json();
            })
            .then(data => {
                // Handle the data (success case)
                if(data["sent"] === false) {
                    console.error('There was a problem with the email operation:', response);
                    throw new Error('We are unable to send contact information at this time ' + response.statusText);
                }
                console.log('Success:', data);
                document.getElementById("contact_form").style.display = 'none';
                document.getElementById("contact_form_message").textContent = 'Thanks!  Your details have been sent to us : '+data["message"];
                document.getElementById("contact_form_message").classList.add(styles.success);
            })
            .catch(error => {
                // Handle any errors (network or other)
                console.error('There was a problem with the fetch operation:', error);
                console.error('There was a problem with the fetch operation:', error.message);
                document.getElementById("contact_form").style.display = 'none';
                document.getElementById("contact_form_message").textContent = error;
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
                          <label htmlFor="to">
                              <input
                                  id="to"
                                  type="text"
                                  name="to"
                                  defaultValue={formData.to}
                                  hidden={true}
                              />
                          </label>
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

                          <label htmlFor="number">
                              <input
                                  id="number"
                                  type="text"
                                  name="number"
                                  placeholder="Phone Number"
                                  value={formData.number}
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

                          <button className={"button button--primary " + styles.submit_btn} id="submit_btn">Submit
                          </button>
                      </fieldset>
                  </form>
              </div>
          </div>
          <div className="col col--6">
              <div className={styles.contact_text}>
                  <p>{contact.footnote}</p>
                  <h3>contact info</h3>
                  <ul className={styles.contact_info}>
                      {contact.address.map((detail, idx) =>
                          <li key={'contact.detail.' + idx}>{detail}</li>
                      )}
                  </ul>
                  <h3>{contact.follow}</h3>
                  <SocialMediaList social={contact.social} />
              </div>
          </div>
      </div>
    );
});
