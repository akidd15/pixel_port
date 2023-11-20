import React, { useState } from 'react';

const Contact = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const initialValidationMessages = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [validationMessages, setValidationMessages] = useState(
    initialValidationMessages
  );
  const [formSubmitted, setFormSubmitted] = useState(false);

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

    // Check if the form is valid before proceeding
    if (isFormValid()) {
      // Access the form data from the state
      console.log('Form Data:', formData);

      // Clear the form and show the submission notification
      setFormData(initialFormData);
      setValidationMessages(initialValidationMessages);
      setFormSubmitted(true);
    } else {
      console.log('Form is not valid. Please correct the errors.');
    }
  };

  const isFormValid = () => {
    // Check if all validation messages are empty
    return (
      validationMessages.name === '' &&
      validationMessages.email === '' &&
      validationMessages.message === ''
    );
  };

  return (
    <div>
      <h2>Contact</h2>
      {formSubmitted && (
        <div className="submission-notification">
          Form submitted successfully!
        </div>
      )}
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
