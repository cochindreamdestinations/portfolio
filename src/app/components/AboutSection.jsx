"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Violin</li>
        <li>Bansuri</li>
        <li>Carnatic Flute</li>
        <li>Vocals</li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Music Academy</li>
        <li>Kochi</li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>IAGB Youth Icon Award</li>
        <li>Sa Re Ga Ma Pa</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.webp" width={500} height={500} alt="Hero Image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Sachit Kurup's musical journey began as early as age 4, sparked by an innate love for vocal 
music and nurtured by the vibrant environment of his father’s band rehearsals. From listening to 
a rich tapestry of musical genres even before birth, Sachit has grown into an exceptional and 
versatile instrumentalist. He plays a wide range of instruments varying from the Violin, the Indian 
Flute, all the way to the Trumpet. His deepest  connection to the woodwind family, particularly 
during live performances, has become a hallmark of his artistry. 
Over the years, Sachit has showcased his immense talent across a variety of platforms. From 
original dance recitals highlighting traditional music to dynamic jazz performances, wind 
ensembles, and powerful marching band displays, his range knows no bounds. He has put his 
talents on showcase with well reputed musicians and artists from all across India. He has 
participated in numerous competitions and won several awards. Sachit’s passion has taken him 
from intimate small-group performances to captivating solo showcases at cultural festivals and 
community fundraisers, leaving audiences moved by his dedication and skill. 
For Sachit, music isn’t just a hobby—it’s an integral part of who he is, a lifelong passion woven 
into every moment of his life. </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Awards & Shows{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;