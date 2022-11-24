import './About.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

const About = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)


  console.log(location);

  return (
    <div>
      <h1>About</h1>
      <p>
        <label htmlFor="param">Param value:</label><br />
        <input type="text" id="param" value={params.get('param')} />
      </p>
      <h3>Other resources from URL:</h3>
      <p><code>{location.pathname}</code></p>
      <p><code>{location.search}</code></p>
    </div>
  );
}

export default About;
