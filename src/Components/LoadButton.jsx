import React, { useState, useEffect } from 'react';


function LoadButton() {
    const [saves, setSaves] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('strudelSaves') || '[]');
        setSaves(stored);
    }, []);


  return (
      <div className="align-items-start">
          <option>Select a saved file</option>
          {saves.map((s, idx) => (
              <option key={idx} value={idx}>
                  {s.name}
              </option>
          ))}
      </div>
  );
}

export default LoadButton;