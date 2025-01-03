import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0  flex justify-between items-center w-full p-4 lg:p-10 text-white z-20 ">
      {/* Logo */}
      <h1 className="text-2xl tracking-wider drop-shadow-lg flex items-center font-serif text-yellow-500">
        HIMANSHU
      </h1>

      {/* Hamburger Icon */}
      <button
        className="lg:hidden text-3xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:space-x-12  lg:mt-0 absolute lg:static left-0 right-0 top-full lg:top-auto lg:bg-transparent p-5 lg:p-0 z-20`}
      >
        <li>
          <a
            href="/"
            className="hover:text-yellow-300 transition-colors tracking-widest drop-shadow-lg"
          >
            About me
          </a>
        </li>
        <li>
          <a
            href="/"
            className="hover:text-yellow-300 transition-colors tracking-widest drop-shadow-lg"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="/"
            className="hover:text-yellow-300 transition-colors tracking-widest drop-shadow-lg"
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="/"
            className="px-5 py-2 bg-yellow-500  rounded-full hover:bg-yellow-600 transition-colors"
          >
            Get in touch!
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
