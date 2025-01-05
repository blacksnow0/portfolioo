import React, { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 10% of the screen height
      if (window.scrollY > window.innerHeight * 0.1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 flex justify-between items-center w-full p-4 lg:px-10  text-white z-50 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-90" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <h1 className="text-2xl tracking-wider drop-shadow-lg flex items-center font-serif text-yellow-500">
        <a href="/">HIMANSHU</a>
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
        } lg:flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:space-x-12 lg:mt-0 absolute lg:static left-0 right-0 top-full lg:top-auto lg:bg-transparent p-5 lg:p-0 z-20`}
      >
        <li>
          <a
            href="/about"
            className="hover:text-yellow-300 transition-colors tracking-widest drop-shadow-lg"
          >
            About me
          </a>
        </li>
        <li>
          <a
            href="/resume"
            className="hover:text-yellow-300 transition-colors tracking-widest drop-shadow-lg"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="/projects"
            className="hover:text-yellow-300 transition-colors tracking-widest drop-shadow-lg"
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="px-5 py-2 bg-yellow-600 rounded-full hover:bg-yellow-500 transition-colors"
          >
            Get in touch!
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
