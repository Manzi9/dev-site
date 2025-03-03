import { Inter } from "next/font/google";
import "./globals.css";
import MobileMenu from "./components/MobileMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manzi - Web Development Services",
  description: "Professional web development services by Manzi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-gray-200`}>
        <header className="bg-black/70 text-white sticky top-0 z-50 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex justify-between items-center">
              <a href="/" className="text-2xl font-light nav-link">
                <span className="text-white">MANZI</span>
                <span className="text-gray-400 mx-2">|</span>
                <span className="text-white">DEV</span>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors nav-link relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition-colors nav-link relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors nav-link relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
                >
                  Contact
                </a>
              </div>

              {/* Mobile Menu Component */}
              <MobileMenu />
            </nav>
          </div>
        </header>

        <main className="min-h-screen bg-gray-950">{children}</main>

        {/* Footer with vertical icons */}
        <footer className="bg-black/90 text-white py-6 text-sm backdrop-blur-md">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center space-y-6">
              {/* Contact Icons */}
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {/* Availability */}
                <div className="flex flex-col items-center transform transition-transform hover:scale-110">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900/30 text-blue-400 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400">24/7</p>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center transform transition-transform hover:scale-110">
                  <a
                    href="mailto:hello@manzi.dev"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900/30 text-blue-400 mb-2 hover:bg-blue-800/40 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                  <a
                    href="mailto:hello@manzi.dev"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    hello@manzi.dev
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex flex-col items-center transform transition-transform hover:scale-110">
                  <a
                    href="https://wa.me/447543827268"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900/30 text-blue-400 mb-2 hover:bg-blue-800/40 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                        strokeWidth={1}
                      />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/447543827268"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    +44 7543 827268
                  </a>
                </div>

                {/* Location */}
                <div className="flex flex-col items-center transform transition-transform hover:scale-110">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900/30 text-blue-400 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400">United Kingdom</p>
                </div>
              </div>

              {/* Copyright */}
              <div className="text-center text-xs text-gray-600 mt-6">
                <p>© {new Date().getFullYear()} Manzi. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
