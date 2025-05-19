"use client";

import React, { useRef, useState, useEffect } from "react";
import AlbumArt from "./AlbumArt";
import PlayerControls from "./PlayerControls";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";
import Playlist, { Track } from "./Playlist";

const demoPlaylist: Track[] = [
	{
		title: "Dreams",
		artist: "Joakim Karud",
		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
		cover: "https://i1.sndcdn.com/artworks-000208876838-7y8q1d-t500x500.jpg",
	},
	{
		title: "Sunny",
		artist: "KODOMOi",
		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
		cover: "https://i1.sndcdn.com/artworks-000208876838-7y8q1d-t500x500.jpg",
	},
	{
		title: "Jazz In Paris",
		artist: "Media Right Productions",
		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
		cover: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Jazz_in_Paris.jpg",
	},
	{
		title: "Scott Joplin - Maple Leaf Rag",
		artist: "Scott Joplin",
		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
		cover: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Scott_Joplin_19072.jpg",
	},
	{
		title: "Kevin MacLeod - Carefree",
		artist: "Kevin MacLeod",
		src: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/kevin_macleod/royalty-free-music/kevin_macLeod_-_Carefree.mp3",
		cover: "https://freemusicarchive.org/image?file=images%2Falbums%2Fkevin_macleod_-_royalty-free-music_-_20190719135032497.jpg&width=290&height=290&type=album",
	},
	{
		title: "Chris Zabriskie - Prelude No. 23",
		artist: "Chris Zabriskie",
		src: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Chris_Zabriskie/Preludes/Chris_Zabriskie_-_Prelude_No_23.mp3",
		cover: "https://freemusicarchive.org/image?file=images%2Falbums%2FChris_Zabriskie_-_Preludes_-_20190719135032497.jpg&width=290&height=290&type=album",
	},
	{
		title: "Kai Engel - Moonlight Reprise",
		artist: "Kai Engel",
		src: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Kai_Engel/Idea/Kai_Engel_-_Moonlight_Reprise.mp3",
		cover: "https://freemusicarchive.org/image?file=images%2Falbums%2FKai_Engel_-_Idea_-_20190719135032497.jpg&width=290&height=290&type=album",
	},
	{
		title: "Komiku - Battle of Pogs",
		artist: "Komiku",
		src: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Komiku/Best_Off/Komiku_-_Battle_of_Pogs.mp3",
		cover: "https://freemusicarchive.org/image?file=images%2Falbums%2FKomiku_-_Best_Off_-_20190719135032497.jpg&width=290&height=290&type=album",
	},
];

const MusicPlayer: React.FC = () => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [currentTrack, setCurrentTrack] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(1);

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;
		audio.volume = volume;
	}, [volume]);

	useEffect(() => {
		if (isPlaying) {
			audioRef.current?.play();
		} else {
			audioRef.current?.pause();
		}
	}, [isPlaying, currentTrack]);

	const handlePlayPause = () => setIsPlaying((p) => !p);
	const handlePrev = () =>
		setCurrentTrack((i) => (i - 1 + demoPlaylist.length) % demoPlaylist.length);
	const handleNext = () => setCurrentTrack((i) => (i + 1) % demoPlaylist.length);
	const handleSeek = (percent: number) => {
		const audio = audioRef.current;
		if (audio && duration) {
			audio.currentTime = percent * duration;
		}
	};
	const handleVolume = (v: number) => setVolume(v);
	const handleSelect = (idx: number) => setCurrentTrack(idx);

	const onLoadedMetadata = () => {
		setDuration(audioRef.current?.duration || 0);
		setCurrentTime(audioRef.current?.currentTime || 0);
	};
	const onTimeUpdate = () => setCurrentTime(audioRef.current?.currentTime || 0);
	const onEnded = () => handleNext();

	const track = demoPlaylist[currentTrack];

	return (
		<div className="music-player-container flex flex-col items-center max-w-xl mx-auto bg-gray-900 rounded-xl shadow-2xl p-6 mt-8">
			<AlbumArt cover={track.cover} alt={track.title} />
			<div className="song-info text-center mb-2">
				<div className="song-title text-lg font-bold">{track.title}</div>
				<div className="song-artist text-gray-400">{track.artist}</div>
			</div>
			<audio
				ref={audioRef}
				src={track.src}
				preload="metadata"
				onLoadedMetadata={onLoadedMetadata}
				onTimeUpdate={onTimeUpdate}
				onEnded={onEnded}
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
			/>
			<PlayerControls
				isPlaying={isPlaying}
				onPlayPause={handlePlayPause}
				onPrev={handlePrev}
				onNext={handleNext}
			/>
			<ProgressBar current={currentTime} duration={duration} onSeek={handleSeek} />
			<VolumeControl volume={volume} onVolumeChange={handleVolume} />
			<Playlist
				tracks={demoPlaylist}
				currentTrack={currentTrack}
				onSelect={handleSelect}
			/>
		</div>
	);
};

export default MusicPlayer;
