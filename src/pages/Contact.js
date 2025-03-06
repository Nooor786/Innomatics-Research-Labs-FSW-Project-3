import "../pages/PageStyles.css";
import contactBg from "../assets/background.avif";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons

const Contact = () => {
  return (
    <div className="page" style={{ backgroundImage: `url(${contactBg})` }}>
      <h1>Contact Me</h1>
      
      <p>
        <FaEnvelope /> Email: 
        <a href="mailto:noorbasha649@gmail.com" className="contact-link"> noorbasha649@gmail.com</a>
      </p>

      <p>
        <FaPhone /> Phone: 
        <a href="tel:+918074282246" className="contact-link"> +91 8074282246</a>
      </p>

      <div className="contact-buttons">
        <a 
          href="https://www.linkedin.com/in/shaiknoor786/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn linkedin"
        >
          <FaLinkedin /> Connect on LinkedIn
        </a>

        <a 
          href="https://github.com/Nooor786" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn github"
        >
          <FaGithub /> View My GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
