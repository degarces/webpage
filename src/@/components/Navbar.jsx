import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <img
          src="https://dummyimage.com/120x40/cccccc/000000&text=Logo"
          alt="Temp Logo"
          className="h-8"
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 items-center">
          <Link to="/pricing" className="px-4 py-2 rounded-md hover:bg-gray-200">
            Pricing
          </Link>
          <Link to="/login" className="px-4 py-2 rounded-md hover:bg-gray-200">
            Log in
          </Link>
          <Button asChild className="ml-2">
            <Link to="/signup">Get Started</Link>
          </Button>
        </nav>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Sidebar (mobile) */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg flex flex-col items-start p-6 z-50 transition">
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-2xl font-bold mb-6"
          >
            ×
          </button>

          <Link
            to="/pricing"
            onClick={() => setIsOpen(false)}
            className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-200"
          >
            Pricing
          </Link>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-200"
          >
            Log in
          </Link>
          <Button asChild className="mt-4 w-full">
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
