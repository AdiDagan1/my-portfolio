import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>ABOUT ME</h1>
      

      <p>
        I'm Adi Dagan, a Full-Stack Developer & Computer Science Student.<br /><br />
        Passionate about technology, innovation, and problem-solving, with a strong foundation in full-stack development and application design.<br /><br />
        A third-year Computer Science student (25 years old), specializing in application development, with hands-on experience in JavaScript, React, Python, C#, Java, AWS, and database management.<br /><br />
        Dedicated to building efficient, scalable, and user-friendly applications, constantly exploring new technologies and frameworks to expand knowledge and refine skills.<br /><br />
        Explore my projects and feel free to connect!
      </p>

      <div className="button-container">
        <Link to="/contact">
          <button className="custom-button">Contact Me</button>
        </Link>
        <Link to="/projects">
          <button className="custom-button">Check Out My Latest Project</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
