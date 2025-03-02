import React from "react";

export default function WhyChoose() {
  return (
    <section id="why-choose" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose My Websites</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            I build websites that not only look great but also perform
            exceptionally well.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Fully Custom Code */}
          <div className="card hover:shadow-lg transition-shadow duration-300">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 text-blue-600 rounded-full dark:bg-blue-900 dark:text-blue-100">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fully Custom Code</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every website is built from scratch with clean, efficient code
                tailored to your specific needs.
              </p>
            </div>
          </div>

          {/* Minimal Bloat */}
          <div className="card hover:shadow-lg transition-shadow duration-300">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 text-blue-600 rounded-full dark:bg-blue-900 dark:text-blue-100">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Minimal Bloat</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Optimized code and assets ensure your website loads quickly,
                improving user experience and SEO rankings.
              </p>
            </div>
          </div>

          {/* Mobile First Design */}
          <div className="card hover:shadow-lg transition-shadow duration-300">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 text-blue-600 rounded-full dark:bg-blue-900 dark:text-blue-100">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile First Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Designed with mobile users in mind, ensuring a great experience
                on smartphones and tablets.
              </p>
            </div>
          </div>

          {/* Fully Responsive */}
          <div className="card hover:shadow-lg transition-shadow duration-300">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 text-blue-600 rounded-full dark:bg-blue-900 dark:text-blue-100">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fully Responsive</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your website will look and function perfectly on all devices,
                from phones to large desktop monitors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
