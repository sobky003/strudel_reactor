import React, { useState } from "react";

//method to play and stop music
function PlayAndStop({ onPlay, onStop }) {
    //constant to store if music is playing
    const [isPlaying, setIsPlaying] = useState(false);

    //method that plays/stop code based on isPlaying
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
            {/*button to stop and play music. The layout changes based on if it is playing or not*/ }
            <button id="playStop" className={`${isPlaying ? "btn btn-outline-success" : "btn btn-outline-primary"}`} onClick={PlayStopClick}>
                { isPlaying? " Stop Tune": " Play Tune" }
            </button>
        </div >
  );
}

export default PlayAndStop;