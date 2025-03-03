"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      >
        <source src="/images/abstract.mp4" type="video/mp4" />
      </video>

      {/* Background gradient with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-background"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/3 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <Card className="container mx-auto px-6 py-20 relative z-10 bg-transparent border-none shadow-none">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Business
            </span>{" "}
            Web Development Solutions
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Show off a site that you're proud of.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
            <Button
              asChild
              size="lg"
              className="transform transition-all duration-300 hover:scale-105"
            >
              <a href="#services">View Services</a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="transform transition-all duration-300 hover:scale-105"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator with HoverCard */}
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer">
              <span className="text-muted-foreground mb-2">Scroll</span>
              <svg
                className="w-6 h-6 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-64">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Explore More</h4>
                <p className="text-sm text-muted-foreground">
                  Scroll down to discover our services and more information
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </Card>
    </section>
  );
}
