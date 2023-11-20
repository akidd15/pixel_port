import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [validationMessages, setValidationMessages] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateField = (fieldName, value) => {
    // Validation logic for each field
    switch (fieldName) {
      case 'name':
        setValidationMessages((prevMessages) => ({
          ...prevMessages,
          name: value.trim() ? '' : 'Name is required',
        }));
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setValidationMessages((prevMessages) => ({
          ...prevMessages,
          email: emailRegex.test(value) ? '' : 'Invalid email address',
        }));
        break;
      case 'message':
        setValidationMessages((prevMessages) => ({
          ...prevMessages,
          message: value.trim() ? '' : 'Message is required',
        }));
        break;
      default:
        break;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Additional logic for submitting the form, if needed
  };

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <div className="validation-message">{validationMessages.name}</div>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="validation-message">{validationMessages.email}</div>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
          <div className="validation-message">{validationMessages.message}</div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
