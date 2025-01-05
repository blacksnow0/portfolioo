import React from "react";
import project1 from "../Assets/project1.png";
import project2 from "../Assets/project2.png";
import project3 from "../Assets/project3.png";

function Projects() {
  return (
    <section className="bg-customGreen text-white py-20 px-6 md:px-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold font-serif text-offWhite drop-shadow-xl tracking-widest">
          My Projects
        </h1>
        <p className="mt-4 text-lg text-offWhite">
          A showcase of my journey through code and creativity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="relative group">
          <div className="overflow-hidden  shadow-lg">
            <img
              src={project1}
              alt="Project 1"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold text-offWhite drop-shadow-xl">
              BurnMetric
            </h3>

            <a
              href="https://burn-metrics.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 px-6 py-2 bg-red-400 text-white font-bold rounded-lg shadow-md hover:bg-red-500"
            >
              View Details
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className="overflow-hidden  shadow-lg">
            <img
              src={project2}
              alt="Project 2"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold text-offWhite drop-shadow-xl">
              Chatorita
            </h3>

            <a
              href="https://chatorita.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 px-6 py-2 bg-red-400 text-white font-bold rounded-lg shadow-md hover:bg-red-500"
            >
              View Details
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className="overflow-hidden  shadow-lg">
            <img
              src={project3}
              alt="Project 3"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold text-offWhite drop-shadow-xl">
              New Urvashi
            </h3>
            <a
              href="https://newurvashibadrinath.com"
              target="_blank"
              rel="noreferrer"
              className="mt-4 px-6 py-2 bg-red-400 text-white font-bold rounded-lg shadow-md hover:bg-red-500"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
