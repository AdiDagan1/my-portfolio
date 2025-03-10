import React from "react";

const StrengthForDancersProject = () => {
  return (
    <div className="project-page-container strength-for-dancers-page">
      <h1 className="project-title">Strength For Dancers</h1>
      <p className="project-description">
        A user-friendly website designed to provide dancers with high-quality training videos.
        The platform offers an intuitive user experience, seamless navigation between training programs,
        and a modern design focused on performance and responsiveness.
      </p>

      <h2 className="tech-stack-title">Technologies & Tools</h2>
      <ul className="tech-stack-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Hosted on Hostinger</li>
        <li>CDN Integration</li>
      </ul>

      <div className="button-container">
        <a href="https://strengthfordancers.com/" target="_blank" rel="noopener noreferrer" className="visit-site-button">
          Visit the Website
        </a>
      </div>

      <div className="project-images">
        <img src="/images/S3.png" alt="Strength For Dancers Preview 3" className="project-image" /> 
        <img src="/images/S1.png" alt="Strength For Dancers Preview 1" className="project-image" />
        <img src="/images/S4.png" alt="Strength For Dancers Preview 4" className="project-image" />
        <img src="/images/S5.png" alt="Strength For Dancers Preview 5" className="project-image" />
      </div>
    </div>
  );
};

export default StrengthForDancersProject;
