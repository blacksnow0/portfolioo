import React from "react";
import imageSrc from "../Assets/profile_background.png";

function Hero() {
  return (
    <section className="relative h-screen bg-black text-white z-10">
      {/* Repeated "Portfolio" Text */}
      <div className="flex flex-col justify-center items-center h-[85%] bg-customGreen pointer-events-none text-center">
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

      {/* Adjusted Image Position - Hide on mobile */}
      <div className="absolute lg:top-1/4 lg:left-1/5 mx-32 hidden sm:block ">
        <div className="flex justify-between items">
          <div className="relative w-2/4 rounded-lg overflow-hidden">
            <img src={imageSrc} alt="profile" className="w-full" />
            <div className="absolute inset-0 bg-yellow-900 bg-opacity-20"></div>
          </div>

          <div className="flex flex-col justify-between  ml-8">
            <p className="font-caveat text-yellow-500 text-4xl mb-4">
              Poetry In Motion
            </p>
            <button className="px-6 py-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors">
              See Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
