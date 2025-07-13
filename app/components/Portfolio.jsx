"use client";

import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Project data structure
const projects = [
  {
    id: 1,
    image: "/images/dyari-mockup.png",
    alt: "Barber Shop Website",
    title: "Barber Shop",
    subtitle: "A barber shop website built on the starter tier. ",
  },
  {
    id: 2,
    image: "/images/cafe-mockup.png",
    alt: "Cafe Website",
    title: "Artisan Cafe Website",
    subtitle: "A website for an Artisan Cafe built on the Professional tier.",
  },
  {
    id: 3,
    image: "/images/decor-mockup.png",
    alt: "Home Decor Website",
    title: "Home Decor",
    subtitle: "A home decorating site built on the Professional tier.",
  },
];

// Project Card Component
function ProjectCard({ project }) {
  return (
    <Card className="group overflow-hidden">
      <div className="relative h-[300px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-muted-foreground">{project.subtitle}</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {/* <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">Next.js</Badge>
          <Badge variant="secondary">Stripe</Badge> */}
        </div>
      </CardContent>
    </Card>
  );
}

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
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
