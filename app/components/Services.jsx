import React from "react";
import Image from "next/image";

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
                <p>Design and development</p>
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
                <p>£25 a month hosting</p>
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
                <p>7 days a week support</p>
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
                <p>Lifetime updates</p>
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
                Minimum 6 months.
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
                <p>Design and development</p>
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

        {/* Portfolio Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Take a look at some of my recent work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group overflow-hidden rounded-lg shadow-lg bg-gray-100 dark:bg-gray-700">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/ecommerce.jpg"
                  alt="E-commerce Website"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A fully responsive online store with secure payment processing
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full dark:bg-blue-900 dark:text-blue-100">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full dark:bg-blue-900 dark:text-blue-100">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full dark:bg-blue-900 dark:text-blue-100">
                    Stripe
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group overflow-hidden rounded-lg shadow-lg bg-gray-100 dark:bg-gray-700">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/restaurant.jpg"
                  alt="Restaurant Website"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Restaurant Website</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  An elegant website with online reservation system
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full dark:bg-blue-900 dark:text-blue-100">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full dark:bg-blue-900 dark:text-blue-100">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full dark:bg-blue-900 dark:text-blue-100">
                    API Integration
                  </span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group overflow-hidden rounded-lg shadow-lg bg-gray-100 dark:bg-gray-700">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/analytics.jpg"
                  alt="Analytics Dashboard"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A comprehensive data visualization platform
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full dark:bg-blue-900 dark:text-blue-100">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full dark:bg-blue-900 dark:text-blue-100">
                    D3.js
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full dark:bg-blue-900 dark:text-blue-100">
                    Firebase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
