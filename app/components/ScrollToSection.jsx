"use client";

import { useEffect } from "react";

export default function ScrollToSection() {
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleSmoothScroll = (e) => {
      // Only process links that point to an ID on the page
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();

        // Get the target element
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Get the header height to offset the scroll position
          const headerHeight = document.querySelector("header").offsetHeight;

          // Calculate the position to scroll to
          const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

          // Scroll smoothly to the target
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    // Add event listeners to all navigation links
    const navLinks = document.querySelectorAll('header a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    // Cleanup event listeners on component unmount
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return null; // This component doesn't render anything
}
