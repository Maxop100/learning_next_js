// components/NavbarToggle.jsx
"use client";
import { useState } from "react";

export default function NavbarToggle() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="md:hidden" onClick={toggleMenu}>
        <span className="text-black text-4xl cursor-pointer">&#8801;</span>
      </div>
      {showMenu && (
        <nav className="flex flex-col gap-4 p-4 bg-white text-black md:hidden">
          <a href="/">Home</a>
          
          <a href="/contact">Contact</a>
          
          <a href="/service">Service</a>
          <a href="/about">About</a>
        </nav>
      )}
    </>
  );
}
