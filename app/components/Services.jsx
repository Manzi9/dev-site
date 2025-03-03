"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckIcon, XIcon } from "lucide-react";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            My Services
          </h2>
          <Separator className="w-20 mx-auto mb-6 bg-primary" />
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            I offer professional web development services tailored to your
            needs. Choose the package that works best for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Lump Sum Package */}
          <Card className="relative overflow-hidden border-t-4 border-primary">
            <CardHeader className="text-center space-y-2">
              <h3 className="text-2xl font-bold">Lump Sum</h3>
              <p className="text-muted-foreground">
                One-time payment for your website
              </p>
              <div className="mt-4">
                <span className="text-4xl font-bold">£1,800</span>
                <span className="text-muted-foreground ml-2">
                  + £25/month hosting
                </span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-4">
                <Feature text="Design and development" included />
                <Feature text="£25 a month hosting" included />
                <Feature text="Up to 5 pages included" included />
                <Feature text="£70 per additional page after page 5" included />
                <Feature text="7 days a week support" included={false} />
                <Feature text="Lifetime updates" included={false} />
              </div>
            </CardContent>

            <CardFooter className="flex justify-center">
              <Button asChild size="lg" className="w-full max-w-xs">
                <a href="#contact">Get Started</a>
              </Button>
            </CardFooter>
          </Card>

          {/* Monthly Subscription */}
          <Card className="relative overflow-hidden border-t-4 border-primary">
            <Badge
              className="absolute -right-10 top-6 px-10 py-1 rotate-45 transform bg-foreground text-background font-semibold"
              variant="default"
            >
              Popular
            </Badge>

            <CardHeader className="text-center space-y-2">
              <h3 className="text-2xl font-bold">Monthly Subscription</h3>
              <p className="text-muted-foreground">Minimum 6 months.</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">£140</span>
                <span className="text-muted-foreground ml-2">/month</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-4">
                <Feature text="Design and development" included />
                <Feature text="Hosting included" included />
                <Feature text="Up to 5 pages included" included />
                <Feature text="£70 per additional page after page 5" included />
                <Feature text="7 days a week support" included />
                <Feature text="Lifetime updates" included />
              </div>
            </CardContent>

            <CardFooter className="flex justify-center">
              <Button
                asChild
                size="lg"
                variant="default"
                className="w-full max-w-xs"
              >
                <a href="#contact">Get Started</a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Portfolio Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Recent Projects
            </h2>
            <Separator className="w-20 mx-auto mb-6 bg-primary" />
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              Check out what I've worked on in the past
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="group overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/ecommerce.jpg"
                  alt="E-commerce Website"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold">E-commerce Platform</h3>
                <p className="text-muted-foreground">
                  A fully responsive online store with secure payment processing
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Stripe</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="group overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/restaurant.jpg"
                  alt="Restaurant Website"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold">Restaurant Website</h3>
                <p className="text-muted-foreground">
                  An elegant website with online reservation system
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">API Integration</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="group overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/analytics.jpg"
                  alt="Analytics Dashboard"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold">Analytics Dashboard</h3>
                <p className="text-muted-foreground">
                  A comprehensive data visualization platform
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">D3.js</Badge>
                  <Badge variant="secondary">Firebase</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ text, included }) {
  return (
    <div className="flex items-start">
      {included ? (
        <CheckIcon className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
      ) : (
        <XIcon className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
      )}
      <p className="text-muted-foreground">{text}</p>
    </div>
  );
}
