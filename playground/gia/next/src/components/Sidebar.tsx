"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MusicIcon,
  VideoIcon,
  TvIcon,
  BookIcon,
  DiscoverIcon,
  SettingsIcon,
} from "./SidebarIcons";

const navLinks = [
  { href: "/music", label: "Music", icon: <MusicIcon /> },
  { href: "/videos", label: "Videos", icon: <VideoIcon /> },
  { href: "/tv-movies", label: "TV/Movies", icon: <TvIcon /> },
  { href: "/comics-books", label: "Comics/Books", icon: <BookIcon /> },
  { href: "/discover", label: "Discover", icon: <DiscoverIcon /> },
  { href: "/settings", label: "Settings", icon: <SettingsIcon /> },
];

const user = {
  name: "Gia Demo",
  role: "Listener",
  avatar: "/file.svg",
};

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  return (
    <aside
      className={`hidden md:flex flex-col justify-between bg-gray-900 text-white h-screen fixed top-0 left-0 z-30 shadow-lg transition-all duration-200 ${
        collapsed ? "w-20" : "w-64"
      }`}
      aria-label="Sidebar navigation"
    >
      <div>
        <button
          className="flex items-center justify-center w-full py-3 focus:outline-none hover:bg-gray-800 transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={() => setCollapsed((c) => !c)}
        >
          <span className="sr-only">Toggle sidebar</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                collapsed
                  ? "M4 12h16"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
        <nav className="mt-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                    collapsed ? "justify-center" : ""
                  }`}
                  tabIndex={0}
                >
                  {link.icon}
                  {!collapsed && <span className="ml-2">{link.label}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-gray-700 p-4">
        <button
          className="flex items-center w-full gap-3 focus:outline-none hover:bg-gray-800 rounded-lg p-2 transition-colors"
          aria-expanded={userOpen}
          aria-controls="sidebar-user-details"
          onClick={() => setUserOpen((o) => !o)}
        >
          <Image
            src={user.avatar}
            alt="User avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full border-2 border-cyan-400 object-cover"
          />
          {!collapsed && (
            <div className="flex flex-col text-left">
              <span className="font-semibold">{user.name}</span>
              <span className="text-xs text-gray-400">{user.role}</span>
            </div>
          )}
          <svg
            className={`w-5 h-5 ml-auto transition-transform ${
              userOpen ? "rotate-180" : ""
            } ${collapsed ? "hidden" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {!collapsed && userOpen && (
          <div
            id="sidebar-user-details"
            className="mt-2 bg-gray-800 rounded-lg p-3 text-sm text-gray-300"
          >
            <div>Email: gia@example.com</div>
            <div>Member since: 2024</div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
