import "../pages/PageStyles.css"; // Correct relative path
import resume from "../assets/resume.pdf";
import aboutBg from "../assets/background.avif";
import { FaDownload, FaUser, FaLaptopCode } from "react-icons/fa"; // Import icons

const About = () => {
  return (
    <div className="page" style={{ backgroundImage: `url(${aboutBg})` }}>
      <h1><FaUser /> About Me</h1>
      <p style={{ textAlign: "justify" }}>
        <FaLaptopCode /> I am a passionate Full-Stack Developer and AI Enthusiast, dedicated to building scalable and user-friendly 
        web applications. Proficient in modern technologies like React, JavaScript, and AI tools, I love solving complex problems and 
        creating innovative digital solutions. My goal is to bridge creativity with technology for impactful user experiences.
      </p>
      <a href={resume} download="My_Resume.pdf" className="btn">
        <FaDownload /> 📄 Download Resume
      </a>
    </div>
  );
};

export default About;
