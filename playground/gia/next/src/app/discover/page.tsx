import React from "react";

export default function DiscoverPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 text-center">Discover</h2>
        <p className="text-lg text-gray-300 text-center mb-8">
          Find trending content, new creators, and community favorites.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-700 rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-2">Trending Now</h3>
            <p className="text-gray-400">See what&apos;s popular in the community.</p>
          </div>
          <div className="bg-gray-700 rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-2">New Creators</h3>
            <p className="text-gray-400">Discover up-and-coming artists and curators.</p>
          </div>
          <div className="bg-gray-700 rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-2">Community Picks</h3>
            <p className="text-gray-400">Handpicked favorites from the Gia community.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
