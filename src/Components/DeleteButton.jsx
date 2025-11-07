import React, { useState } from 'react';

function DeleteButton({saves,onDelete}) {
    const [selectedIndex, setSelectedIndex] = useState(-1);//index of file selected in dropdown
    const [message, setMessage] = useState('');//stores feedback message that will be generated
    const [isError, setIsError] = useState(false);//to store flagged message feedback

    const Delete = () => {
        //retrieve selected files
        const chosen = saves[selectedIndex];

        //ask user for confirmation before deletion
        const confirmDelete = window.confirm(`Are you sure you want to delete "${chosen.name}"?`);

        //if user saif no, cancel the delete process
        if (!confirmDelete) {
            setIsError(false);
            setMessage('Deletion cancelled.');
            setTimeout(() => setMessage(''), 2000);
            return;
        }

        //pass name to parent to perform deletion
        onDelete(chosen.name);

        //reset drop down
        setSelectedIndex(-1);

        //sends appropriate feedback
        setIsError(false);
        setMessage(`Deleted "${chosen.name}" successfully.`);

        //clears message after 2 sec
        setTimeout(() => setMessage(''), 2000);
    };

  return (
      <div className="align-items-start">
          <div className="d-flex align-items-center mb-2">
              {/*dropdown to allow user to selecta file*/}
              <select className="form-select mb-2" value={selectedIndex} onChange={(e) => setSelectedIndex(Number(e.target.value))}>
                  <option value={-1}>Select a saved file</option>
                  {/*Dynamially populate dropdown with saved files*/}
                  {saves.map((s, idx) => (
                      <option key={idx} value={idx}>
                          {s.name}
                      </option>
                  ))}
              </select>
              <button className="btn btn-outline-danger w-100" onClick={Delete} disabled={selectedIndex === -1}>Delete file</button>
          </div>
          {/*conditional feedback message*/}
          {message && (<small className={`mt-2 d-block ${isError ? 'text-danger' : 'text-success'}`}>{message}</small>)}
      </div>
  );
}

export default DeleteButton;