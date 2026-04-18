import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "Python","SQL","TensorFlow","PyTorch","Scikit-learn","Hugging Face",
  "LangChain","YOLO","OpenCV","Streamlit","Pandas/NumPy",
  "CNNs, RNNs, Transformers","Grad-CAM","Explainable AI"
];
const labelsSecond = [
  "FoundationDB","BerkelyDB","JanusGraph","Gremlin","SQL","ACID",
  "OLAP/OLTP","Docker","CloudLab","Maven/IntelliJ","UNIX","Query Optimization"
];
const labelsThird = ["React.js","Next.js","HTML/CSS","JavaScript","Node.js","Git","CI/CD"];

const aboutHighlights = [
  "Interpretable ML","Medical Imaging","JanusGraph + FoundationDB",
  "Full-stack (React/Node)","HackSC Winner","AI for Good"
];

function Expertise() {

  // Works in all environments
  const resumeHref = `${process.env.PUBLIC_URL}/ResumeAV.pdf`;

  // ⭐ Smooth scroll function for the button
  const scrollToExtracurricular = () => {
    const target = document.getElementById("extracurriculars");
    const navbar = document.getElementById("navigation");

    if (target) {
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight - 8;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container" id="aboutme">
      <div className="skills-container center-content">

        <h1>About Me</h1>

        <div className="skill">
          <h3 style={{ marginTop: 12 }}>Hi, I’m Anika 👋</h3>

          <p>
            a Computer Science graduate student at the University of Southern California.
            <br />welcome to the little corner of the internet, a small part of me where you can see what I’m up to👩‍💻
          </p>  
          <p>
             
            I build at the intersection of Machine Learning, Backend Systems, and AI.
            I’ve worked on projects across AI/ML, distributed databases, and systems. I enjoy turning complex problems into simple, scalable solutions using modern tech. 
            From ML models to backend pipelines, I love building things that actually make an impact in the society.
          </p>
          <p>
            I'm constantly learning, experimenting, and pushing myself to grow as an engineer. I enjoy collaborating, sharing ideas, and learning from different perspectives.
          </p>
          <p>
            Open to full-time opportunities | Let’s connect and build together 📩 anikavermaconnects@gmail.com <br />
        
          </p>

          {/* ---- BUTTONS ---- */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
            <Button
              variant="contained"
              color="success"
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </Button>

            <Button
              variant="outlined"
              href="https://www.linkedin.com/in/anika-verma/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </Button>

            {/*  section */}
          </div>

          {/* Optional highlights */}
          {/* <div className="flex-chips" style={{ marginTop: 18 }}>
            {aboutHighlights.map((label, idx) => (
              <Chip key={idx} className="chip" label={label} />
            ))}
          </div> */}

          <div className="skills-grid" style={{ marginTop: 24 }}>
            <div className="skill"></div>
            <div className="skill"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;