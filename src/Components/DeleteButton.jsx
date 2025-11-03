import React, { useState } from 'react';

function DeleteButton({saves,onDelete}) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const Delete = () => {
        const chosen = saves[selectedIndex];
        onDelete(chosen.name);
        setSelectedIndex(-1);
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