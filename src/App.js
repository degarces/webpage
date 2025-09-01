import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";


import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

// Home Page
function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-blue-500">Welcome to My Product</h1>
      <p className="mt-2 text-lg text-gray-600">The best solution for your needs.</p>
      <Button className="mt-6">Get Started</Button>
    </section>
  );
}


// Pricing Page
function Pricing() {
  return (
    <section className="p-8 mt-20">
      <h2 className="text-3xl font-bold">Pricing Page</h2>
      <p className="mt-2 text-gray-600">Here we’ll show our pricing tiers.</p>
    </section>
  );
}

// Features Page
function Features() {
  return (
    <section className="p-8 mt-20">
      <h2 className="text-3xl font-bold">Features Page</h2>
      <p className="mt-2 text-gray-600">Cool things about our product.</p>
    </section>
  );
}

// Download Page
function Download() {
  return (
    <section className="p-8 mt-20">
      <h2 className="text-3xl font-bold">Download Page</h2>
      <p className="mt-2 text-gray-600">Links or instructions for downloads.</p>
    </section>
  );
}

// Login Page
function Login() {
  return (
    <section className="p-8 mt-20">
      <h2 className="text-3xl font-bold">Login Page</h2>
      <p className="mt-2 text-gray-600">Login form goes here.</p>
    </section>
  );
}

// Signup Page
function Signup() {
  return (
    <section className="p-8 mt-20">
      <h2 className="text-3xl font-bold">Sign Up Page</h2>
      <p className="mt-2 text-gray-600">Sign up form goes here.</p>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="p-4 text-center bg-gray-200 mt-8">
      <p>&copy; 2025 My Company</p>
    </footer>
  );
}

// App (Router + Navbar + Pages + Footer)
function App() {
    return (
    <Router>
        <Navbar />
        <div className="pt-20">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/features" element={<Features />} />   {/* new */}
            <Route path="/download" element={<Download />} />   {/* new */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
        </div>
        <Footer />
    </Router>
  );
}

export default App;
