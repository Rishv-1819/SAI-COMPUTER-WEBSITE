import "./ResumeViewer.css";

function ResumeViewer({ resume }) {

    if (!resume) {
        return <p>No Resume Uploaded</p>;
    }

    const resumeUrl = `http://localhost:5000/uploads/${resume}`;

    return (
        <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
        >
            View Resume
        </a>
    );
}

export default ResumeViewer;