export default function Dispatches() {
  const featuredCerts = [
    { name: "Digital Marketing Fundamentals", issuer: "Google" },
    { name: "Power BI", issuer: "IIT Delhi" },
    { name: "Entrepreneurship", issuer: "E-Cell IIT Bombay" },
    { name: "AI for Beginners", issuer: "HP LIFE" },
    { name: "Advanced SQL", issuer: "Kaggle" }
  ]

  const moreCerts = [
    "HP LIFE — Agile Project Management",
    "Infosys Springboard — Java Concepts",
    "Kaggle — Intro to SQL",
    "Ashtaksha Labs — Cybersecurity Workshop",
    "Energy Swaraj Foundation — Energy Literacy",
    "VTU — Smart Grid: Basics to Advanced Technologies",
    "VTU — Blockchain and its Applications",
    "VTU — Social Networks",
    "Power BI Workshop",
    "TCS TechBytes — Engineering IT Quiz",
    "RC Aircraft & Aero Design Workshop",
    "Design Thinking Workshop"
  ]

  const achievements = [
    {
      title: "National-Level Hackathon Wins",
      badge: "1st Place ×3",
      win: true,
      desc: "1st Place wins for Vigil AI, Military Monitoring & Safe Zone Mapping System, and Green Drive."
    },
    {
      title: "AeroDrive — Patent Filed",
      badge: "Innovation Finalist",
      win: true,
      desc: "Patent application filed for a smart aerodynamic EV enhancement system under Green Energy & Sustainable Transportation."
    },
    {
      title: "Smartecosign Competition",
      badge: "1st Place · National",
      win: true,
      desc: "Secured 1st Place at the National Level Smartecosign Competition."
    },
    {
      title: "BioBridge Club",
      badge: "Founder",
      desc: "Founded a research and innovation initiative encouraging technology-driven problem solving and collaborative innovation."
    },
    {
      title: "GeeksforGeeks",
      badge: "Campus Mantri",
      desc: "Strengthening the technical and coding culture at DSCE through contests, workshops, and outreach."
    },
    {
      title: "TEDxDSCE",
      badge: "Guest Management Lead",
      desc: "Coordinated guest management and event operations for TEDxDSCE."
    },
    {
      title: "Badminton",
      badge: "Multiple-time Winner",
      desc: "Multiple-time Winner / Runner-up across badminton competitions."
    }
  ]

  return (
    <section id="dispatches">
      <div className="eyebrow reveal">
        <span className="num">§05</span> Dispatches <span className="rule"></span> <span>Certifications &amp; Honours</span>
      </div>
      <div className="two">
        <div className="reveal">
          <h2 className="sub">Certifications</h2>

          {featuredCerts.map((cert) => (
            <div className="entry" key={cert.name}>
              <div className="h">
                <b>{cert.name}</b>
                <span className="badge">{cert.issuer}</span>
              </div>
            </div>
          ))}

          <div className="chip-row">
            {moreCerts.map((cert) => (
              <span className="tag" key={cert}>
                {cert}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal">
          <h2 className="sub">Achievements</h2>

          {achievements.map((item) => (
            <div className={`entry${item.win ? ' win' : ''}`} key={item.title}>
              <div className="h">
                <b>{item.title}</b>
                <span className="badge">{item.badge}</span>
              </div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
