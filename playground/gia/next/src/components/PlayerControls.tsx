import React from "react";

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const PlayerControls: React.FC<PlayerControlsProps> = ({ isPlaying, onPlayPause, onPrev, onNext }) => (
  <div className="music-controls flex items-center gap-8 mb-3">
    <button className="icon-btn" onClick={onPrev} title="Previous" aria-label="Previous track">
      <i className="fas fa-backward" />
    </button>
    <button className="play-btn" onClick={onPlayPause} aria-label={isPlaying ? "Pause" : "Play"}>
      <i className={isPlaying ? "fas fa-pause" : "fas fa-play"} />
    </button>
    <button className="icon-btn" onClick={onNext} title="Next" aria-label="Next track">
      <i className="fas fa-forward" />
    </button>
  </div>
);

export default PlayerControls;
