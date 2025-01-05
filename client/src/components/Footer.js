// src/components/Footer.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className=" text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Himanshu. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://github.com/blacksnow0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 text-xl"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub}>GitHub</FontAwesomeIcon>
          </a>
          <a
            href="linkedin.com/in/himanshu-chauhan-b6bb57266/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 text-xl"
          >
            <FontAwesomeIcon icon={faLinkedin}>LinkedIn</FontAwesomeIcon>
          </a>
          <a
            href="https://x.com/black_to_grey"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 text-xl"
          >
            <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
