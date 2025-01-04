import React from "react";
import profilePic from "../Assets/basketball.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section className="h-auto md:h-screen">
      <div className="h-full mt-16 bg-offWhite flex flex-col md:flex-row justify-around items-center px-4 md:px-20 py-6 md:py-0">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6 max-w-lg">
          <h1 className="text-4xl md:text-7xl font-caveat font-bold leading-tight">
            Hello, <br /> I'm{" "}
            <span className="text-black font-caveat">Himanshu</span>!
          </h1>
          <p className="text-md md:text-lg leading-relaxed">
            I am a passionate developer focused on creating impactful web
            applications. With a strong foundation in front-end development and
            a love for solving complex problems, I strive to make the web a
            better place.
          </p>
          <button className="w-full mt-4 px-4 md:px-6 py-2 md:py-3 bg-red-500 text-white  rounded-full shadow-lg hover:bg-red-600 transition-all">
            <FontAwesomeIcon className="mr-3" icon={faSearch} />
            <a
              href="https://www.linkedin.com/in/himanshu-chauhan-b6bb57266/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/himanshu-chauhan
            </a>
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0">
          <div className="w-full md:w-96 bg-black text-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform">
            {/* Profile Image */}
            <div className="relative">
              <img
                src={profilePic}
                alt="Himanshu"
                className="w-full object-cover h-72 md:h-96"
              />
            </div>

            {/* Contact Details */}
            <div className="p-6 text-center space-y-4">
              <h2 className="text-2xl md:text-4xl text-offWhite font-bold font-caveat">
                Contact
              </h2>
              <div className="space-y-2">
                <p className="text-offWhite text-sm md:text-base">
                  <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
                  Jaipur, Rajasthan
                </p>
                <p className="text-offWhite text-sm md:text-base">
                  <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
                  himanshu2001ofc@gmail.com
                </p>
                <p className="text-offWhite text-sm md:text-base">
                  <FontAwesomeIcon className="mr-2" icon={faPhone} />
                  +91-7017502703
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
