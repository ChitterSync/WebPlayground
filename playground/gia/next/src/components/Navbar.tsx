import React from "react";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/videos", label: "Videos" },
  { href: "/tv-movies", label: "TV/Movies" },
  { href: "/comics-books", label: "Comics/Books" },
];

const Navbar: React.FC = () => (
  <nav className="w-full bg-gray-900 text-white shadow-lg sticky top-0 z-40">
    <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
      <span className="text-xl font-bold tracking-wide">Gia</span>
      <ul className="flex gap-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="hover:underline underline-offset-4 px-2 py-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
