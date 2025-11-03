import React, { useState} from 'react';


function LoadButton({ onLoad,saves }) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);


    const Load = () => {
        if (selectedIndex === -1) {
            setIsError(true);
            setMessage(' Please select a file to load.');
            return;
        }

        const chosen = saves[selectedIndex];

        if (!chosen || !chosen.code) {
            setIsError(true);
            setMessage('The selected file is empty or missing.');
            return;
        } else {
            onLoad(chosen.code);
            setIsError(false);
            setMessage(` Loaded "${chosen.name}" successfully!`);
            setTimeout(() => setMessage(''), 2000);
        }

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
              <button className="btn btn-outline-success w-50" onClick={Load} disabled={selectedIndex === -1}>Load Selected</button>
          </div>
          {message && (<small className={`mt-2 d-block ${isError ? 'text-danger' : 'text-success'}`}>{message}</small>)}
      </div>
  );
}

export default LoadButton;