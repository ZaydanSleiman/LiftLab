import React from 'react';
import backData from '../data/backData';
import '../styles/back.css';

function Back() {
  return (
    <div className="back-page">
      <h2 className="back-title">Back Exercises</h2>
      <div className="back-container">
        {backData.map((exercise, index) => (
          <div key={index} className="back-card">
            <h3>{exercise.name}</h3>
            <img src={exercise.gif} alt={exercise.name} className="back-gif" />
            <p>{exercise.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Back;
