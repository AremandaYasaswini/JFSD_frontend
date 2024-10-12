// src/Blog.js
import React from 'react';
import '../css/blog.css'; // Assuming you will add styling here
import organicFarmingImage from '../Images/blog1.jpeg'; // Correct path for organic farming image
import sustainableAgricultureImage from '../Images/blog2.jpeg'; // Correct path for sustainable agriculture image
import farmingTechnologyImage from '../Images/blog3.jpeg'; // Correct path for farming technology image

const Blog = () => {
  const posts = [
    {
      title: "The Benefits of Organic Farming",
      excerpt: "Discover how organic farming enhances soil health and promotes biodiversity.",
      date: "October 1, 2024",
      image: organicFarmingImage // Use the imported image
    },
    {
      title: "Sustainable Agriculture Practices",
      excerpt: "Learn about sustainable methods that can help farmers improve yield while preserving the environment.",
      date: "September 15, 2024",
      image: sustainableAgricultureImage // Use the imported image
    },
    {
      title: "Innovations in Farming Technology",
      excerpt: "Explore the latest technologies that are transforming the agricultural landscape.",
      date: "August 30, 2024",
      image: farmingTechnologyImage // Use the imported image
    },
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Our Blog</h1>
      <div className="blog-posts">
        {posts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <p className="blog-date">{post.date}</p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
