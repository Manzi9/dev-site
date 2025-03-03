"use client";

import { useState, useEffect, useRef } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Burger Menu Button */}
      <button
        ref={buttonRef}
        className="md:hidden text-white focus:outline-none p-2 hover:bg-gray-800/50 rounded-md transition-colors"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        type="button"
      >
        {isOpen ? (
          // X icon when menu is open
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Burger icon when menu is closed
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`mobile-menu md:hidden absolute right-0 top-full w-64 bg-black/95 backdrop-blur-md shadow-lg rounded-b-lg transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-10px] pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-4 py-4 px-6">
          <a
            href="#about"
            className="hover:text-blue-400 transition-colors nav-link py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-blue-400 transition-colors nav-link py-2"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-blue-400 transition-colors nav-link py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
