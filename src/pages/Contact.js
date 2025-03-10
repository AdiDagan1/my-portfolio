import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
     
      <h2 className="contact-text">
        If you were impressed by my skills and projects, feel free to reach out! <br/>
        Whether it's for collaboration, opportunities, or just a tech chat,<br/> I'd love to hear from you.
      </h2>
      <a href="/Resume.pdf" download className="custom-button">
         Download My Resume
        </a>
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/adi-dagan-183b272b2/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/AdiDagan1" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:adidagan2271@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default Contact;
