import React, { useState } from 'react';

function App() {
  // 1. Setting up state for name and visibility
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 2. Function to handle button click
  const handleLogin = () => {
    if (userName.trim() !== "") {
      setIsLoggedIn(true);
    } else {
      alert("Please enter your name!");
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial' }}>
      <h1>React Welcome App</h1>

      {!isLoggedIn ? (
        // Login View
        <div>
          <input 
            type="text" 
            placeholder="Enter your name" 
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ padding: '10px', fontSize: '16px' }}
          />
          <br /><br />
          <button onClick={handleLogin} style={buttonStyle}>
            Get Started
          </button>
        </div>
      ) : (
        // Welcome View
        <div>
          <h2>Welcome to React, {userName}! 🎉</h2>
          <p>You have successfully built your first feature.</p>
          <button onClick={() => setIsLoggedIn(false)} style={buttonStyle}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

// Simple Object for Styling
const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#646cff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default App;
