import React from "react";

const GoogleBooksProject = () => {
  return (
    <div className="project-page-container google-books-page">
      <h1 className="project-title">Google Books Digital Library</h1>
      <p className="project-description">
        A digital library platform that enables users to browse, borrow, and exchange books with real-time messaging. 
        The system integrates Google's Books API to provide a vast collection of books, alongside smart recommendation 
        algorithms for personalized book suggestions.
      </p>

      <h2 className="tech-stack-title">Technologies & Tools</h2>
      <ul className="tech-stack-list">
        <li>Frontend - HTML, CSS, JavaScript</li>
        <li>Backend - C#.NET</li>
        <li>Database - SSMS</li>
        <li>API Integration - Google Books API</li>
        <li>Real-Time Notifications - WebSockets</li>
        <li>AI & Algorithms - Smart Book Recommendation System</li>
      </ul>

      <div className="button-container">
        <a href="https://proj.ruppin.ac.il/cgroup76/test2/tar6/index.html" 
           target="_blank" rel="noopener noreferrer" className="visit-site-button">
          Visit the Website
        </a>
      </div>

      <div className="project-images">
        <img src="/images/B1.png" alt="Google Books Preview 1" className="project-image" />
        <img src="/images/B3.png" alt="Google Books Preview 2" className="project-image" />
        <img src="/images/B5.png" alt="Google Books Preview 3" className="project-image" />
        <img src="/images/B4.png" alt="Google Books Preview 4" className="project-image" />
       
      </div>
    </div>
  );
};

export default GoogleBooksProject;
