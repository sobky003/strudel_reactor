function DjControls({ volumeChange, onVolumeChange }) {
    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="cpm_label">setCPM</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>

            <label htmlFor="volume_range" className="form-label">Volume</label>
            <input type="range" className="form-range" id="volume_range" min="0" max="1" step="0.01" value={volumeChange} onChange={onVolumeChange } />

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="s1"/>
                    <label class="form-check-label" htmlFor="s1">
                       s1
                    </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="s2" />
                <label class="form-check-label" htmlFor="s2">
                    s2
                </label>
            </div>
        </>
    );
}

export default DjControls;