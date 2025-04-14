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
          {/* Starter Lump Sum Package */}
          <Card className="relative overflow-hidden border-t-4 border-primary">
            <CardHeader className="text-center space-y-2">
              <h3 className="text-2xl font-bold">Starter Lump Sum</h3>
              <p className="text-muted-foreground">
                One-time payment for your website
              </p>
              <div className="mt-4">
                <span className="text-4xl font-bold">£950</span>
                <span className="text-muted-foreground ml-2">
                  + £25/month hosting
                </span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-4">
                <Feature text="Design and development" included />
                <Feature text="£25 a month hosting" included />
                <Feature text="Up to 3 pages included" included />
                <Feature text="£70 per additional page after page 3" included />
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

          {/* Starter Monthly Subscription */}
          <Card className="relative overflow-hidden border-t-4 border-primary">
            <Badge
              className="absolute -right-10 top-6 px-10 py-1 rotate-45 transform bg-foreground text-background font-semibold"
              variant="default"
            >
              Popular
            </Badge>

            <CardHeader className="text-center space-y-2">
              <h3 className="text-2xl font-bold">Starter Monthly</h3>
              <p className="text-muted-foreground">Minimum 6 months.</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">£50</span>
                <span className="text-muted-foreground ml-2">/month</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-4">
                <Feature text="Design and development" included />
                <Feature text="Hosting included" included />
                <Feature text="Up to 3 pages included" included />
                <Feature text="£70 per additional page after page 3" included />
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

          {/* Professional Lump Sum Package */}
          <Card className="relative overflow-hidden border-t-4 border-primary">
            <CardHeader className="text-center space-y-2">
              <h3 className="text-2xl font-bold">Professional Lump Sum</h3>
              <p className="text-muted-foreground">
                One-time payment for your website
              </p>
              <div className="mt-4">
                <span className="text-4xl font-bold">£2,800</span>
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

          {/* Professional Monthly Subscription */}
          <Card className="relative overflow-hidden border-t-4 border-primary">
            <Badge
              className="absolute -right-10 top-6 px-10 py-1 rotate-45 transform bg-foreground text-background font-semibold"
              variant="default"
            >
              Popular
            </Badge>

            <CardHeader className="text-center space-y-2">
              <h3 className="text-2xl font-bold">Professional Monthly</h3>
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

          {/* Ecommerce Lump Sum Package */}
          <Card className="relative overflow-hidden border-t-4 border-primary">
            <CardHeader className="text-center space-y-2">
              <h3 className="text-2xl font-bold">Ecommerce Lump Sum</h3>
              <p className="text-muted-foreground">
                One-time payment for your website
              </p>
              <div className="mt-4">
                <span className="text-4xl font-bold">£3,000</span>
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
                <Feature text="Ecommerce functionality" included />
                <Feature text="Payment gateway integration" included />
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

          {/* Ecommerce Monthly Subscription */}
          <Card className="relative overflow-hidden border-t-4 border-primary">
            <Badge
              className="absolute -right-10 top-6 px-10 py-1 rotate-45 transform bg-foreground text-background font-semibold"
              variant="default"
            >
              Popular
            </Badge>

            <CardHeader className="text-center space-y-2">
              <h3 className="text-2xl font-bold">Ecommerce Monthly</h3>
              <p className="text-muted-foreground">Minimum 6 months.</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">£190</span>
                <span className="text-muted-foreground ml-2">/month</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-4">
                <Feature text="Design and development" included />
                <Feature text="Hosting included" included />
                <Feature text="Up to 5 pages included" included />
                <Feature text="£70 per additional page after page 5" included />
                <Feature text="Ecommerce functionality" included />
                <Feature text="Payment gateway integration" included />
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
