import React, { useState } from 'react';

const MyFormComponent = () => {
    // Step 1: Set up state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
        myJavaScriptFunction();
    };

    // Example JavaScript function to run on form submission
    const myJavaScriptFunction = () => {
        console.log('Form submitted:', formData);
        // Add your custom logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Message:</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default MyFormComponent;
