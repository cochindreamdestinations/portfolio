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
        <Image src="/images/about-image.png" width={500} height={500} alt="Hero Image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Sachit Kurup&apos;s musical journey began at a young age on the violin,bansuri and vocals. For five years he rigorously trained in Carnatic flute under Guru Shri Karthik Krishna. Sachit&apos;s dedication and talent are recognize through accolades including winning for Hindi Manch Sa Re Ga Ma Pa competition at 7. He recently reveived the prestigious IAGB Youth Icon Award in 2023, solidifying his status as a rising star. Sachit&apos;s mastery of multiple disciplines and unwavering commit ment havemade his a versatile accomplished young artiste. As he continues honing his Carnatic skills Sachit remains dedicated to pushing boundaries and inspiring generations, his journey testifying to the power of music and youthful potential
          </p>
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
              Certifications{" "}
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