export default function Experience() {
  const jobs = [
    {
      company: "Sharp Gurus Informatics Pvt. Ltd.",
      role: "Intern",
      dates: "Jun 2026 — Dec 2026",
      place: "Hybrid",
      live: "In Progress",
      bullets: [
        "Working as an intern under a Project Manager on technology-driven projects.",
        "Six-month internship with hands-on exposure to professional software and project environments."
      ]
    },
    {
      company: "Havells Innovation Cell",
      role: "BLE 5.4+ Developer",
      dates: "2025 — Present",
      place: "Bengaluru, India",
      live: "Ongoing",
      bullets: [
        "Worked with Bluetooth Low Energy (BLE) 5.4+ and Periodic Advertising with Responses (PAwR) for smart-home and IoT control systems.",
        "Contributed to testing, debugging, optimization, and reliability improvement of BLE-based systems.",
        "Team Winner — recognized for identifying the maximum number of critical bugs during evaluation."
      ]
    },
    {
      company: "GeeksforGeeks",
      role: "Campus Mantri / Internship",
      dates: "2025 — Present",
      place: "Bengaluru, India",
      live: "Ongoing",
      bullets: [
        "Contributing to strengthening the technical and coding culture at DSCE.",
        "Involved in coding contests, workshops, hackathons, community initiatives, and student outreach."
      ]
    },
    {
      company: "ISRO Student Satellite Program",
      role: "Research Associate",
      dates: "2025 — Present",
      place: "Bengaluru, India",
      live: "Ongoing",
      bullets: [
        "Working on onboard data systems and telemetry-related design and development.",
        "Contributing to testing modules for power distribution and communication payload integration."
      ]
    },
    {
      company: "NT Medical Electronics",
      role: "Research Intern",
      dates: "2025 — Present",
      place: "Bengaluru, India",
      live: "Ongoing",
      bullets: [
        "Working on fetal anomaly detection and biomedical signal analysis.",
        "Exploring machine learning approaches for real-time fetal monitoring and early anomaly prediction."
      ]
    },
    {
      company: "Social Freelancing Work",
      role: "Freelancer",
      dates: null,
      place: "Remote",
      live: null,
      bullets: [
        "Undertaking independent technology and digital projects through social and freelance networks."
      ]
    }
  ]

  return (
    <section id="record" className="record">
      <div className="inner">
        <div className="eyebrow reveal">
          <span className="num">§04</span> Service Record <span className="rule"></span> <span>Experience log</span>
        </div>

        {jobs.map((job) => (
          <div className="tl-item reveal" key={job.company}>
            <div className="when">
              {job.dates && <div className="dates">{job.dates}</div>}
              {job.live && (
                <div className="live">
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#fff', display: 'inline-block' }}></span>
                  {job.live}
                </div>
              )}
              <div className="place">{job.place}</div>
            </div>
            <div>
              <h3>{job.company}</h3>
              <div className="who">{job.role}</div>
              <ul>
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
