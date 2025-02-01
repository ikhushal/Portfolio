"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "MIND's EYE (FYP)",
    description: "Currectly Working on it",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ikhushal/Mind-Eye-EEG-guided-image-reconstruction",
    previewUrl: "https://github.com/ikhushal/Mind-Eye-EEG-guided-image-reconstruction",
  },
  {
    id: 2,
    title: "Line Follower & Obstacle Avoiding Robot using 8051 Microcontroller & Arduino UNO",
    description: "This project involves the design and implementation of a versatile robotic system capable of line following and obstacle avoidance. Utilizing an Arduino Uno, 8051 microcontroller, IR sensors, H-bridge motor driver (L293D), and HC-SR04 Ultra- sonic Sonar sensor, we have constructed a smart robot car capable of navigating through diverse scenarios.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ikhushal/Obstacle-Avoiding-and-line-follower-robot-arduino-uno/tree/main",
    previewUrl: "https://github.com/ikhushal/Obstacle-Avoiding-and-line-follower-robot-arduino-uno/blob/main/README.md",
  },
  {
    id: 3,
    title: "Simulating Epidemic Spread Using the SIR Model",
    description: "The project simulates epidemic modeling using the SIR model, solving its Ordinary Differntial Equations (ODEs) numerically to analyze the effects of transmission rate (β), recovery rate (γ) on population.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ikhushal/Simulating-Epidemic-Spread-Using-the-SIR-Model",
    previewUrl: "https://github.com/ikhushal/Simulating-Epidemic-Spread-Using-the-SIR-Model",
  },
  {
    id: 4,
    title: "Movie Recommendation System",
    description: "This project focuses on building a movie recommendation system using Collaborative Filtering. The system processes and cleans movie datasets, handling missing values, removing duplicates, and extracting key features.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ikhushal/Movie-Recommendation-System-Using-Collaborative-Filtering/tree/main",
    previewUrl: "https://github.com/ikhushal/Movie-Recommendation-System-Using-Collaborative-Filtering/blob/main/README.md",
  },
  {
    id: 5,
    title: "FMRI 1st level Analysis on Functional Dataset With SPM12",
    description: "Dataset is not uploaded on git because it was too heavy, the IEEE report is there on git.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ikhushal/-title-FMRI-1st-level-Analysis-on-Functional-Dataset-With-SPM12-",
    previewUrl: "https://github.com/ikhushal/-title-FMRI-1st-level-Analysis-on-Functional-Dataset-With-SPM12-",
  },
  {
    id: 6,
    title: "Speech Signal Enhancement Using FIR Filtering",
    description: "This project focuses on enhancing speech signals by reducing unwanted noise using spectrum analysis and filtering techniques. The primary objective is to improve speech quality by applying a low-pass Finite Impulse Response (FIR) filter to remove high-frequency noise while preserving essential speech components.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ikhushal/Speech-Signal-Enhancement-Using-FIR-Filtering",
    previewUrl: "https://github.com/ikhushal/Speech-Signal-Enhancement-Using-FIR-Filtering/blob/main/README.md",
  },
  {
    id: 7,
    title: "How to Handle Large Datasets? PCA Comes to Rescue",
    description: "This paper explores the application of Principal Component Analysis (PCA) to reduce the dimensionality ofmulti-spectral images and includes a comprehensive error analysis of the transformed images.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ikhushal/Principal-Component-Analysis-PCA-to-reduce-the-dimensionality-of-multi-spectral-images",
    previewUrl: "https://github.com/ikhushal/Principal-Component-Analysis-PCA-to-reduce-the-dimensionality-of-multi-spectral-images",
  },
  {
    id: 8,
    title: "Room Booking Website",
    description: "Private, not upladed on Git.I built this Room Booking Website using PostgreSQL, Flask, HTML, CSS, and JavaScript. It functions similarly to Airbnb, allowing users to browse, book, and manage room reservations seamlessly.",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Smart Tour Booking System",
    description: "The Smart Tour Booking System is a C++-based application that allows users to browse and select tourism packages, enter their details, and calculate trip costs dynamically.",
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ikhushal/Smart-Tour-Booking-System",
    previewUrl: "https://github.com/ikhushal/Smart-Tour-Booking-System/blob/main/README.md",
  },
  {
    id: 10,
    title: "Online Quiz & Grading System",
    description: "The Online Quiz & Grading System is a C++-based program designed to manage quizzes and student scores efficiently",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ikhushal/Online-Quiz-Grading-System",
    previewUrl: "https://github.com/ikhushal/Online-Quiz-Grading-System/blob/main/README.md",
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
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
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
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
