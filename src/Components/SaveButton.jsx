import React, { useState } from 'react';

function SaveButton({ code }) {
    const [fileName, setFileName] = useState('');

  return (
      <div className="d-flex flex-column align-items-start">
          <input type="text" className="form-control mb-2" placeholder="Enter save name..." value={fileName} onChange={(e) => setFileName(e.target.value)}/>
          <button className="btn btn-success w-100" >Save Current Code</button>
      </div>
  );
}

export default SaveButton;