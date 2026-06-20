import '../css/Navbar.css';

export default function Navbar() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Education', id: 'education' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Archit</div>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className="navbar-link"
                onClick={() => handleScroll(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button className="navbar-resume">Resume</button>
      </div>
    </nav>
  );
}
