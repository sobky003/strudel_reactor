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
      <>
            <button id="play" className="btn btn-outline-primary" onClick={PlayStopClick}>Play/stop</button>
      </>
  );
}

export default PlayAndStop;