import React, { useState } from 'react';

function SaveButton({ code,onSave }) {
    const [fileName, setFileName] = useState('');

    const Saving = () => {
        const name = fileName.trim() || 'Untitled';
        onSave(name,code)
    };
   
  return (
      <div className="align-items-start">
          <input type="text" className="form-control mb-2" placeholder="Enter save name..." value={fileName} onChange={(e) => setFileName(e.target.value)}/>
          <button className="btn btn-success w-100" onClick={Saving} >Save Current Code</button>
      </div>
  );
}

export default SaveButton;