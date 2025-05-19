import React from "react";

const Settings: React.FC = () => (
  <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white p-8">
    <h1 className="text-3xl font-extrabold mb-6 text-center">Settings</h1>
    <section className="max-w-xl mx-auto">
      <h2 className="text-lg font-bold mb-4">Theme</h2>
      <p className="text-gray-400 mb-2">Switch between dark and light mode using the toggle in the top right.</p>
      <h2 className="text-lg font-bold mt-8 mb-4">Account</h2>
      <p className="text-gray-400 mb-2">Profile management and account settings coming soon.</p>
      <h2 className="text-lg font-bold mt-8 mb-4">About</h2>
      <p className="text-gray-400">Gia, ChitterSync, and ChitterHaven are part of the Reach Studios ecosystem. More features and integrations coming soon!</p>
    </section>
  </main>
);

export default Settings;
