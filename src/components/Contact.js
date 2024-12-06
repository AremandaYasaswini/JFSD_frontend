import React from 'react';
import '../css/contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <section className="contact-section">
        <h2 className="section-title">Get in Touch</h2>
        <p>
          We would love to hear from you! Whether you have questions about our services, need support, or just want to say hello, feel free to reach out to us.
        </p>
        <div className="contact-details">
          <p><strong>Email:</strong> harvesthaven@gmail.com</p>
          <p><strong>Phone:</strong> +123-456-7890</p>
          <p><strong>Address:</strong> Guntur</p>
        </div>
        <a href="mailto:harvesthaven@gmail.com" className="btn-contact">Send Us an Email</a>
      </section>
      <section className="contact-section">
        <h2 className="section-title">Follow Us</h2>
        <p>Stay connected with us through social media:</p>
        <ul className="social-media-list">
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
