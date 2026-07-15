import "./education.css";

function Education() {
  const educationHistory = [
    {
      level: "Graduation",
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Your College Name Here",
      university: "Your University Name Here",
      duration: "2022 - 2026",
      metricType: "GPA",
      metricValue: "8.0 / 10.0",
      isCollege: true
    },
    {
      level: "Higher Secondary (Class XII)",
      degree: "CBSE - Science Stream",
      institution: "Your School Name Here",
      duration: "2021 - 2022",
      metricType: "Percentage",
      metricValue: "X%" // Replace with your actual percentage
    },
    {
      level: "Secondary School (Class X)",
      degree: "CBSE",
      institution: "Your School Name Here",
      duration: "2019 - 2020",
      metricType: "Percentage",
      metricValue: "X%" // Replace with your actual percentage
    }
  ];

  return (
    <div className="education-container">
      <div className="education-header">
        <h2 className="section-title">Education Journey</h2>
        <p className="section-subtitle">Academic qualifications and milestones.</p>
      </div>

      <div className="timeline">
        {educationHistory.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="education-card">
              <div className="card-header-main">
                <span className="edu-level">{edu.level}</span>
                <span className="edu-duration">{edu.duration}</span>
              </div>
              
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              {edu.university && <p className="edu-university">{edu.university}</p>}
              
              <div className="metric-badge-container">
                <span className={`metric-badge ${edu.isCollege ? 'college-badge' : 'school-badge'}`}>
                  {edu.metricType}: <strong>{edu.metricValue}</strong>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;