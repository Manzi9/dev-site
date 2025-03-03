"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">About</h2>
          <Separator className="w-24 mx-auto mb-6 bg-primary" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Hey, I'm Manzi!
            </h3>
            <p className="text-lg text-muted-foreground">
              I'm a Web Developer that focusses on providing solutions to your
              online needs. In today's digital world, your website is often the
              first impression customers get—so it needs to be fast, modern, and
              easy to use.
            </p>
            <p className="text-lg text-muted-foreground">
              However, I've noticed that lots of businesses find the upfront
              cost of a new website to be a big barrier in cementing their
              online presence. I'm here to change that. With £0 down monthly
              packages to ensure that a sleek, functional responsive website is
              accessible to whoever needs one.
            </p>

            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="transform transition-all duration-300 hover:scale-105"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Card className="relative h-96 overflow-hidden border-none bg-transparent shadow-xl">
                <div className="relative h-full w-full flex items-center justify-center">
                  <Image
                    src="/images/developer.png"
                    alt="Web Developer at work"
                    width={500}
                    height={500}
                    className="max-h-full max-w-full object-contain transition-all duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-primary/30 flex items-end p-6 transition-opacity duration-300 hover:opacity-0">
                    <div className="text-background">
                      <h3 className="text-2xl font-bold mb-2">Manzi</h3>
                      <p className="text-lg">Web Developer</p>
                    </div>
                  </div>
                </div>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Manzi</h4>
                  <p className="text-sm text-muted-foreground">
                    Full-stack web developer specializing in modern, responsive
                    web applications
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </section>
  );
}
