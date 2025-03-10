import React from "react";

const AWSWeddingProject = () => {
  return (
    <div className="project-page-container aws-wedding-page">
      <h1 className="project-title">Wedding Planning System with AWS Services</h1>
      <p className="project-description">
        A cloud-based wedding planning platform designed to streamline the management of guest lists, RSVP tracking, 
        budget planning, and seating arrangements. Built using AWS services, the system ensures scalability, security, 
        and efficiency in handling wedding logistics.
      </p>

      <h2 className="tech-stack-title">Technologies & Tools</h2>
      <ul className="tech-stack-list">
        <li>Frontend - HTML, CSS, JavaScript</li>
        <li>Backend - AWS Lambda</li>
        <li>Database - DynamoDB</li>
        <li>Authentication - AWS Cognito</li>
        <li>Storage - Amazon S3</li>
      </ul>

      <div className="button-container">
        <a href="https://weddingplanner1.s3.us-east-1.amazonaws.com/mywebsite/index.html" 
           target="_blank" rel="noopener noreferrer" className="visit-site-button">
          Visit the Website
        </a>
      </div>

      <div className="project-images">
        <img src="/images/AWS5.png" alt="Wedding Planning System Preview 1" className="project-image" />
        <img src="/images/AWS2.png" alt="Wedding Planning System Preview 2" className="project-image" />
        <img src="/images/AWS3.png" alt="Wedding Planning System Preview 3" className="project-image" />
        <img src="/images/AWS7.png" alt="Wedding Planning System Preview 4" className="project-image" />
      </div>
    </div>
  );
};

export default AWSWeddingProject;
