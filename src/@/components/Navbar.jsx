import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Mobile Navbar (hamburger only) */}
      <div className="flex justify-between items-center px-8 py-4 md:hidden bg-black text-white shadow">
        <button
          onClick={() => setIsOpen(true)}
          className="flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Desktop Floating Navbar (centered + equal spacing) */}
      <nav className="hidden md:flex items-center fixed top-4 left-1/2 transform -translate-x-1/2 
        bg-black/80 text-white px-1 py-2.5 rounded-full shadow-lg backdrop-blur-md z-50 
        w-3/4 max-w-2xl justify-evenly">
        
        {/* Logo */}
        <Link to="/" className= "flex items-center">
          <img
            src="https://dummyimage.com/100x30/cccccc/000000&text=Logo"
            alt="Temp Logo"
            className="h-8"
          />
        </Link>
        {/* Nav Items */}
        <Link to="/pricing" className="text-white hover:text-gray-400">Pricing</Link>
        <Link to="/features" className="text-white hover:text-gray-400">Features</Link>
        <Link to="/download" className="text-white hover:text-gray-400">Download</Link>
        <Link to="/login" className="text-white hover:text-gray-400">Log in</Link>

      </nav>

      {/* Sidebar for Mobile */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-black text-white shadow-lg flex flex-col items-start p-6 z-50 transition">
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-2xl font-bold mb-6"
          >
            ×
          </button>

          <Link to="/pricing" onClick={() => setIsOpen(false)} className="w-full px-4 py-2 hover:bg-gray-800">
            Pricing
          </Link>
          <Link to="/features" onClick={() => setIsOpen(false)} className="w-full px-4 py-2 hover:bg-gray-800">
            Features
          </Link>
          <Link to="/download" onClick={() => setIsOpen(false)} className="w-full px-4 py-2 hover:bg-gray-800">
            Download
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="w-full px-4 py-2 hover:bg-gray-800">
            Log in
          </Link>

          <Button asChild className="mt-4 w-full px-4">
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
