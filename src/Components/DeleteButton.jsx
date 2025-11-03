import React, { useState } from 'react';

function DeleteButton({saves,onDelete}) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const Delete = () => {
        if (selectedIndex === -1) {
            setIsError(true);
            setMessage('Please select a file to delete.');
            return;
        }

        const chosen = saves[selectedIndex];

        if (!chosen) {
            setIsError(true);
            setMessage(' Selected file not found.');
            return;
        }

        const confirmDelete = window.confirm(`Are you sure you want to delete "${chosen.name}"?`);

        if (!confirmDelete) {
            setIsError(false);
            setMessage('Deletion cancelled.');
            setTimeout(() => setMessage(''), 2000);
            return;
        }

        onDelete(chosen.name);
        setSelectedIndex(-1);
        setIsError(false);
        setMessage(`Deleted "${chosen.name}" successfully.`);
        setTimeout(() => setMessage(''), 2000);
    };

  return (
      <div className="align-items-start">
          <div className="d-flex align-items-center mb-2">
              <select className="form-select mb-2" value={selectedIndex} onChange={(e) => setSelectedIndex(Number(e.target.value))}>
                  <option value={-1}>Select a saved file</option>
                  {saves.map((s, idx) => (
                      <option key={idx} value={idx}>
                          {s.name}
                      </option>
                  ))}
              </select>
              <button className="btn btn-outline-danger w-100" onClick={Delete} disabled={selectedIndex === -1}>Delete file</button>
          </div>
          {message && (<small className={`mt-2 d-block ${isError ? 'text-danger' : 'text-success'}`}>{message}</small>)}
      </div>
  );
}

export default DeleteButton;