import "./skill.css";

function Skill() {
  const coreSkills = ["Frontend Development", "UI/UX Design", "RESTful APIs", "State Management"];
  const frameworks = ["React", "Vue.js", "Next.js", "Tailwind CSS", "Bootstrap"];
  const tools = ["Vite", "Git & GitHub", "Figma", "VS Code", "Postman", "Docker"];
  
  const certifications = [
    {
      name: "Meta Front-End Developer Professional Certificate",
      issuer: "Coursera",
      date: "2026",
      status: "Verified", // Uses success theme color
      link: "#"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2026",
      status: "Verified",
      link: "#"
    }
  ];

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h2 className="section-title">My Toolbox & Credentials</h2>
        <p className="section-subtitle">The technologies, tools, and certifications I use to bring ideas to life.</p>
      </div>
      
      {/* Grid Layout for Skills, Frameworks, and Tools */}
      <div className="skills-grid">
        {/* Core Skills */}
        <div className="skills-card">
          <h3 className="card-heading core-title">Core Skills</h3>
          <ul className="skills-list">
            {coreSkills.map((skill, index) => (
              <li key={index} className="skill-badge core">{skill}</li>
            ))}
          </ul>
        </div>

        {/* Frameworks */}
        <div className="skills-card">
          <h3 className="card-heading framework-title">Frameworks</h3>
          <ul className="skills-list">
            {frameworks.map((fw, index) => (
              <li key={index} className="skill-badge framework">{fw}</li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="skills-card">
          <h3 className="card-heading tool-title">Tools & Software</h3>
          <ul className="skills-list">
            {tools.map((tool, index) => (
              <li key={index} className="skill-badge tool">{tool}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="certifications-section">
        <h3 className="cert-section-title">Certifications & Verification</h3>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-info">
                <h4>{cert.name}</h4>
                <div className="cert-meta">
                  <span>{cert.issuer} • {cert.date}</span>
                  <span className="status-badge">{cert.status}</span>
                </div>
              </div>
              <a href={cert.link} target="_blank" rel="noreferrer" className="verify-btn">
                Verify Badge
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;