import React from "react";

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (v: number) => void;
}

const VolumeControl: React.FC<VolumeControlProps> = ({ volume, onVolumeChange }) => (
  <div className="volume-row flex items-center gap-2 mb-2">
    <i className="fas fa-volume-up" />
    <input
      type="range"
      min={0}
      max={1}
      step={0.01}
      value={volume}
      onChange={e => onVolumeChange(Number(e.target.value))}
      style={{ width: 100 }}
      aria-label="Volume"
    />
  </div>
);

export default VolumeControl;
