import React, { useState } from 'react';
import "./Practice.css"
function Practice() {
  const [showOverlay, setShowOverlay] = useState(false);

  const openOverlay = () => {
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className="home">
      <h1>hello</h1>
      <button onClick={openOverlay}>Sign In</button>

      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <h2>Sign In</h2>
            {/* Add your sign-in form here */}
            <form>
              {/* Input fields, buttons, etc. */}
            </form>
            <button onClick={closeOverlay}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Practice;
