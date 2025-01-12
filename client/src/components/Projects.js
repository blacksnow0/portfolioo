/* Slick Carousel Styles */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import project1 from "../Assets/project1.png";
import project2 from "../Assets/project2.png";
import project3 from "../Assets/project3.png";
import project4 from "../Assets/project4.png";

function Projects() {
  const projects = [
    {
      img: project4,
      title: "RoadWays",
      link: "https://roadways-drab.vercel.app/",
    },
    {
      img: project1,
      title: "BurnMetrics",
      link: "https://burn-metrics.vercel.app/",
    },
    {
      img: project2,
      title: "Chatorita",
      link: "https://chatorita.vercel.app/",
    },
    {
      img: project3,
      title: "New Urvashi",
      link: "https://newurvashibadrinath.com",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets and below
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 bg-customGreen">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold text-white">
          Featured Projects
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Explore a curated collection of my most innovative and impactful work.
        </p>
      </div>

      <Slider {...settings} className="relative">
        {projects.map((project, index) => (
          <div key={index} className="px-4">
            <div className="group relative bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500">
              {/* Image Section */}
              <div className="relative overflow-hidden p-1">
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-lg w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-900/40 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white text-center group-hover:text-yellow-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="mt-4 text-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-6 py-2 bg-yellow-600 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition-transform transform hover:-translate-y-1"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Projects;
