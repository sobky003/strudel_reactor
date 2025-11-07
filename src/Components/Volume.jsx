
function Volume() {
    return (
        <>
                <label htmlFor="volume" className="form-label">Volume</label>
            <input type="range" className="form-range" id="volume" min="0" max="1" step="0.1" />  
        </> 
  );
}

export default Volume;