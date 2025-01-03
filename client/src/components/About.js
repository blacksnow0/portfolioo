import React from "react";
import profilePic from "../Assets/profile_background.png"; // Make sure to add your profile image here

function About() {
  return (
    <section className="bg-black text-white py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="mt-4 text-lg text-gray-400">
          Get to know a little more about me
        </p>
      </div>

      {/* Profile Section */}
      <div className="flex items-center justify-center space-x-8">
        <img
          src={profilePic}
          alt="Profile Picture"
          className="w-48 h-48 rounded-full border-4 border-yellow-500 shadow-lg transform transition-transform hover:scale-110"
        />
        <div className="w-1/2">
          <h3 className="text-3xl font-semibold text-yellow-500">
            Hello, I'm John Doe
          </h3>
          <p className="mt-4 text-gray-400">
            I am a passionate developer with a focus on creating impactful web
            applications. With a strong foundation in front-end development and
            a love for solving complex problems, I strive to make the web a
            better place.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-yellow-500">My Skills</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="skill-item">
            <h4 className="text-2xl font-semibold text-white">JavaScript</h4>
            <p className="mt-2 text-gray-400">
              Expert in JavaScript, including ES6+ features, and frameworks like
              React and Node.js.
            </p>
          </div>
          <div className="skill-item">
            <h4 className="text-2xl font-semibold text-white">CSS & HTML</h4>
            <p className="mt-2 text-gray-400">
              Proficient in modern CSS (Flexbox, Grid) and HTML5 to create
              responsive, user-friendly interfaces.
            </p>
          </div>
          <div className="skill-item">
            <h4 className="text-2xl font-semibold text-white">
              MongoDB & Express
            </h4>
            <p className="mt-2 text-gray-400">
              Experienced in using MongoDB for NoSQL databases and Express.js
              for building RESTful APIs.
            </p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-yellow-500 text-center">
          Experience
        </h2>
        <div className="mt-8 space-y-8">
          <div className="flex items-start space-x-8">
            <div className="w-1/3">
              <h3 className="text-2xl font-semibold text-white">
                Software Engineer
              </h3>
              <p className="mt-2 text-gray-400">XYZ Tech Solutions</p>
              <p className="mt-2 text-gray-500">Jan 2020 - Present</p>
            </div>
            <div className="w-2/3">
              <p className="text-gray-400">
                Developed web applications using React, Node.js, and MongoDB.
                Led the team in building scalable systems that increased
                customer engagement by 30%.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-8">
            <div className="w-1/3">
              <h3 className="text-2xl font-semibold text-white">
                Junior Developer
              </h3>
              <p className="mt-2 text-gray-400">ABC Corp</p>
              <p className="mt-2 text-gray-500">Jun 2018 - Dec 2019</p>
            </div>
            <div className="w-2/3">
              <p className="text-gray-400">
                Assisted in developing dynamic and responsive websites for
                clients, improving user experience and reducing bounce rates by
                20%.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-yellow-500">My Goals</h2>
        <p className="mt-4 text-gray-400">
          As a developer, I am always eager to learn and grow. I am focused on
          mastering full-stack development and building impactful applications
          that solve real-world problems. In the next few years, I aim to
          contribute to open-source projects and collaborate with talented
          developers globally.
        </p>
      </div>
    </section>
  );
}

export default About;
