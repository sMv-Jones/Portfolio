import "./hero.css";
import { EmailIcon, GithubIcon, LinkedinIcon } from "../../assets/Icon";

function Hero() {
    return (
        <div className="hero-body">
            <h1>Mohd Afzal</h1>
            <h2>Full Stack Developer</h2>
            <p>I build responsive, modern web applications specializing in the MERN stack. Focused on writing clean backend architecture and crafting dynamic user experiences.</p>
            <div className="hero-Contact">
                {/* Email */}
                <a target="_blank" rel="noopener noreferrer" href="mailto:mohdafzal_MA@outlook.com">
                    <EmailIcon />
                </a>
                
                {/* GitHub (Fixed link & icon swap) */}
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/sMv-Jones">
                    <GithubIcon />
                </a>
                
                {/* LinkedIn (Fixed link & icon swap) */}
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mohd-afzal-web-dev/">
                    <LinkedinIcon />
                </a>
            </div>
        </div>
    );
}

export default Hero;    