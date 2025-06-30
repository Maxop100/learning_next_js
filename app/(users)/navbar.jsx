'use client';
import React, { useState, useEffect } from 'react';
export const navbarToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden" onClick={toggleNavbar}>
      <a className="text-4xl" href="#">
        &#8801;
      </a>
    </div>
  );
};


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 text-black">
      <h1 className="text-green-500 text-2xl font-bold">MaNish</h1>
      <div className="md:hidden" onClick={toggleNavbar}>
        <a className="text-4xl" href="#">
          &#8801;
        </a>
      </div>
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex gap-10 p-6 md:p-0`}
      >
        <li className="hover:text-green-600 transition-colors duration-300">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-green-600 transition-colors duration-300">
          <Link href="/clientcomp">Client Component</Link>
        </li>
        <li className="hover:text-green-600 transition-colors duration-300">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="hover:text-green-600 transition-colors duration-300">
          <Link href="/servercomp">Server Component</Link>
        </li>
        <li className="hover:text-green-600 transition-colors duration-300">
          <Link href="/service">Service</Link>
        </li>
        <li className="hover:text-green-600 transition-colors duration-300">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export const NavbarButton = () => {
  return (
    <button className="bg-blue-500 hidden md:block hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">
      Login/signup
    </button>
  );
};


export default navbarToggle;
