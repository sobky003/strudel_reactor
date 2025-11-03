import React, { useState } from "react";

function PlayAndStop({ onPlay, onStop }) {
    const [isPlaying, setIsPlaying] = useState(false);

    const PlayStopClick = () => {
        if (isPlaying) {
            onStop();
            setIsPlaying(false);
        } else {
            onPlay();
            setIsPlaying(true);
        }
    }
    return (
        <div className="text-center mt-2">
            <button id="playStop" className={`${isPlaying ? "btn btn-outline-success" : "btn btn-outline-primary"}`} onClick={PlayStopClick}>
                { isPlaying? " Stop Tune": " Play Tune" }
            </button>
        </div >
  );
}

export default PlayAndStop;