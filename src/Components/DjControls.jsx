function DjControls({ volumeChange, onVolumeChange,cpm,onCpmChange }) {
    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="cpm_label">setCPM</span>
                <input type="text" className="form-control" id="cpm_text_input" placeholder="120" aria-label="cpm" aria-describedby="cpm_label" value={cpm} onChange={(e) => onCpmChange(Number(e.target.value))} />
            </div>

            <label htmlFor="volume_range" className="form-label">Volume</label>
            <input type="range" className="form-range" id="volume_range" min="0" max="1" step="0.01" value={volumeChange} onChange={onVolumeChange } />

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label">
                       Mute BassLine
                    </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" >
                    Mute arpeggiator
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" >
                    Mute Drums
                </label>
            </div>
        </>
    );
}

export default DjControls;