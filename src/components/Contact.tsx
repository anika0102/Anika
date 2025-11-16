import React from "react";
import "../assets/styles/Contact.scss";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contact() {
  return (
    <div id="contact">
      <div className="items-container simple-contact">

        {/* Heading */}
        <h1 className="section-heading">Let&apos;s Connect</h1>

        {/* Tagline */}
        <p className="contact-simple-text">
          Let&apos;s build something meaningful together — explore ideas, collaborate, or simply connect 🚀
        </p>

        {/* Calendly CTA */}
        <a
          href="https://calendly.com/anikaver-usc/let-s-connect"
          target="_blank"
          rel="noreferrer"
          className="calendly-link"
        >
          <span className="cal-icon">📅</span>
          <span>Book a 1:1 on Calendly</span>
        </a>

        {/* Social icons */}
        <div className="simple-icons-grid">

          {/* Email */}
          <a
            href="mailto:anikaver@usc.edu?subject=Let%27s%20Connect&body=Hi%20Anika,"
            className="icon-circle email"
            aria-label="Email"
          >
            <EmailIcon />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anika-verma/"
            target="_blank"
            rel="noreferrer"
            className="icon-circle linkedin"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/anika0102"
            target="_blank"
            rel="noreferrer"
            className="icon-circle github"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/an.ika_._"
            target="_blank"
            rel="noreferrer"
            className="icon-circle instagram"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>

          {/* X */}
          <a
            href="https://x.com/12anikaverma00?s=11"
            target="_blank"
            rel="noreferrer"
            className="icon-circle x-icon"
            aria-label="X"
          >
            <span>X</span>
          </a>

          {/* Snapchat */}
          <a
            href="https://snapchat.com/t/fP2CKyE8"
            target="_blank"
            rel="noreferrer"
            className="icon-circle snapchat"
            aria-label="Snapchat"
          >
            <span>SC</span>
          </a>

        </div>

      </div>
    </div>
  );
}

export default Contact;
