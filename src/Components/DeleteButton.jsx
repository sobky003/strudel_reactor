import React, { useState, useEffect } from 'react';

function DeleteButton() {
    const [saves, setSaves] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("strudelSaves")) || [];
        setSaves(stored);
    }, []);

    const Delete = () => {
        const updated = saves.filter((_, idx) => idx !== selectedIndex);

        setSaves(updated);
        localStorage.setItem("strudelSaves", JSON.stringify(updated));
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
          <button className="btn btn-warning w-100" onClick={Delete} disabled={selectedIndex === -1}>Delete Selected</button>
      </div>
  );
}

export default DeleteButton;