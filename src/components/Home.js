import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';
import fruitsImg from '../Images/Fruits.jpeg';
import vegetablesImg from '../Images/vegetables.jpeg';
import leafyVeggiesImg from '../Images/leafy_vegetables.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import the specific icons
import { faAppleAlt, faCarrot, faLeaf } from '@fortawesome/free-solid-svg-icons'; // Import additional icons for products

function Home() {
  const navigate = useNavigate();

  const handleProductNavigation = (category) => {
    navigate(`/products/${category}`);
  };

  const handleSignUp = () => {
    navigate('/register');
  };

  const handleSocialLink = (platform) => {
    const socialLinks = {
      facebook: 'https://www.facebook.com',
      twitter: 'https://www.twitter.com',
      instagram: 'https://www.instagram.com',
    };
    window.open(socialLinks[platform], '_blank');
  };

  return (
    <div className="Home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="dark-heading">Empowering Farmers, Enriching Lives</h1>
          <p>Join us in transforming agriculture with innovative solutions.</p>
          <button className="explore-btn" onClick={() => navigate('/products')}>
            <FontAwesomeIcon icon={faLeaf} /> Explore Now
          </button>
        </div>
      </section>

      <section className="features">
        <h2>Our Services</h2>
        <div className="feature-cards">
          <div className="feature-card" onClick={() => handleProductNavigation('fruits')}>
            <img src={fruitsImg} alt="Fruits" />
            <h3><FontAwesomeIcon icon={faAppleAlt} /> Fresh Fruits</h3>
            <p>Delicious and naturally grown fruits delivered to your door.</p>
          </div>
          <div className="feature-card" onClick={() => handleProductNavigation('vegetables')}>
            <img src={vegetablesImg} alt="Vegetables" />
            <h3><FontAwesomeIcon icon={faCarrot} /> Farm-Fresh Vegetables</h3>
            <p>Enjoy a variety of seasonal vegetables picked at their peak.</p>
          </div>
          <div className="feature-card" onClick={() => handleProductNavigation('leafy_greens')}>
            <img src={leafyVeggiesImg} alt="Leafy Greens" />
            <h3><FontAwesomeIcon icon={faLeaf} /> Leafy Greens</h3>
            <p>Nutritious leafy greens that are fresh and flavorful.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <button className="cta-btn" onClick={handleSignUp}>
          <FontAwesomeIcon icon={faLeaf} /> Sign Up Now
        </button>
      </section>

      <footer className="footer">
        <div className="social-media-container">
          <div className="social-media-icon">
            <a onClick={() => handleSocialLink('facebook')} className="social-link">
              <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
            </a>
            <p>Facebook</p>
          </div>
          <div className="social-media-icon">
            <a onClick={() => handleSocialLink('twitter')} className="social-link">
              <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
            </a>
            <p>Twitter</p>
          </div>
          <div className="social-media-icon">
            <a onClick={() => handleSocialLink('instagram')} className="social-link">
              <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
            </a>
            <p>Instagram</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
