import React, { useState } from 'react';

//method to save current strudel code
function SaveButton({ code, onSave }) {
    const [fileName, setFileName] = useState(''); //stores text-entered by user for name
    const [message, setMessage] = useState(''); //stores feedback message that will be generated
    const [isError, setIsError] = useState(false); //to store flagged message feedback

    const Saving = () => {
        //trim whitespace or name it untitled if no name was written
        const name = fileName.trim() || 'Untitled';

        //check if the code isnt empty
        if (!code || !code.trim()) {
            setIsError(true);
            setMessage('Cannot save — no code content.');
            return;
        }

        //calls the parent save handler with name and code
        onSave(name, code)

        //provides feeback
        setIsError(false);
        setMessage(` Saved "${name}" successfully!`);

        //clears input field after saving
        setFileName('');

        //remove message automatically after 2 sec
        setTimeout(() => setMessage(''), 2000);
    };
   
  return (
      <div className="align-items-start">
          <div className="d-flex align-items-center mb-2">
              <input type="text" className="form-control mb-2" placeholder="Enter save name..." value={fileName} onChange={(e) => setFileName(e.target.value)} />
              <button className="btn btn-outline-success w-50" onClick={Saving} >Save Current Code</button>
          </div>
          {/*conditional feedback message*/ }
          {message && (<small className={`mt-2 d-block ${isError ? 'text-danger' : 'text-success'}`}>{message}</small>)}
          
      </div>
  );
}

export default SaveButton;