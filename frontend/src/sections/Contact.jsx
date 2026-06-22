import "../css/Contact.css";

import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-container">

        <h2 className="contact-heading">
          Let's Work Together
        </h2>

        <p className="contact-subheading">
          Open to internships, full-stack development opportunities,
          and exciting software projects.
        </p>

        <div className="contact-links">

          <a
            href="mailto:architsingh0706@gmail.com"
            className="contact-card email-card"
          >
            <MdEmail className="contact-icon" />

            <span>architsingh0706@gmail.com</span>
          </a>

          <a
            href="https://github.com/archit0706"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaGithub className="contact-icon" />

            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/archit-kumar-singh-66513b298"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaLinkedin className="contact-icon" />

            <span>LinkedIn</span>
          </a>

        </div>

        <div className="availability">

          <span className="green-dot"></span>

          Open to Opportunities

        </div>

      </div>

    </section>
  );
}