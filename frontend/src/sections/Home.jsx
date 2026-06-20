import "../css/Home.css";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        {/* Left Side */}
        <div className="home-left">
          <div className="home-intro">
            <h1 className="home-name">Archit Kumar Singh</h1>
            <h2 className="home-title">Full Stack Developer | MERN Stack</h2>
            <p className="home-location">📍 India · Remote</p>
          </div>

          <div className="social-links">
            <a href="mailto:architsingh0706@gmail.com" className="social-link">
              Email
            </a>
            <a href="https://github.com/archit0706" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/archit-kumar-singh-66513b298" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <a href="/resume.pdf" className="social-link">
              Resume
            </a>
          </div>

          <p className="home-bio">
            I am a Full Stack Developer passionate about building scalable web applications and AI-powered solutions. I enjoy transforming ideas into real-world projects using modern technologies and continuously learning new tools and frameworks.
          </p>
        </div>

        {/* Right Side */}
        <div className="home-right">
          <img src="/avatar.gif" alt="Archit Avatar" />
        </div>
      </div>
    </section>
  );
}