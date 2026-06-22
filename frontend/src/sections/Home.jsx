import "../css/Home.css";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiFileDownloadLine } from "react-icons/ri";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">

        {/* Left Side */}
        <div className="home-left">

          <div className="home-intro">
            <h1 className="home-name">Archit Kumar Singh</h1>

            <h2 className="home-title">
              Full Stack Developer | MERN Stack
            </h2>

            <p className="home-location">
              📍 India · Remote
            </p>
          </div>

          {/* Social Links */}

          <div className="social-links">

            <a
              href="mailto:architsingh0706@gmail.com"
              className="social-link"
            >
              <MdEmail className="social-icon" />
              <span>Email</span>
            </a>

            <a
              href="https://github.com/archit0706"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub className="social-icon" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/archit-kumar-singh-66513b298"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin className="social-icon" />
              <span>LinkedIn</span>
            </a>

            <a
              href="/resume.pdf"
              className="social-link"
            >
              <RiFileDownloadLine className="social-icon" />
              <span>Resume</span>
            </a>

          </div>

          <p className="home-bio">
            I am a Full Stack Developer passionate about building scalable web
            applications and AI-powered solutions. I enjoy transforming ideas
            into real-world projects using modern technologies and continuously
            learning new tools and frameworks.
          </p>

        </div>

        {/* Right Side */}

        <div className="home-right">
          <img src="/avatar.png" alt="Developer Avatar" className="avatar"/>
        </div>

      </div>
    </section>
  );
}