import React from 'react';
import { Link } from 'react-router-dom';

const FlashNews = () => {
  return (
    <div className="container-fluid bg-dark text-light p-2 text-center">
      <div className="scrolling-text">
        <strong>Flash News:</strong> Exciting opportunities await! Registrations are now open for the 2025-2026 batch. 
        <Link to="/candidate-login" className="text-light text-decoration-underline flash-news-link">
          <strong>Click here to register</strong>
        </Link> 
        today and secure your spot in the next wave of pioneers and leaders. Early registration is recommended as spaces are limited. This is your chance to join a dynamic and innovative program designed to empower your future. Don't miss out on the opportunity to be a part of a thriving community that fosters growth, creativity, and excellence. Join us and start your journey towards success!
      </div>
    </div>
  );
};

export default FlashNews;
