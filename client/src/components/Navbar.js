import React from "react";

function Navbar() {
  return (
    <nav className="absolute top-0 flex justify-between items-center w-full p-10 text-white z-10">
      <h1 className="text-2xl font-bold tracking-widest drop-shadow-lg">
        हिमांशु चौहान
      </h1>
      <ul className="flex space-x-16">
        <li>
          <a
            href="/"
            className="hover:text-yellow-300 transition-colors font-semibold tracking-widest drop-shadow-lg"
          >
            About me
          </a>
        </li>
        <li>
          <a
            href="/"
            className="hover:text-yellow-300 transition-colors font-semibold tracking-widest drop-shadow-lg"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="/"
            className="hover:text-yellow-300 transition-colors font-semibold tracking-widest drop-shadow-lg"
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="/"
            className="px-6 py-2 bg-yellow-600 text-black rounded-full hover:bg-yellow-700 transition-colors"
          >
            Get in touch!
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
