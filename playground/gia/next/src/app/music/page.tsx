import React from "react";
import MusicPlayer from "../../components/MusicPlayer";
import ProfileSelect from "../../components/ProfileSelect";

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white p-4">
      <h1 className="text-3xl font-extrabold mb-6 text-center">Gia Music Player</h1>
      <ProfileSelect />
      <MusicPlayer />
    </main>
  );
}
