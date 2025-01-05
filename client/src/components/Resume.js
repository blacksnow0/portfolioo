import React from "react";

import github from "../Assets/github.png";
import vscode from "../Assets/vscode.png";
import postman from "../Assets/postman.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faCloud,
  faDirections,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

function Resume() {
  return (
    <section className="relative flex flex-col md:flex-row justify-around h-auto md:h-[90%] bg-customGreen text-offWhite px-6 md:px-16 py-10 overflow-visible">
      {/* Resume Highlight - Overlapping Section */}
      <div className="absolute right-48 -top-16 md:right-48 md:-top-20 flex justify-center items-center pointer-events-none z-0 hidden md:block">
        <div className="text-center space-y-4">
          <h1 className="text-5xl lg:text-8xl font-bold text-outline leading-none tracking-widest">
            RESUME
          </h1>
          <h1 className="text-5xl lg:text-8xl font-bold text-outline leading-none tracking-widest">
            RESUME
          </h1>
          <h1 className="text-5xl lg:text-8xl font-bold text-outline leading-none tracking-widest">
            RESUME
          </h1>
        </div>
      </div>

      {/* Left Section: Education and Experience */}
      <div className="md:w-1/2 space-y-10 flex flex-col justify-around">
        {/* Education */}
        <div>
          <h1 className="text-4xl text-yellow-500 font-serif mb-4">
            Education
          </h1>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              <FontAwesomeIcon
                icon={faDirections}
                className="mr-2"
              ></FontAwesomeIcon>
              2020 - 2024
            </h2>
            <p className="text-lg">B.Tech Computer Science</p>
            <p className="text-md font-light">
              University of Petroleum and Energy Studies
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="bg-yellow-400 w-3/4 text-black rounded-lg shadow-lg p-6 space-y-4">
          <h1 className="text-4xl font-serif mb-4 drop-shadow-lg">
            Experience
          </h1>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold drop-shadow-sm">
              <FontAwesomeIcon
                icon={faDirections}
                className="mr-2"
              ></FontAwesomeIcon>
              2023 (May-Aug)
            </h2>
            <p className="text-lg font-semibold drop-shadow-sm">
              <FontAwesomeIcon
                icon={faCloud}
                className="mr-2"
              ></FontAwesomeIcon>
              Cloud Intern
            </p>
            <p className="text-md">
              <b>IBM</b> - Developed a cloud-based system for remote desktop
              access and virtualization.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section: Resume Highlight and Technical Skills */}
      <div className="md:w-1/2 flex flex-col justify-around space-y-10 mt-20 z-20">
        <div className="space-y-6">
          <h1 className="text-5xl  text-yellow-600 font-bold font-serif mb-4">
            Technical skills
          </h1>
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h2 className="text-lg font-semibold mb-2">
                <FontAwesomeIcon
                  icon={faTools}
                  className="mr-2"
                ></FontAwesomeIcon>
                Software Tools
              </h2>
              <ul className="flex space-x-6 text-lg">
                <li className="flex items-center space-x-2">
                  <img src={github} alt="GitHub" className="w-10 h-10" />
                </li>
                <li className="flex items-center space-x-2">
                  <img src={vscode} alt="VS Code" className="w-10 h-10" />
                </li>
                <li className="flex items-center space-x-2">
                  <img src={postman} alt="Postman" className="w-10 h-10" />
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-lg font-semibold mb-2">
                <FontAwesomeIcon
                  icon={faClipboard}
                  className="mr-2"
                ></FontAwesomeIcon>
                Web Development
              </h2>
              <ul className="ml-1 list-inside text-md font-md tracking-widest">
                <li>HTML, CSS, JavaScript</li>
                <li>React, Tailwind CSS</li>
                <li>Node.js, Express</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
