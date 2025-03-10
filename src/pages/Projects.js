import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Strength For Dancers",
    image: "/images/SC.png",
    link: "/projects/strength-for-dancers"
  },
  {
    id: 2,
    title: "Roome - Project In Progress",
    image: "/images/RC.png",
    link: "/projects/roome"
  },
  {
    id: 3,
    title: "AWS Cloud Project",
    image: "/images/AWSC.gif",
    link: "/projects/aws-wedding"
  },
  {
    id: 4,
    title: "Bookstore Project",
    image: "/images/BC.png",
    link: "/projects/google-books"
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <Link key={project.id} to={project.link} className="project-card">
            <h3 className="project-title" style={{ fontFamily: "Jost, sans-serif", marginBottom: "15px" }}>{project.title}</h3>
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image" 
              style={{ 
                width: "100%", 
                maxWidth: "400px", 
                height: "250px", 
                objectFit: "cover", 
                boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.3)", 
                borderRadius: "10px" 
              }} 
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;