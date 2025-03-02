import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Web Development Services
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Professional, modern websites tailored to your business needs
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#services"
            className="btn bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            View Services
          </a>
          <a
            href="#contact"
            className="btn bg-transparent border-2 border-blue-400 hover:bg-blue-900/30 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
