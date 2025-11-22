import React from 'react';
import bicepsData from '../data/bicepsData';
import '../styles/biceps.css';

function Biceps() {
  return (
    <div className="biceps-page">
      <h2 className="biceps-title">Biceps Exercises</h2>
      <div className="biceps-container">
        {bicepsData.map((exercise, index) => (
          <div key={index} className="biceps-card">
            <h3>{exercise.name}</h3>
            <img src={exercise.gif} alt={exercise.name} className="biceps-gif" />
            <p>{exercise.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Biceps;
