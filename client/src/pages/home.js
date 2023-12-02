import React from 'react';
import { Link } from 'react-router-dom'; 
import "../index.css"

const Home = () => {
    return (
        <div className="home-page">
          <h1>Welcome to Superhero Search!</h1>
          <div className="options">
            <Link to="/create-account" className="option-link">
              Create Account
            </Link>
            <Link to="/sign-in" className="option-link">
              Sign In
            </Link>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search superheroes..." />
            <button>Search</button>
          </div>
        </div>
      );
  };
  
  export default Home;
  