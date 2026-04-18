import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../assets/styles/Main.scss';
import anikaImg from "../assets/images/anika.jpg";
import Typewriter from "typewriter-effect";

function Main() {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "mailto:anikaver@usc.edu";
  };

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={anikaImg} alt="Anika Verma" />
        </div>

        <div className="content">

          {/* SOCIAL ICONS */}
          <div className="social_icons">
            <a href="https://github.com/anika0102" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/anika-verma/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href="mailto:anikaver@usc.edu" onClick={handleEmailClick}>
              <EmailIcon />
            </a>
          </div>

          {/* NAME */}
          <h1>Anika Verma</h1>

          {/* ROLE TYPEWRITER */}
          <p className="role">
            <Typewriter
              options={{
                strings: [
                  "Machine Learning Engineer",
                  "Software Engineer",
                  "Data Scientist",
                  "Deep Learning Engineer",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30,
              }}
            />
          </p>

          {/* LOCATION */}
          <div className="location">
            <LocationOnIcon />
            <span>United States</span>
          </div>

          {/* MOBILE ICONS */}
          <div className="mobile_social_icons">
            <a href="https://github.com/anika0102" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/anika-verma/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href="mailto:anikaver@usc.edu" onClick={handleEmailClick}>
              <EmailIcon />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Main;
