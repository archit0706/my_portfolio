import "../css/Skills.css";

export default function Skills() {

  const skills = [

    {
      title: "Languages",
      items: ["C", "C++", "Python"]
    },

    {
      title: "Computer Fundamentals",
      items: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "DBMS",
        "OOP"
      ]
    },

    {
      title: "Web Technologies",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL"
      ]
    },

    {
      title: "Developer Tools",
      items: [
        "Git",
        "GitHub",
        "VS Code"
      ]
    }

  ];

  return (

    <section id="skills" className="skills">

      <div className="skills-container">

        <h2 className="skills-heading">
          Skills
        </h2>

        {skills.map((section, index) => (

          <div className="skill-section" key={index}>

            <h3 className="skill-title">
              {section.title}
            </h3>

            <div className="skill-tags">

              {section.items.map((item, i) => (

                <span className="skill-tag" key={i}>
                  {item}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}