"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Jab Deep Jale",
    description: "Flute Cover",
    image: "/images/projects/1.png",
    tag: ["All", "Solo"],
    previewUrl: "https://www.youtube.com/watch?v=JC_BXEwf0gY",
  },
  {
    id: 2,
    title: "Concert Kochi",
    description: "Music for Charity Project",
    image: "/images/projects/2.webp",
    tag: ["All", "Concert"],
    
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Bansuri Indian Flute",
    description: "Bansuri Indian flute presentation",
    image: "/images/projects/3.webp",
    tag: ["All", "Solo"],
    
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Saathiya Tune Kya Kiya (cover)",
    description: "Saathiya Tune Kya Kiya (cover)",
    image: "/images/projects/4.webp",
    tag: ["All", "Concert"],
    
    previewUrl: "https://www.youtube.com/watch?v=nKggbBMtxc4",
  },
  {
    id: 5,
    title: "Abhi Mujh Mein + Gerua",
    description: "Flute + Guitar Combination",
    image: "/images/projects/5.webp",
    tag: ["All", "Solo"],
    
    previewUrl: "https://www.youtube.com/watch?v=QcqBZ4s14qI",
  },
  {
    id: 6,
    title: "Jeevamshamayi live",
    description: "Solace Charity fundraiser, Dec 2021",
    image: "/images/projects/6.webp",
    tag: ["All", "Solo"],
    
    previewUrl: "https://www.youtube.com/watch?v=OXEs_gMG37Q",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Solo"
          isSelected={tag === "Solo"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Concert"
          isSelected={tag === "Concert"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;