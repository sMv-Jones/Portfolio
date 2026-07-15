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
                    feel free to reach out!
                </p>

                <div className="contact-links">
                    <a
                        href="mailto:mohdafzal_MA@outlook.com"
                        className="contact-btn email-btn"
                        title="Email Me"
                    >
                        <EmailIcon /> Email Me!
                    </a>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/mohd-afzal-web-dev/"
                        className="contact-icon-link"
                        title="LinkedIn"
                    >
                        <LinkedinIcon /> Find me on Linkedin.
                    </a>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/sMv-Jones"
                        className="contact-icon-link"
                        title="GitHub"
                    >
                        <GithubIcon /> Checkout my Github.
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