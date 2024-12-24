"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="
        bg-blue-700
        text-white
        sticky
        top-0
        z-50
        py-4
        lg:py-2
      "
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src="/Images/logo.png"
            alt="Hemotec Healthcare Logo"
            width={75}
            height={75}
            className="rounded-full"
          />
          <span className="text-2xl font-bold">Hemotec Healthcare</span>
        </div>

        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } sm:flex space-x-6 sm:space-x-4 text-lg font-medium absolute sm:static top-16 left-0 w-full bg-blue-700 sm:bg-transparent sm:items-center sm:justify-between`}
        >
          <li className="sm:inline-block p-2 text-center sm:p-0">
            <Link
              href="/"
              className="block hover:text-gray-200 transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="sm:inline-block p-2 text-center sm:p-0">
            <Link
              href="/about"
              className="block hover:text-gray-200 transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="sm:inline-block p-2 text-center sm:p-0">
            <Link
              href="/products"
              className="block hover:text-gray-200 transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
          </li>
          <li className="sm:inline-block p-2 text-center sm:p-0">
            <Link
              href="/services"
              className="block hover:text-gray-200 transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className="sm:inline-block p-2 text-center sm:p-0">
            <Link
              href="/contact"
              className="block hover:text-gray-200 transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
