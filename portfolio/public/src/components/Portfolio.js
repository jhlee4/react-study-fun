import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import ItemPage from './ItemPage';

const Portfolio = () => (
    <div>
    <h1>Welcome</h1>
      <h2>Checkout the follwing this i've done:</h2>
      <Link to="/portfolio/1">ItemOne</Link>
      <Link to="/portfolio/2">ItemTwo</Link>
    </div>
);

export default Portfolio;