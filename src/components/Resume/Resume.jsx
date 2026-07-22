import { CloudArrowDownIcon } from "../../assets/Icon";
import "./resume.css";

function ResumeDownload() {
  return (
    <div className="resume-download-container">
      <h2 className="resume-title">Curriculum Vitae</h2>
      <p className="resume-subtitle">
        Download the complete resume for a detailed overview of educational qualifications, technical projects, and academic achievements.
      </p>
      <a
        href="/resume_Mohd_Afzal.pdf"
        download="resume_Mohd_Afzal"
        className="resume-download-button"
        aria-label="Download Mohd Afzal's Curriculum Vitae"
      >
        <CloudArrowDownIcon />
        <span>Download Curriculum Vitae</span>
      </a>
    </div>
  );
}

export default ResumeDownload;