import "./skill.css";

function Skill() {
  const languages = ["JavaScript", "HTML5", "CSS3", "Python"];
  const mernStack = ["MongoDB", "Express.js", "React.js", "Node.js"];
  const coreSkills = ["Backend Development", "Frontend Development", "RESTful APIs", "State Management"];
  const tools = ["Azure Cloud", "Vercel", "Render", "Git & GitHub", "VS Code", "Postman"];
  
  const certifications = [
    {
      name: "Crash Course on Python",
      issuer: "Coursera",
      date: "2022",
      status: "Verified",
      link: "Coursera_Python_Crash_Course.pdf"
    },
    {
      name: "Certificate on Azure AI",
      issuer: "Honeywell",
      date: "2025",
      status: "Verified",
      link: "Azure_Artifical_Intelligence.jpeg"
    }
  ];

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h2 className="section-title">My Toolbox & Credentials</h2>
        <p className="section-subtitle">
          The languages, frameworks, and developer environments I use to build scalable web applications.
        </p>
      </div>
      
      <div className="skills-grid">
        <div className="skills-card">
          <h3 className="card-heading language-title">Languages</h3>
          <ul className="skills-list">
            {languages.map((lang, index) => (
              <li key={index} className="skill-badge lang">{lang}</li>
            ))}
          </ul>
        </div>

        <div className="skills-card">
          <h3 className="card-heading mern-title">MERN Stack</h3>
          <ul className="skills-list">
            {mernStack.map((tech, index) => (
              <li key={index} className="skill-badge mern">{tech}</li>
            ))}
          </ul>
        </div>

        <div className="skills-card">
          <h3 className="card-heading core-title">Engineering Core</h3>
          <ul className="skills-list">
            {coreSkills.map((skill, index) => (
              <li key={index} className="skill-badge core">{skill}</li>
            ))}
          </ul>
        </div>

        <div className="skills-card">
          <h3 className="card-heading tool-title">Tools & Cloud</h3>
          <ul className="skills-list">
            {tools.map((tool, index) => (
              <li key={index} className="skill-badge tool">{tool}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="certifications-section">
        <h3 className="cert-section-title">Certifications</h3>
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