// src/components/FeedbackForm.js
import React, { useState } from 'react';
import '../css/feedback.css';
const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Buyer');
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState('General Feedback');
  const [comments, setComments] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    setSuccess(true);
  };

  return (
    <div>
      {success && <p>Thank you for your feedback!</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Buyer">Buyer</option>
            <option value="Farmer">Farmer</option>
            <option value="Admin">Admin</option>
          </select>
        </label>
        <label>
          Rating:
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value={0}>Select Rating</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <label>
          Feedback Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="General Feedback">General Feedback</option>
            <option value="Bug Report">Bug Report</option>
            <option value="Feature Request">Feature Request</option>
          </select>
        </label>
        <label>
          Comments:
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </label>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
