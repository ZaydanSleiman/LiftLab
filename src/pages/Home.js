
import React from 'react';
import logo from '../assets/logo.png'
function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to LiftLab</h1>
      <p>Your personal fitness companion — track workouts, explore exercises, and build your nutrition plan.</p>
       <img
        src={logo}
        alt="LiftLab Logo"
        style={{
          width: '100%',
          maxWidth: '400px',
          marginTop: '2rem',
          borderRadius: '12px',
        }}
      />
    </div>
  );
}

export default Home;
