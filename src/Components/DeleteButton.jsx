import React, { useState, useEffect } from 'react';

function DeleteButton() {
    const [saves, setSaves] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);

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
      </div>
  );
}

export default DeleteButton;