import React from "react";
import imageSrc from "../Assets/profile_background.png";

function Hero() {
  return (
    <section className="relative h-screen bg-black text-white overflow-hidden">
      {/* Repeated "Portfolio" Text */}
      <div className="flex flex-col justify-center items-center h-[90%] bg-customGreen pointer-events-none ">
        <h1 className="mt-60 mb-8 text-5xl lg:text-9xl font-serif font-bold text-gray-300 leading-none tracking-wider">
          PORTFOLIO
        </h1>
        <h1 className="mb-8 text-5xl lg:text-9xl font-semibold text-outline leading-none tracking-widest">
          PORTFOLIO
        </h1>

        <h1 className="mb-8 text-5xl lg:text-9xl font-semibold text-outline leading-none tracking-widest">
          PORTFOLIO
        </h1>

        <h1 className="mb-8 text-5xl lg:text-9xl font-semibold text-outline leading-none tracking-widest">
          PORTFOLIO
        </h1>
      </div>

      {/* Adjusted Image Position */}
      <div className="absolute lg:top-1/4 lg:left-1/5 mx-32">
        <img src={imageSrc} alt="profile image" className="w-2/4" />
      </div>

      <p
        className=" text-sm text-gray-300 bg-black/20  py-2 shadow-lg max-w-xs md:text-base tracking-widest px-1"
        style={{
          bottom: "2%",
          left: "0",
          position: "absolute",
          zIndex: 20,
        }}
      >
        Hi! I'm Himanshu, a passionate web developer building modern and
        responsive web applications.
      </p>
    </section>
  );
}

export default Hero;
