"use client";

import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Portfolio() {
  return (
    <div className="mt-24 p-10">
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
              src="/images/dyari-mockup.png"
              alt="E-commerce Website"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <CardHeader>
            <h3 className="text-xl font-bold">Barber Shop</h3>
            <p className="text-muted-foreground">
              A barber shop website with a clean and modern design
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {/* <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">Stripe</Badge> */}
            </div>
          </CardContent>
        </Card>

        {/* Project 2 */}
        <Card className="group overflow-hidden">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src="/images/coffee-mockup.png"
              alt="Restaurant Website"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <CardHeader>
            <h3 className="text-xl font-bold">Artisan Cafe Website</h3>
            <p className="text-muted-foreground">
              A responsive cafe website a coffee menu in-built.
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {/* <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">API Integration</Badge> */}
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
              {/* <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">D3.js</Badge>
              <Badge variant="secondary">Firebase</Badge> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
