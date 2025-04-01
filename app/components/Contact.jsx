"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ loading: false, success: true, error: false });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: true });
    }
  };

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
          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              type="hidden"
              name="access_key"
              value="85945fd0-3dfb-4518-ba3c-9b9045145fd6"
            />
            <input
              type="hidden"
              name="subject"
              value="New Contact Form Submission"
            />
            <input
              type="hidden"
              name="from_name"
              value="Portfolio Contact Form"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block font-medium text-foreground"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
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
                  name="email"
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
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
              />
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
                name="message"
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
                disabled={status.loading}
              >
                <span className="flex items-center">
                  {status.loading ? "Sending..." : "Send Message"}
                  {!status.loading && <ArrowRight className="ml-2 h-5 w-5" />}
                </span>
              </Button>
            </div>

            {status.success && (
              <p className="text-green-500 text-center">
                Thank you for your message! I'll get back to you soon.
              </p>
            )}
            {status.error && (
              <p className="text-red-500 text-center">
                Sorry, there was an error sending your message. Please try
                again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
