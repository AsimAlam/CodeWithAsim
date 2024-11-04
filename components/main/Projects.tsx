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
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/FoodApp.png"
          title="Food App"
          description="Developed and deployed a robust full-stack web application with secure user login and signup functionality. Users can seamlessly add food items in specified quantities and access their comprehensive order history."
          address="https://github.com/AsimAlam/FoodApp"
        />
        <ProjectCard
          src="/MusicPlayer.png"
          title="Interactive Website Cards"
          description="Created a pure JavaScript-based application to listen to music in real-time, featuring all functionalities of a typical music player. Users can enjoy an intuitive interface and a seamless listening experience."
          address="https://github.com/AsimAlam/Music-Player"
        />
        <ProjectCard
          src="/Portfolio.png"
          title="Space Themed Website"
          description="Launched a modern portfolio website showcasing my resume and profiles from platforms like GitHub and LinkedIn. It provides detailed information about me, my experience, and the projects I have developed."
          address="https://github.com/AsimAlam/CodeWithAsim"
        />
      </div>
    </div>
  );
};

export default Projects;