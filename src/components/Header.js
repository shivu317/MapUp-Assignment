import React, { useState } from 'react';

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleProfile = () => {
    
    alert('View Profile');
  };

  const handleButtonClick = () => {
    
    alert('Button Clicked!');
  };

  return (
    <div className="header">
      <h1>My Map App</h1>
      {loggedIn ? (
        <>
          <button className="header-buttons" onClick={handleProfile}>
            Profile
          </button>
          <button className="header-buttons" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <button className="header-buttons" onClick={handleLogin}>
          Login
        </button>
      )}
      <button className="header-buttons" onClick={handleButtonClick}>
        Click Me
      </button>
    </div>
  );
}

export default Header;
