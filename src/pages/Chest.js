import React from 'react';
import chestData from '../data/chestData';
import '../styles/chest.css'; 

function Chest() {
  return (
    <div className="chest-page">
      <h2 className="chest-title">Chest Exercises</h2>
      <div className="chest-container">
        {chestData.map((exercise, index) => (
          <div key={index} className="chest-card">
            <h3>{exercise.name}</h3>
            <img src={exercise.gif} alt={exercise.name} className="chest-gif" />
           <p>{exercise.description}</p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Chest;
