import React, { useState} from 'react';

//load the file from the localStorage
function LoadButton({ onLoad,saves }) {
    const [selectedIndex, setSelectedIndex] = useState(-1);//index of file selected in dropdown
    const [message, setMessage] = useState('');//stores feedback message that will be generated
    const [isError, setIsError] = useState(false);//to store flagged message feedback


    const Load = () => {
       //constant to get chosen file based on index selected
        const chosen = saves[selectedIndex];

        //passes code to parent to display onLoad
        onLoad(chosen.code);

        //reset drop down
        setSelectedIndex(-1);

        //display success feedback
        setIsError(false);
        setMessage(` Loaded "${chosen.name}" successfully!`)

        //make message disappear after 2 sec
        setTimeout(() => setMessage(''), 2000);
       
    };

  return (
      <div className="align-items-start">
          <div className="d-flex align-items-center mb-2">
              {/*dropdown to allow user to selecta file*/ }
              <select className="form-select mb-2" value={selectedIndex} onChange={(e) => setSelectedIndex(Number(e.target.value))}>
                  <option value={-1}>Select a saved file</option>
                  {/*Dynamially populate dropdown with saved files*/ }
                  {saves.map((s, idx) => (
                      <option key={idx} value={idx}>
                          {s.name}
                      </option>
                  ))}
              </select>
              <button className="btn btn-outline-success w-50" onClick={Load} disabled={selectedIndex === -1}>Load file</button>
          </div>
          {/*conditional feedback message*/}
          {message && (<small className={`mt-2 d-block ${isError ? 'text-danger' : 'text-success'}`}>{message}</small>)}
      </div>
  );
}

export default LoadButton;