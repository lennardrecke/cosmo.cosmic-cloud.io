"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "John Doe",
    avatar: "A",
    title: "CEO",
    description: "This is the best tool ever!",
  },
  {
    name: "Chris P. Bacon",
    avatar: "A",
    title: "Police Officer",
    description: "I use this tool to generate fake police reports. It's great!",
  },
  {
    name: "Jimmy Neutron",
    avatar: "A",
    title: "Scientist",
    description: "This tool is great for generating scientific papers.",
  },
  {
    name: "old Guy",
    avatar: "A",
    title: "Software Engineer",
    description: "I use this tool every day! Can I go home now?",
  },
];
export const LandingContent = () => {
  return (
    <div className="px-1ß pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.name}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div className="">
                  <p className="test-lg">{testimonial.name}</p>
                  <p className="text-zinc-400 text-sm">{testimonial.title}</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{testimonial.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
