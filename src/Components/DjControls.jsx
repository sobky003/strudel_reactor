function DjControls({ volumeChange, onVolumeChange,cpm,onCpmChange,muted,onMuteChange }) {

    //method to mute only instrument selected
    const handleMuteChange = (e) => {
        const id = e.target.id;
        const checked = e.target.checked;

        if (checked) onMuteChange([...muted, id]);
        else onMuteChange(muted.filter(x => x !== id));
    };

    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="cpm_label">setCPM</span>
                <input type="text" className="form-control" id="cpm_text_input" placeholder="120" aria-label="cpm" aria-describedby="cpm_label" value={cpm} onChange={(e) => onCpmChange(Number(e.target.value))} />
            </div>

            <label htmlFor="volume_range" className="form-label">Volume</label>
            <input type="range" className="form-range" id="volume_range" min="0" max="1" step="0.01" value={volumeChange} onChange={onVolumeChange } />

            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="main_arp" checked={muted.includes("main_arp")} onChange={handleMuteChange} />
                <label class="form-check-label" >
                    Mute main_arp
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="drums" checked={muted.includes("drums")} onChange={handleMuteChange} />
                <label class="form-check-label" >
                    Mute Drums
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="drums2" checked={muted.includes("drums2")} onChange={handleMuteChange} />
                <label class="form-check-label">
                    Mute Drums2
                </label>
            </div>
        </>
    );
}

export default DjControls;