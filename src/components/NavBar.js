"use client";

import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-secondary flex-shrink-0">
            ExploreAPI
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Services", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`/${item === "Home" ? "" : item}`}
                className="text-tertiary hover:text-secondary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center text-secondary hover:text-tertiary focus:outline-none transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 py-3 space-y-2 bg-gray-50 border-t border-gray-200">
            {["Home", "About", "Services", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`/${item === "Home" ? "" : item}`}
                className="block text-tertiary hover:text-secondary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
