import './project.css';

function Project() {
  const projectsData = [
    {
      id: 1,
      img: "sMv_Blog.png",
      projectName: "sMv|Blog",
      description: "A full-stack blogging application built using the MERN Stack, featuring rich-text content creation with TinyMCE Editor, secure image hosting with Azure Blob Storage, and a serverless email notification microservice built with Google Apps Script.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "TinyMCE", "Azure Blob Storage", "Redux Toolkit"],
      liveLink: "https://smv-blog.vercel.app/",
      githubLink: "https://github.com/sMv-Jones/sMvBlog"
    },
    {
      id: 2,
      img: "TalentGPT.png",
      projectName: "TalentGPT",
      description: "An intelligent, context-aware resume screening platform built with the MERN stack. The application uses Azure AI Document Intelligence for accurate resume parsing, Vector Cosine Similarity for semantic matching, and Google Gemini AI for advanced candidate analysis and skill-gap detection.",
      technologies: ["Gemini", "React", "Node.js", "MongoDB", "Tailwind CSS"],
      liveLink: "https://talentgpt-ai.vercel.app/",
      githubLink: "https://github.com/sMv-Jones/AI-Enabled-ATS"
    },
    {
      id: 3,
      img: "NeuroDigest.png",
      projectName: "NeuroDigest",
      description: "A full-stack AI-powered platform that transforms text, images, audio, video, and unstructured documents into clear, intelligent summaries. By combining a modern React frontend with a secure Express backend, it orchestrates multiple Microsoft Azure AI services to extract content from different formats and convert them into concise insights.",
      technologies: ["Azure AI", "React", "Node.js", "MongoDB", "Tailwind CSS"],
      liveLink: "https://neruodigest.vercel.app/",
      githubLink: "https://github.com/sMv-Jones/AI-Multi-Model-Summarizer"
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
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
      {}
      <div className="project-image-container">
        <img src={img} alt={`${projectName} preview`} className="project-image" />
      </div>

      {}
      <div className="project-details">
        <div>
          <h3 className="project-title">{projectName}</h3>
          <p className="project-description">{description}</p>
        </div>

        {}
        <div className="project-tech-list">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {}
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