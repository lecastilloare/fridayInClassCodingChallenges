
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <h1> Woah I Made This! </h1>
      <nav>
        <Link to="/pageone"> Page One</Link> |{""}
        <Link to="/pagetwo"> Page Two</Link> |{""}
        <Link to="/pagethree"> Page Three</Link>


      </nav>
    </div>
  )
}

export default App

