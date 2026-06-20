import "../css/Projects.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "AudioScribe",
      image: "/audioscribe.png",
      description:
        "AI-powered web application that converts handwritten notes and PDFs into natural speech using OCR and Text-to-Speech technologies.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "Google Vision API",
        "Google TTS",
      ],
      github: "https://github.com/archit0706/AudioScribe",
    },

    {
      id: 2,
      title: "Expense Tracker",
      image: "/expense.png",
      description:
        "MERN Stack application to manage income and expenses with transaction history and a responsive user interface.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      github: "https://github.com/archit0706/Expense_Tracker",
    },
  ];

  return (
    <section id="projects" className="projects">

      <div className="projects-container">

        <h2 className="projects-heading">
          Projects
        </h2>

        <div className="projects-grid">

          {projects.map((project) => (

            <div className="project-card" key={project.id}>

              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">

                <h3 className="project-title">
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">

                  {project.tech.map((item, index) => (

                    <span
                      key={index}
                      className="tech-badge"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  GitHub
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}