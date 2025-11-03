import React, { useState} from 'react';


function LoadButton({ onLoad,saves }) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const Load = () => {
        const chosen = saves[selectedIndex];
        if (chosen) {
            onLoad(chosen.code);
        }
    };

  return (
      <div className="align-items-start">
          <select className="form-select mb-2" value={selectedIndex} onChange={(e) => setSelectedIndex(Number(e.target.value))}>
              <option value={-1}>Select a saved file</option>
              {saves.map((s, idx) => (
                  <option key={idx} value={idx}>
                      {s.name}
                  </option>
              ))}
          </select>
          <button className="btn btn-warning w-100" onClick={Load} disabled={selectedIndex === -1}>Load Selected</button>
      </div>
  );
}

export default LoadButton;