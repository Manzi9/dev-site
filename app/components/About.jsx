import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">About</h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-3xl font-semibold text-blue-400">
              Hi, I'm Manzi
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate web developer with expertise in creating
              beautiful, functional websites that help businesses succeed
              online.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With years of experience in web development, I specialize in
              building responsive, user-friendly websites that not only look
              great but also perform exceptionally well.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My approach focuses on understanding your business goals and
              translating them into effective digital solutions that drive
              results.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg transform transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl order-1 md:order-2 group transform transition-all duration-500 hover:translate-y-[-10px]">
            <Image
              src="/images/developer.png"
              alt="Web Developer at work"
              fill
              className="object-cover transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end p-8 transition-opacity duration-300 group-hover:opacity-0">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Manzi</h3>
                <p className="text-lg">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
