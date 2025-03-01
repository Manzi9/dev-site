import React from "react";

export default function Services() {
  return (
    <section id="services" className="section bg-white dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Services</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            I offer professional web development services tailored to your
            needs. Choose the package that works best for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Lump Sum Package */}
          <div className="card border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Lump Sum Package</h3>
              <p className="text-gray-600 dark:text-gray-300">
                One-time payment for your website
              </p>
              <div className="mt-4">
                <span className="text-4xl font-bold">£1,299</span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">
                  + £25/month hosting
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p>Design and development included</p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p>Up to 5 pages included</p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p>£70 per additional page after page 5</p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                <p>No 7 days a week support</p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                <p>No lifetime updates</p>
              </div>
            </div>

            <div className="text-center">
              <a href="#contact" className="btn btn-primary inline-block">
                Get Started
              </a>
            </div>
          </div>

          {/* Monthly Subscription */}
          <div className="card border-t-4 border-indigo-600 hover:shadow-lg transition-shadow relative overflow-hidden">
            <div className="absolute -right-10 top-6 bg-indigo-600 text-white px-10 py-1 rotate-45 transform">
              Popular
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Monthly Subscription</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ongoing service and support
              </p>
              <div className="mt-4">
                <span className="text-4xl font-bold">£140</span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">
                  /month
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p>Design and development included</p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p>Hosting included</p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p>Up to 5 pages included</p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p>£70 per additional page after page 5</p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p>7 days a week support</p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p>Lifetime updates included</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#contact"
                className="btn bg-indigo-600 text-white hover:bg-indigo-700 inline-block"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
