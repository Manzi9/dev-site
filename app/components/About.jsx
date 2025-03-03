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
            <h3 className="text-2xl font-semibold">Hey, I'm Manzi!</h3>
            <p className="text-lg">
              I'm a Web Developer that focusses on providing solutions to your
              online needs. In today’s digital world, your website is often the
              first impression customers get—so it needs to be fast, modern, and
              easy to use.
            </p>
            <p className="text-lg">
              However, I've noticed that lots of businesses find the upfront
              cost of a new website to be a big barrier in cementing their
              online presence. I'm here to change that. With £0 down monthly
              packages to ensure that a sleek, functional responsive website is
              accessible to whoever needs one.
            </p>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl group">
            <Image
              src="/images/developer.png"
              alt="Web Developer at work"
              fill
              className="object-cover transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-blue-900/30 flex items-end p-6 transition-opacity duration-300 group-hover:opacity-0">
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
