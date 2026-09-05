export default function Projects() {
  const cases = [
    {
      idx: "01",
      title: "AeroDrive",
      tagline: "Patent-Filed EV Innovation · Innovation Challenge Finalist",
      description: "A smart aerodynamic enhancement system for electric vehicles, dynamically adjusting aerodynamic components to reduce drag and energy consumption. Integrated embedded-system concepts to improve EV efficiency and driving range. Patent application filed under Green Energy & Sustainable Transportation.",
      chips: ["Embedded Systems", "EV Efficiency", "Patent Filed", "Green Energy"],
      link: "https://github.com/DevanshGoyal29",
      stamp: "PATENT FILED\nGREEN ENERGY"
    },
    {
      idx: "02",
      title: "Military Monitoring & Safe Zone Mapping",
      tagline: "1st Place · Defense Innovation Hackathon 2025",
      description: "A real-time IoT-based personnel safety and evacuation-zone mapping system built around Raspberry Pi and multiple sensors for field-data acquisition and monitoring, enabling live visualization to support emergency response and mission planning.",
      chips: ["Raspberry Pi", "IoT Sensors", "Real-time Monitoring", "Field Ops"],
      link: "https://github.com/DevanshGoyal29",
      stamp: "DEFENSE INNOVATION\nHACKATHON WINNER"
    },
    {
      idx: "03",
      title: "Dhadkan",
      tagline: "Wearable Women's Health Platform · Team Leader",
      description: "A personalized smart wearable and AI platform for proactive women's health monitoring and PCOS-related early-risk screening. Designed a personal-baseline, longitudinal AI approach using heart rate, HRV, peripheral temperature, SpO2, activity, and sleep signals, combined with menstrual and lifestyle context to generate personalized insights and decision support.",
      chips: ["Wearable AI", "HRV Analysis", "SpO2", "Product Design"],
      link: "https://github.com/DevanshGoyal29",
      stamp: "WOMEN'S HEALTH\nDECISION SUPPORT"
    },
    {
      idx: "04",
      title: "Univibe",
      tagline: "Cross-Community Platform for Students",
      description: "A student-focused platform for event discovery, discussions, collaboration, and cross-community engagement — built end to end with a modern JavaScript stack.",
      chips: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      link: "https://github.com/DevanshGoyal29",
      stamp: "STUDENT PLATFORM\nFULL STACK"
    }
  ]

  return (
    <section id="work">
      <div className="eyebrow reveal">
        <span className="num">§03</span> Field Work <span className="rule"></span> <span>Selected case files</span>
      </div>
      <div className="cases">
        {cases.map((project) => (
          <article className="case reveal" key={project.idx}>
            <div className="idx">
              {project.idx}
              <small>CASE FILE</small>
            </div>
            <div className="main">
              <h3>{project.title}</h3>
              <div className="tagline">{project.tagline}</div>
              <p>{project.description}</p>
              <div className="chips">
                {project.chips.map((chip) => (
                  <span className="tag" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="meta">
              <a className="view" href={project.link} target="_blank" rel="noopener noreferrer">
                View <span className="ar">↗</span>
              </a>
              <div className="stamp">
                {project.stamp.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
