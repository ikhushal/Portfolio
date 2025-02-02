"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const SkillBar = ({ skillName, progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimatedProgress(progress), 200);
    return () => clearTimeout(timeout);
  }, [progress]);

  return (
    <div className="w-full mb-4"> {/* Added spacing */}
      <p className="mb-2 text-sm">{skillName} - {progress}%</p>
      <div className="w-full bg-gray-700 h-2.5 rounded-md overflow-hidden">
        <div
          className="h-2.5 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-md transition-all duration-1000 ease-in-out"
          style={{ width: `${animatedProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillCircle = ({ skillName, progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const timeout = setTimeout(() => setAnimatedProgress(progress), 200);
    return () => clearTimeout(timeout);
  }, [progress]);

  const strokeDashoffset =
    circumference - (animatedProgress / 100) * circumference;

  return (
    <div className="skill-circle-container text-center flex-1 m-4"> {/* Added margin */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120px"
        height="120px"
        className="skill-circle mx-auto"
      >
        <defs>
          <linearGradient id="GradientColor">
          <stop offset="0%" stopColor="#FF0000" />
            <stop offset="50%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FFD700" />

          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r={radius} fill="none" stroke="#ddd" strokeWidth="7" />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="url(#GradientColor)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 60 60)"
          style={{
            transition: "stroke-dashoffset 1.5s ease-in-out",
          }}
        />
      </svg>
      <p className="mt-2">{skillName}</p>
      <p>{progress}%</p>
    </div>
  );
};

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="w-1/2 ">
          <h3 className="text-xl font-bold mb-4">Hard Skills</h3>
          <SkillBar skillName="C/C++/Python" progress={80} />
          <SkillBar skillName="MS Excel/Word" progress={90} />
          <SkillBar skillName="System Verilog" progress={85} />
          <SkillBar skillName="PostgreSQL" progress={70} />
          <SkillBar skillName="MATLAB" progress={60} />
          <SkillBar skillName="JavaScript" progress={60} />
          <SkillBar skillName="Machine Learning" progress={70} />
          <SkillBar skillName="HTML, CSS, JavaScript" progress={85} />
          <SkillBar skillName="AWS, Kubernetes" progress={70} />
          <SkillBar skillName="8051 Microcontroller" progress={80} />
          <SkillBar skillName="EEG Device Data Collection" progress={90} />
        </div>
        <div className="w-1/2 text-center">
          <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <SkillCircle skillName="Communication" progress={70} />
            <SkillCircle skillName="Teamwork" progress={90} />
            <SkillCircle skillName="Problem-Solving" progress={80} />
            <SkillCircle skillName="Adaptability" progress={75} />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI)
        <h4>- Bachelors of Science in Computer Engineering</h4>
        </li>
        <li>The Fazlehaq College Mardan</li>
        <h4>- HSSC Pre-Engineering</h4>
        <li>The City School Mardan Campus</li>
        <h4>- SSC Matriculation</h4>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Advanced Google Data Analytics Professional Certificate (Google, Coursera)</li>
        <li>Introduction to Cloud Learning (IBM, Coursera)</li>
        <li>Supervised Machine Learning: Regression and Classification (DeepLearning.AI, Stanford University, Coursera)</li>
        <li>HTML, CSS, and JavaScript for Web Developers (Johns Hopkins University, Coursera)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
  <section id="about" className="relative text-white py-20">
    <div className="w-full h-[500px] relative overflow-hidden flex justify-center items-center">
      <Image
        src="/images/about-image.jpg"
        alt="About Me"
        layout="intrinsic"
        width={1000}
        height={500}
        objectFit="contain"
        className="rounded-lg"
      />
    </div>
    <div className="text-center mt-4">
      <p className="text-lg italic text-white p-4">
        Captured during my 8-week internship at Jazz Digital Headquarters, Islamabad, where I gained hands-on experience in cloud computing, IT tools, and regulatory affairs. This internship helped me develop both technical and professional skills, preparing me for the next phase in my career.
      </p>
    </div>
    <div className="relative z-10 max-w-5xl mx-auto text-center px-6 mt-8">
      <h2 className="text-5xl font-bold mb-6">About Me</h2>
      <p className="text-lg leading-relaxed">
        I’m a Computer Engineering graduate with a strong focus on software testing, data analysis, and cloud computing. 
        Skilled in Python, SQL, and automation, I enjoy working with large datasets, debugging complex systems, and optimizing performance. 
        With hands-on experience in web development, backend technologies, and cloud platforms like AWS and Kubernetes, 
        I am passionate about building scalable solutions. Whether it’s testing software, analyzing trends, or deploying applications, 
        I’m always eager to learn, innovate, and contribute to cutting-edge technology.
      </p>
      <div className="flex justify-center mt-8 space-x-4">
        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>
      </div>
      <div className="mt-8 text-left">
        {TAB_DATA.find((t) => t.id === tab).content}
      </div>
    </div>
  </section>
  );
};

export default AboutSection;
