import React from "react";
import Image from "next/image";

export interface Track {
  title: string;
  artist: string;
  src: string;
  cover: string;
}

export interface PlaylistProps {
  tracks: Track[];
  currentTrack: number;
  onSelect: (idx: number) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ tracks, currentTrack, onSelect }) => (
  <div className="music-playlist max-w-xl mx-auto bg-gray-900 rounded-lg shadow-lg p-4 mt-8">
    <div className="playlist-title text-lg font-bold mb-4">Playlist</div>
    {tracks.map((track, i) => (
      <div
        key={track.title + i}
        className={`playlist-item flex items-center gap-4 mb-3 rounded-lg p-2 cursor-pointer transition-colors ${i === currentTrack ? 'bg-gray-700' : 'hover:bg-gray-800'}`}
        onClick={() => onSelect(i)}
        aria-current={i === currentTrack}
        tabIndex={0}
        role="button"
      >
        <Image
          src={track.cover}
          alt={track.title}
          width={40}
          height={40}
          className={`playlist-img w-10 h-10 rounded object-cover ${currentTrack === i ? "ring-2 ring-cyan-400" : ""}`}
          onError={(e) => (e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg")}
        />
        <div className="playlist-info flex-1">
          <div className="playlist-title font-semibold">{track.title}</div>
          <div className="playlist-artist text-gray-400 text-sm">{track.artist}</div>
        </div>
      </div>
    ))}
  </div>
);

export default Playlist;
