import React from "react";

const RoomeProject = () => {
  return (
    <div className="project-page-container">
      <h1 className="project-title">Roome - Project In Progress</h1>
      <p className="project-description">
        A platform designed to simplify room rentals and co-living experiences.
        Focused on seamless user experience, efficiency, and smart matching between renters and hosts.
      </p>
      
      <h2 className="tech-stack-title">Technologies & Tools</h2>
      <ul className="tech-stack-list">
      <li>Frontend - React.js</li>
      <li>Backend - C#.NET</li>
      <li>Database - SSMS</li>
      <li>AI & Algorithms - Smart Recommendation System</li>
    </ul>

      
      <div className="project-images">
        <img src="/images/R1.png" alt="Roome Preview 1" className="project-image" />
        <img src="/images/R2.png" alt="Roome Preview 2" className="project-image" />
        <img src="/images/R3.png" alt="Roome Preview 3" className="project-image" />
      </div>
    </div>
  );
};

export default RoomeProject;