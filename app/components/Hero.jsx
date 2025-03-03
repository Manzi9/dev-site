import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-950 overflow-hidden">
      {/* Background gradient with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-black"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/3 -left-20 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Business
            </span>{" "}
            Web Development Solutions
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Show off a site that you're proud of.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
            <a
              href="#services"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg transform transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
            >
              View Services
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 rounded-lg transform transition-all duration-300 hover:bg-blue-900/20 hover:scale-105 hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Scroll indicator - moved to bottom of container */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-gray-400 mb-2">Scroll</span>
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
