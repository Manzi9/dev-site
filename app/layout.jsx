import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manzi - Web Development Services",
  description: "Professional web development services by Manzi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">
              Manzi
            </a>
            <div className="space-x-6">
              <a href="#about" className="hover:text-gray-300">
                About
              </a>
              <a href="#services" className="hover:text-gray-300">
                Services
              </a>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </div>
          </nav>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p>© {new Date().getFullYear()} Manzi. All rights reserved.</p>
            <p className="mt-2">hello@manzi.dev</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
