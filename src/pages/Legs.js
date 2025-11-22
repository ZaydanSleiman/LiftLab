import React from 'react';
import legsData from '../data/legsData';
import '../styles/legs.css';

function Legs() {
  return (
    <div className="legs-page">
      <h2 className="legs-title">Legs Exercises</h2>
      <div className="legs-container">
        {legsData.map((exercise, index) => (
          <div key={index} className="legs-card">
            <h3>{exercise.name}</h3>
            <img src={exercise.gif} alt={exercise.name} className="legs-gif" />
            <p>{exercise.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Legs;
