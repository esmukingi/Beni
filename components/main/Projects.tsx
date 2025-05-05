import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="w-full flex flex-col items-center justify-center gap-10 px-10 md:flex-row md:justify-center">
        <ProjectCard
          src="/NextWebsite.png"
          title="PrepWise AI Mockup Interview Website"
          description="A smart mock interview platform powered by AI that helps users practice and improve their interview skills through realistic, customizable interview scenarios."
        />
        <ProjectCard
          src="/CardImage.png"
          title="NexChat – Fullstack Chat App"
          description="A full-featured real-time chat application with authentication, private/group messaging, and admin controls. Built using React, Express, MONGO DB, and Tailwind CSS."
          
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="An immersive, animated web experience inspired by outer space, featuring smooth scroll effects and futuristic visuals using modern front-end technologies."
          
        />
      </div>
    </div>
  );
};

export default Projects;
