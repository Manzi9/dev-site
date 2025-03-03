import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section bg-gray-950 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Contact Me</h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Fill in the contact form, or email me directly at{" "}
            <a
              href="mailto:hello@manzi.dev"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              hello@manzi.dev
            </a>
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form className="space-y-8 stagger-children">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-gray-300 group-focus-within:text-blue-400 transition-colors"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="group">
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-gray-300 group-focus-within:text-blue-400 transition-colors"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div className="group">
              <label
                htmlFor="subject"
                className="block mb-2 font-medium text-gray-300 group-focus-within:text-blue-400 transition-colors"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Subject"
                required
              />
            </div>

            <div className="group">
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-gray-300 group-focus-within:text-blue-400 transition-colors"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <div className="text-center md:text-left">
              <button
                type="submit"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg transform transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <span className="flex items-center">
                  <span>Send Message</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
