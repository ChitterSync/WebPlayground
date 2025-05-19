"use client";

import React, { useState } from "react";
import Image from "next/image";
import UserAvatar from "./UserAvatar";

interface Profile {
  id: number;
  name: string;
  image: string;
  description: string;
  lastActive: string;
}

const demoProfiles: Profile[] = [
  {
    id: 1,
    name: "SMg Is Him",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Creator Profile",
    lastActive: "January 22, 2025",
  },
  {
    id: 2,
    name: "r7105",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    description: "Main Artist Account",
    lastActive: "January 20, 2025",
  },
];

const ProfileSelect: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<Profile>(demoProfiles[0]);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="profile-select bg-gray-900 rounded-lg shadow-lg p-6 max-w-md mx-auto mt-8">
      <div className="profile-select-header flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Select Your Profile</h2>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          onClick={() => setIsEditing((v) => !v)}
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
      <div className="profile-preview flex items-center gap-4 mb-6">
        <UserAvatar />
        <div className="profile-details">
          <h3 className="text-lg font-semibold">{selectedProfile.name}</h3>
          <p className="text-gray-400 text-sm">{selectedProfile.description}</p>
          <p className="text-xs text-gray-500">Last Active: {selectedProfile.lastActive}</p>
        </div>
      </div>
      <div className="profile-list grid grid-cols-1 gap-3 mb-4">
        {demoProfiles.map((profile) => (
          <div
            key={profile.id}
            className={`profile-item flex items-center gap-3 p-2 rounded cursor-pointer transition-colors ${profile.id === selectedProfile.id ? 'bg-cyan-900' : 'hover:bg-gray-800'}`}
            onClick={() => setSelectedProfile(profile)}
            tabIndex={0}
            aria-current={profile.id === selectedProfile.id}
            role="button"
          >
            <Image
              src={profile.image}
              alt={profile.name}
              width={40}
              height={40}
              className="profile-img w-10 h-10 rounded-full"
            />
            <div className="profile-info">
              <span className="font-medium">{profile.name}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="add-profile mt-2">
        <button
          className="bg-cyan-600 text-white px-3 py-1 rounded hover:bg-cyan-700 w-full"
          onClick={() => alert('Add new profile (demo)')}
        >
          + Add New Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileSelect;
