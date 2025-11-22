import React from 'react';
import { Link } from 'react-router-dom';
import chestImg from '../assets/chest.png';
import backImg from '../assets/back.png';
import tricepsImg from '../assets/triceps.png';
import legsImg from '../assets/legs.png';
import bicepsImg from '../assets/biceps.png';
import '../styles/buttons.css';


function Exercises() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Choose a Muscle Group</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>


        <div>
          <img src={chestImg} alt="Chest" width="200" />
          <br />
          <Link to="/chest">
            <button className="button">Chest Exercises</button>
          </Link>
        </div>

        <div>
          <img src={backImg} alt="Back" width="200" />
          <br />
          <Link to="/back">
            <button className="button">Back Exercises</button>
          </Link>
        </div>

        <div>
          <img src={tricepsImg} alt="Triceps" width="200" />
          <br />
          <Link to="/triceps">
            <button className="button">Triceps Exercises</button>
          </Link>
        </div>

        <div>
          <img src={legsImg} alt="Legs" width="200" />
          <br />
          <Link to="/legs">
            <button className="button">Legs Exercises</button>
          </Link>
        </div>


        <div>
          <img src={bicepsImg} alt="Biceps" width="200" />
          <br />
          <Link to="/Biceps">
            <button className="button">Biceps Exercises</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Exercises;
