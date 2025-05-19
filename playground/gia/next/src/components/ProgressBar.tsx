import React from "react";

interface ProgressBarProps {
  current: number;
  duration: number;
  onSeek: (percent: number) => void;
}

const formatTime = (sec: number) => {
  sec = Math.floor(sec);
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return m + ":" + (s < 10 ? "0" : "") + s;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ current, duration, onSeek }) => {
  const percent = duration ? (current / duration) * 100 : 0;
  return (
    <div className="progress-row flex items-center gap-4 w-full mb-2">
      <span className="time w-10 text-xs text-gray-400">{formatTime(current)}</span>
      <div
        className="progress-bar flex-1 h-2 bg-gray-700 rounded cursor-pointer relative overflow-hidden"
        onClick={e => {
          const rect = (e.target as HTMLDivElement).getBoundingClientRect();
          const x = e.nativeEvent instanceof MouseEvent ? e.nativeEvent.clientX - rect.left : 0;
          onSeek(x / rect.width);
        }}
        aria-label="Seek bar"
        role="slider"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={duration}
        tabIndex={0}
      >
        <div className="progress h-full bg-cyan-400 rounded" style={{ width: percent + "%" }} />
      </div>
      <span className="time w-10 text-xs text-gray-400">{formatTime(duration)}</span>
    </div>
  );
};

export default ProgressBar;
