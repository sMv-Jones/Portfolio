import './project.css';

function Project() {
    // Array containing project details
    const projectsData = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80", // Replace with your project image URL
            projectName: "E-Commerce Microservice Platform",
            description: "A complete full-stack MERN shopping platform featuring modular service routers, dynamic state tracking, full stripe payment integration, and a highly customizable user panel.",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "Stripe"],
            liveLink: "https://yourprojectlive.com",
            githubLink: "https://github.com/sMv-Jones/your-repo"
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=600&q=80", // Replace with your project image URL
            projectName: "Developer Collaboration Hub",
            description: "A centralized social network built for technical users. Implements secure JWT access, aggregation tracking, real-time message rooms, and custom hardware profile showcases.",
            technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
            liveLink: "https://yourprojectlive2.com",
            githubLink: "https://github.com/sMv-Jones/your-repo2"
        }
    ];

    return (
        <section className="projects-section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Project;

function ProjectCard({ project }) {
    const { img, projectName, description, technologies, liveLink, githubLink } = project;

    return (
        <div className="project-card">
            {/* Left Side: Image container */}
            <div className="project-image-container">
                <img src={img} alt={`${projectName} preview`} className="project-image" />
            </div>

            {/* Right Side: Details container */}
            <div className="project-details">
                <h3 className="project-title">{projectName}</h3>
                <p className="project-description">{description}</p>

                {/* Rounded Box Technologies List */}
                <div className="project-tech-list">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links Row */}
                <div className="project-links">
                    <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-btn live-btn">
                        Live Demo
                    </a>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-btn github-btn">
                        GitHub Repo
                    </a>
                </div>
            </div>
        </div>
    );
}
