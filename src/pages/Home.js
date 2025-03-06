import "./Home.css";
import profilePic from "../assets/profile.jpg"; // Import profile image
import { FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa"; // Import icons

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <h1>Hi, I'm Ň𝔬𝔬𝐫 👋</h1>
        <h2>Full-Stack Developer | AI Enthusiast</h2>
        <p>
          I specialize in building innovative, user-friendly, and scalable web applications. With a strong foundation in modern technologies like <strong>React, JavaScript, and AI tools</strong>,
          I am dedicated to crafting seamless digital experiences.
        </p>
        <p>Let's create something amazing together! 🚀</p>

        <div className="buttons">
          <a href="/about" className="btn"><FaUser /> About Me</a>
          <a href="/projects" className="btn"><FaProjectDiagram /> My Projects</a>
          <a href="/contact" className="btn"><FaEnvelope /> Contact Me</a>
        </div>
      </div>
      <div className="profile">
        <img src={profilePic} alt="Profile" />
      </div>
    </div>
  );
};

export default Home;
