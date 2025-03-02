import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Hi, I'm Manzi</h3>
            <p className="text-lg">
              I'm a passionate web developer with expertise in creating
              beautiful, functional websites that help businesses succeed
              online.
            </p>
            <p className="text-lg">
              With years of experience in web development, I specialize in
              building responsive, user-friendly websites that not only look
              great but also perform exceptionally well.
            </p>
            <p className="text-lg">
              My approach focuses on understanding your business goals and
              translating them into effective digital solutions that drive
              results.
            </p>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/developer.jpg"
              alt="Web Developer at work"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-blue-900/30 flex items-end p-6">
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
