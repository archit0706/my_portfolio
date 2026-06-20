import "../css/Education.css";

export default function Education() {
  const educationData = [
    {
      id: 1,
      institution: "Birla Institute of Technology, Mesra",
      degree: "Bachelor of Technology in Computer Science",
      duration: "2024 - 2028",
      badge: "CGPA: 8.34",
    },
    {
      id: 2,
      institution: "SD Academy",
      degree: "Class XII",
      duration: "2023",
      badge: "90.4%",
    },
    {
      id: 3,
      institution: "SR DAV Public School",
      degree: "Class X",
      duration: "2021",
      badge: "93.5%",
    },
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2 className="education-heading">Education</h2>

        <div className="education-list">
          {educationData.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="education-icon">🎓</div>

              <div className="education-card">
                <div className="education-left">
                  <h3 className="education-institution">{edu.institution}</h3>
                  <p className="education-degree">{edu.degree}</p>
                </div>

                <div className="education-right">
                  <span className="education-duration">{edu.duration}</span>
                  <span className="education-badge">{edu.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}