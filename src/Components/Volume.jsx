function Volume({ onVolumeChange }) {
    return (
        <>
            <label htmlFor="customRange1" className="form-label">Volume</label>
            <input type="range" className="form-range"  id="volume" min="0" max="20" step="0.01" defaultValue="1" onChange = {(e) => onVolumeChange(parseFloat(e.target.value))} />
      </> 
  );
}

export default Volume;