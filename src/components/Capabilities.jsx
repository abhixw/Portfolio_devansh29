export default function Capabilities() {
  const categories = [
    {
      title: "Languages",
      num: "01",
      skills: ["Python", "Java"]
    },
    {
      title: "Tools",
      num: "02",
      skills: ["Power BI", "Git", "GitHub", "VS Code", "Raspberry Pi"]
    },
    {
      title: "Concepts",
      num: "03",
      skills: ["Machine Learning", "Data Analysis", "Software Engineering", "DBMS", "IoT Systems", "Embedded Systems"]
    },
    {
      title: "Interests",
      num: "04",
      skills: ["Sustainability", "AI for Social Good", "Hackathons", "Entrepreneurship"]
    }
  ]

  return (
    <section id="capabilities">
      <div className="eyebrow reveal">
        <span className="num">§02</span> Capabilities <span className="rule"></span> <span>Systems index</span>
      </div>
      <div className="cap reveal">
        {categories.map((cat) => (
          <div className="col" key={cat.title}>
            <h3>
              {cat.title} <span>{cat.num}</span>
            </h3>
            <ul>
              {cat.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
