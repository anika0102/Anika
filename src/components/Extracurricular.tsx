import React from "react";
import "../assets/styles/Extracurricular.scss";

import mock11 from "../assets/images/mock11.jpeg";  // mentor
import mock13 from "../assets/images/mock13.jpeg";  // jashn
import mock12 from "../assets/images/mock12.jpeg";  // hacksc
import mock15 from "../assets/images/mock15.png";   // realityshift / Vision
import mock14 from "../assets/images/mock14.jpeg";  // postcon

function Extracurricular() {
  return (
    <section className="extras-container" id="extracurriculars">
      <h1>Extracurricular</h1>

      <div className="extras-grid">
        {/* 1. HackSC Winner — Echoes */}
        <a
          className="extra-card"
          href="https://devpost.com/software/echoes-6vy41q"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="circle">
            <img src={mock12} alt="HackSC Echoes – winning project" />
            <span className="ribbon">Best Overall</span>
          </div>

          <h2>HackSC 2025 Winner Echoes</h2>
          <h3>AI Speech Therapy Assistant</h3>
          <p>We built an AI lip-reading assistant for autistic & post-stroke patients.</p>
          <p className="inline-link">Live demo ↗</p>
        </a>

        {/* 2. RealityShift — HackSC Prototype */}
        <a
          className="extra-card"
          href="https://docs.google.com/presentation/d/1HF3JgyI7TmFsgyI6sJh7hr-Fl0H8yViw/edit?usp=sharing&ouid=110506058747555513153&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="circle">
            <img src={mock15} alt="RealityShift Pitch ShiftSC" />
            <span className="badge">Prototype</span>
          </div>

          <h2>RealityShift Pitch MindEscape</h2>
          <h3>AR Escape Room</h3>
          <p>
            Created an AR/VR exposure therapy prototype for OCD patients using Unity + BiLSTM models, integrating HR/HRV wearable biosensors to dynamically adjust challenge levels with LLM-based personalized feedback.
          </p>
          <p className="inline-link">View Pitch Deck ↗</p>
        </a>

        {/* 3. PostCon 25 Conference */}
        <div className="extra-card">
          <div className="circle">
            <img src={mock14} alt="POST/CON" />
            <span className="badge">Conference</span>
          </div>

          <h2>POST/CON 25 Annual Conference</h2>
          <h3>API & AI Conference</h3>
          <p>
            Attended PostCon 2025 in Los Angeles. Engaged with industry leaders and developers
            at Postman’s annual conference, exploring innovations in API management, AI
            integration, and logistics tech.
          </p>
        </div>

        {/* 4. Viterbi Best Mentor */}
        <div className="extra-card">
          <div className="circle">
            <img src={mock11} alt="USC Viterbi Best Mentor" />
            <span className="badge">Award</span>
          </div>

          <h2>Viterbi Best Mentor</h2>
          <h3>Student Success & Guidance</h3>
          <p>
            Mentored peers in ML, strengthened their resumes through structured feedback, and guided them through internship and job search strategies.
          </p>
        </div>

        {/* 5. Jashn Leader */}
        <div className="extra-card">
          <div className="circle">
            <img src={mock13} alt="Jashn Bollywood Fusion — Leader" />
            <span className="badge">Lead</span>
          </div>

          <h2>Jashn Bollyfusion Dance Club</h2>
          <h3>E-Board • Finance & Choreo</h3>
          <p>
            Managed finances & large-scale event logistics for a 30+ member team. Choreographed and performed at USC cultural showcases.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Extracurricular;
