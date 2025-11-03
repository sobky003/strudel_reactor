import React, { useState } from 'react';

function SaveButton({ code,onSave }) {
    const [fileName, setFileName] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const Saving = () => {
        const name = fileName.trim() || 'Untitled';

        if (!code || !code.trim()) {
            setIsError(true);
            setMessage('Cannot save — no code content.');
            return;
        }

        if (!name) {
            setIsError(true);
            setMessage('Please enter a file name before saving.');
            return;
        }

        onSave(name, code)

        setIsError(false);
        setMessage(` Saved "${name}" successfully!`);
        setFileName('');
        setTimeout(() => setMessage(''), 2000);
    };
   
  return (
      <div className="align-items-start">
          <input type="text" className="form-control mb-2" placeholder="Enter save name..." value={fileName} onChange={(e) => setFileName(e.target.value)}/>
          <button className="btn btn-success w-100" onClick={Saving} >Save Current Code</button>
          {message && (<small className={`mt-2 d-block ${isError ? 'text-danger' : 'text-success' }`}>{message}</small>)}
      </div>
  );
}

export default SaveButton;