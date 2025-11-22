import React from 'react';
import tricepsData from '../data/tricepsData';
import '../styles/triceps.css';

function Triceps() {
  return (
    <div className="triceps-page">
      <h2 className="triceps-title">Triceps Exercises</h2>
      <div className="triceps-container">
        {tricepsData.map((exercise, index) => (
          <div key={index} className="triceps-card">
            <h3>{exercise.name}</h3>
            <img src={exercise.gif} alt={exercise.name} className="triceps-gif" />
            <p>{exercise.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Triceps;
