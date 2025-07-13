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
    image: "/images/dyari-screenshot.png",
    alt: "Barber Shop Website",
    title: "Barber Shop",
    subtitle: "A barber shop website built on the starter tier. ",
    url: "https://dyaribarbershop.com",
  },
  {
    id: 2,
    image: "/images/hilltop-screenshot.png",
    alt: "Cafe Website",
    title: "Artisan Cafe Website",
    subtitle: "A website for an Artisan Cafe built on the Professional tier.",
    url: "https://hilltop-five.vercel.app/",
  },
  {
    id: 3,
    image: "/images/idecor8-screenshot.png",
    alt: "Home Decor Website",
    title: "Home Decor",
    subtitle:
      "A home decorating demonstration site built on the Professional tier.",
    url: "https://idecor8.netlify.app/",
  },
  {
    id: 4,
    image: "/images/sweetthings-screenshot.png",
    alt: "Sweet shop website",
    title: "Confectionary Store",
    subtitle:
      "E-Commerce set for a confectiory store, made on the ecommerce tier.",
    url: "https://sweetthingsuk.com/",
  },
  {
    id: 5,
    image: "/images/doedog-screenshot.png",
    alt: "Clothes shop website",
    title: "High end clothing store",
    subtitle:
      "E-Commerce set up for a clothes store, made on the ecommerce tier.",
    url: "https://doeanddog.com/",
  },
];

// Project Card Component
function ProjectCard({ project }) {
  return (
    <Card className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative h-[300px] overflow-hidden">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader className="pt-6">
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
      </a>
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
