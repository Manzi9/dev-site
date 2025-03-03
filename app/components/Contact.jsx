"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 bg-background overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Contact Me
          </h2>
          <Separator className="w-24 mx-auto mb-6 bg-primary" />
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            Fill in the contact form, or email me directly at{" "}
            <a
              href="mailto:hello@manzi.dev"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              hello@manzi.dev
            </a>
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block font-medium text-foreground"
                >
                  Name
                </label>
                <Input type="text" id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block font-medium text-foreground"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="block font-medium text-foreground"
              >
                Subject
              </label>
              <Input type="text" id="subject" placeholder="Subject" required />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block font-medium text-foreground"
              >
                Message
              </label>
              <Textarea
                id="message"
                rows="5"
                placeholder="Your message"
                required
              />
            </div>

            <div className="text-center md:text-left">
              <Button
                type="submit"
                size="lg"
                className="transform transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
