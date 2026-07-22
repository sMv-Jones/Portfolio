import "./hero.css";
import { EmailIcon, GithubIcon, LinkedinIcon } from "../../assets/Icon";

function Hero() {
  return (
    <div className="hero-body">
      <h1>Mohd Afzal</h1>
      <h2>Full Stack Developer</h2>
      <p>
        I build responsive, modern web applications specializing in the MERN stack. 
        Focused on writing clean backend architecture and crafting dynamic user experiences.
      </p>
      <div className="hero-Contact">
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href="mailto:mohdafzal_MA@outlook.com" 
          title="Email Me"
          aria-label="Email Me"
        >
          <EmailIcon />
        </a>
        
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://github.com/sMv-Jones" 
          title="GitHub Profile"
          aria-label="GitHub Profile"
        >
          <GithubIcon />
        </a>
        
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://www.linkedin.com/in/mohd-afzal-web-dev/" 
          title="LinkedIn Profile"
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon />
        </a>
      </div>
    </div>
  );
}

export default Hero;