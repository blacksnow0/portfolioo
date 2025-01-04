import React from "react";
import project1 from "../Assets/project1.png";
import project2 from "../Assets/project2.png";
import project3 from "../Assets/project3.png";

function Projects() {
  return (
    <section className="bg-customGreen text-white py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">My Projects</h1>
        <p className="mt-4 text-lg text-gray-400">
          Explore the journey of my work
        </p>
      </div>

      <div className="space-y-16">
        {/* Project 1 */}
        <div className="flex items-center justify-between space-x-8">
          <div className="w-1/2">
            <h3 className="text-3xl font-semibold text-yellow-500">
              Project 1
            </h3>
            <p className="mt-4 text-gray-400">
              This is a description of project 1, explaining the scope and goals
              of the work.
            </p>
          </div>
          <img
            src={project1}
            alt="Project 1"
            className="w-1/2 rounded-lg shadow-lg transform transition-transform hover:scale-110"
          />
        </div>

        {/* Project 2 */}
        <div className="flex items-center justify-between space-x-8">
          <div className="w-1/2">
            <h3 className="text-3xl font-semibold text-yellow-500">
              Project 2
            </h3>
            <p className="mt-4 text-gray-400">
              Description of project 2, detailing the tools used and the
              challenges overcome.
            </p>
          </div>
          <img
            src={project2}
            alt="Project 2"
            className="w-1/2 rounded-lg shadow-lg transform transition-transform hover:scale-110"
          />
        </div>

        {/* Project 3 */}
        <div className="flex items-center justify-between space-x-8">
          <div className="w-1/2">
            <h3 className="text-3xl font-semibold text-yellow-500">
              Project 3
            </h3>
            <p className="mt-4 text-gray-400">
              A description of project 3, with a focus on how it improved
              efficiency.
            </p>
          </div>
          <img
            src={project3}
            alt="Project 3"
            className="w-1/2 rounded-lg shadow-lg transform transition-transform hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
