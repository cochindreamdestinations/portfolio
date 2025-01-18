"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Moham kondu njan- NEMA event",
    description: "Flute Cover",
    image: "/images/projects/1.png",
    tag: ["All", "Solo"],
    previewUrl: "https://youtu.be/i0_ef7pzYZ0?si=E7wEWMTQA2cV-hw2",
  },
  {
    id: 2,
    title: "Saathiyaa tu ne- GRMD fundraiser event",
    description: "Music for Charity Project",
    image: "/images/projects/2.jpeg",
    tag: ["All", "Concert"],
    
    previewUrl: "https://youtu.be/QcqBZ4s14qI?si=5NKDWcKWp3Owd7fU",
  },
  {
    id: 3,
    title: "Jab deep jale aana ",
    description: "Performing online for IAGB at Covid time",
    image: "/images/projects/IMG_0139.webp",
    tag: ["All", "Solo"],
    
    previewUrl: "https://youtu.be/JC_BXEwf0gY?feature=shared",
  },
  {
    id: 4,
    title: "Cover for Abhi mujh mein and Gerua",
    description: "November 2021",
    image: "/images/projects/IMG_1163.webp",
    tag: ["All", "Concert"],
    
    previewUrl: "https://youtu.be/nKggbBMtxc4?si=5RB_qfrRSZ10q-Lp",
  },
  {
    id: 5,
    title: "Cover for Suraj hua madham- January 2024",
    description: "January 2024",
    image: "/images/projects/IMG_9544.jpeg",
    tag: ["All", "Solo"],
    
    previewUrl: "https://youtu.be/fmIe-iDGMC4?si=VBYajlANcueGoNuv",
  },
  {
    id: 6,
    title: "Mother’s Day special for mom- May 2024",
    description: "Mothers day special",
    image: "/images/projects/IMG_9536.jpeg",
    tag: ["All", "Solo"],
    
    previewUrl: "https://youtu.be/H7W3R67WpQI?si=J3tUnoDsmi0UywG-",
  },
  
  {
    id: 8,
    title: "Playing Indian National Anthem for IAGB- January 2022",
    description: "IAGB- January 2022",
    image: "/images/projects/9.webp",
    tag: ["All", "Solo"],
    
    previewUrl: "https://www.youtube.com/watch?v=rZymx9_U80Q",
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