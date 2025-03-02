import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manzi - Web Development Services",
  description: "Professional web development services by Manzi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-gray-200`}>
        <header className="bg-black/90 text-white sticky top-0 z-50 shadow-md backdrop-blur-sm">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold nav-link text-blue-400">
              Manzi
            </a>
            <div className="space-x-6">
              <a
                href="#about"
                className="hover:text-blue-400 transition-colors nav-link"
              >
                About
              </a>
              <a
                href="#services"
                className="hover:text-blue-400 transition-colors nav-link"
              >
                Services
              </a>
              <a
                href="#contact"
                className="hover:text-blue-400 transition-colors nav-link"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>

        <main className="min-h-screen bg-gray-950">{children}</main>

        {/* Footer positioned at the bottom of the page */}
        <footer className="bg-black text-white py-4 text-sm">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-4 text-center md:text-left">
              <div>
                <h3 className="font-semibold mb-1 text-blue-400">
                  Availability
                </h3>
                <p className="text-gray-400">24/7</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-blue-400">Email</h3>
                <a
                  href="mailto:hello@manzi.dev"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  hello@manzi.dev
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-blue-400">WhatsApp</h3>
                <a
                  href="https://wa.me/447543827268"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  +44 7543 827268
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-blue-400">Location</h3>
                <p className="text-gray-400">United Kingdom</p>
              </div>
            </div>
            <div className="mt-3 text-center text-xs text-gray-600">
              <p>© {new Date().getFullYear()} Manzi. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
