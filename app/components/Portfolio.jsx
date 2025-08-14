"use client";

import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Project data structure organized by tiers
const projectsByTier = {
  all: [
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
      image: "/images/doedog-screenshot.png",
      alt: "Clothes Shop Website",
      title: "High End Clothing Store",
      subtitle:
        "E-Commerce set up for a clothes store, made on the E-commerce tier.",
      url: "https://doeanddog.com/",
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
      alt: "Sweet Shop Website",
      title: "Confectionary Store",
      subtitle:
        "E-Commerce set for a confectiory store, made on the E-commerce tier.",
      url: "https://sweetthingsuk.com/",
    },
    {
      id: 5,
      image: "/images/hilltop-screenshot.png",
      alt: "Cafe Website",
      title: "Artisan Cafe Website",
      subtitle: "A website for an Artisan Cafe built on the Professional tier.",
      url: "https://hilltop-five.vercel.app/",
    },
  ],
  starter: [
    {
      id: 1,
      image: "/images/dyari-screenshot.png",
      alt: "Barber Shop Website",
      title: "Barber Shop",
      subtitle: "A barber shop website built on the starter tier. ",
      url: "https://dyaribarbershop.com",
    },
  ],
  professional: [
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
      id: 5,
      image: "/images/hilltop-screenshot.png",
      alt: "Cafe Website",
      title: "Artisan Cafe Website",
      subtitle: "A website for an Artisan Cafe built on the Professional tier.",
      url: "https://hilltop-five.vercel.app/",
    },
  ],
  ecommerce: [
    {
      id: 2,
      image: "/images/doedog-screenshot.png",
      alt: "Clothes Shop Website",
      title: "High End Clothing Store",
      subtitle:
        "E-Commerce set up for a clothes store, made on the E-commerce tier.",
      url: "https://doeanddog.com/",
    },
    {
      id: 4,
      image: "/images/sweetthings-screenshot.png",
      alt: "Sweet Shop Website",
      title: "Confectionary Store",
      subtitle:
        "E-Commerce set for a confectiory store, made on the E-commerce tier.",
      url: "https://sweetthingsuk.com/",
    },
  ],
};

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
            className="object-cover transition-transform duration-500 group-hover:scale-105"
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
          Check out what I've worked on in the past, organized by service tier
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full max-w-3xl mx-auto mb-8 h-14 bg-muted/50">
          <TabsTrigger
            value="all"
            className="flex-1 text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground relative transition-all duration-300 ease-in-out"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="starter"
            className="flex-1 text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground relative transition-all duration-300 ease-in-out"
          >
            Starter
          </TabsTrigger>
          <TabsTrigger
            value="professional"
            className="flex-1 text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 ease-in-out"
          >
            Professional
          </TabsTrigger>
          <TabsTrigger
            value="ecommerce"
            className="flex-1 text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 ease-in-out"
          >
            E-Commerce
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="all"
          className="transition-all duration-500 ease-in-out data-[state=inactive]:opacity-0 data-[state=active]:opacity-100"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 animate-in fade-in duration-1000">
            {projectsByTier.all.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent
          value="starter"
          className="transition-all duration-500 ease-in-out data-[state=inactive]:opacity-0 data-[state=active]:opacity-100"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 animate-in fade-in duration-1000">
            {projectsByTier.starter.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent
          value="professional"
          className="transition-all duration-500 ease-in-out data-[state=inactive]:opacity-0 data-[state=active]:opacity-100"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 animate-in fade-in duration-1000">
            {projectsByTier.professional.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent
          value="ecommerce"
          className="transition-all duration-500 ease-in-out data-[state=inactive]:opacity-0 data-[state=active]:opacity-100"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 animate-in fade-in duration-1000">
            {projectsByTier.ecommerce.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
