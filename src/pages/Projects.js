import "../pages/PageStyles.css";
import projectsBg from "../assets/background.avif";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

const Projects = () => {
  return (
    <div className="page" style={{ backgroundImage: `url(${projectsBg})` }}>
      <h1>My Projects</h1>
      <p style={{ textAlign: "justify" }}>
        🚀 Explore my projects on GitHub, where I build dynamic, scalable, and user-friendly applications using React, JavaScript, and AI tools. 
        Each project showcases problem-solving, creativity, and technical expertise.
      </p>
      <a 
        href="https://github.com/Nooor786?tab=repositories" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn"
      >
        <FaGithub size={20} /> View My GitHub Projects
      </a>
    </div>
  );
};

export default Projects;
