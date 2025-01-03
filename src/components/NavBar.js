"use client";

import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-secondary">
            ExploreAPI
            </a>
          </div>

          {/* Menu Items (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-tertiary hover:text-secondary">
              Home
            </a>
            <a href="/AboutUs" className="text-tertiary hover:text-secondary">
              About
            </a>
            <a href="#services" className="text-tertiary hover:text-secondary">
              Services
            </a>
            <a href="/ContactUs" className="text-tertiary hover:text-secondary">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-tertiary focus:outline-none"
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
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="/" className="block text-tertiary hover:text-secondary">
              Home
            </a>
            <a href="/AboutUs" className="block text-tertiary hover:text-secondary">
              About
            </a>
            <a href="#services" className="block text-tertiary hover:text-secondary">
              Services
            </a>
            <a href="ContactUs" className="block text-tertiary hover:text-secondary">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
