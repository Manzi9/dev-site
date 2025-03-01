import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Fill in the contact form, or email me on{" "}
            <a
              href="mailto:hello@manzi.dev"
              className="text-blue-600 hover:underline"
            >
              hello@manzi.dev
            </a>
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                placeholder="Subject"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="btn btn-primary w-full md:w-auto"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 text-blue-600 rounded-full dark:bg-blue-900 dark:text-blue-100">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">
                <a href="mailto:hello@manzi.dev" className="hover:underline">
                  hello@manzi.dev
                </a>
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 text-blue-600 rounded-full dark:bg-blue-900 dark:text-blue-100">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Monday - Friday
                <br />
                9:00 AM - 5:00 PM
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 text-blue-600 rounded-full dark:bg-blue-900 dark:text-blue-100">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Response Time</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Usually within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
