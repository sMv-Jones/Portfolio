import "./contact.css";
import { EmailIcon, GithubIcon, LinkedinIcon } from "../../assets/Icon";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2>Let's Build Something Together</h2>
        <p>
          I'm currently seeking full-time opportunities or internships.
          Whether you want to discuss a project, talk about a MERN role,
          or just chat tech engineering—feel free to reach out!
        </p>

        <div className="contact-links">
          <a
            href="mailto:mohdafzal_MA@outlook.com"
            className="contact-link-item"
            title="Email Me"
          >
            <EmailIcon /> 
            <span>Email Me!</span>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mohd-afzal-web-dev/"
            className="contact-link-item"
            title="LinkedIn"
          >
            <LinkedinIcon /> 
            <span>Find me on LinkedIn</span>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sMv-Jones"
            className="contact-link-item"
            title="GitHub"
          >
            <GithubIcon /> 
            <span>Check out my GitHub</span>
          </a>
        </div>

        <footer className="contact-footer">
          <p>© {new Date().getFullYear()} Mohd Afzal. Built with passion and a bit of tinkering.</p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;