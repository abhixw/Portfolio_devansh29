export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-top reveal">
        <span className="pill">
          <span className="pill-dot"></span> <b>Open to internships &amp; research</b>
        </span>
        <span className="pill">AI/ML · IoT · Innovation</span>
        <span className="pill">Bengaluru, IN</span>
      </div>

      <div className="bento">
        <div className="bento-cell sidebar reveal">
          <h1 className="hero-h1">
            AI/ML Engineer
            <br />
            <em>&amp; Innovator</em>
          </h1>
          <p className="hero-lead">
            I build <b>AI-driven systems</b> and <b>hardware innovations</b> — from patent-filed EV aerodynamics to satellite telemetry and wearable health platforms.
          </p>
          <div className="hero-stat-row">
            <div className="hero-stat-chip">
              <b>9.4</b>/10 <span>CGPA · DSCE '27</span>
            </div>
          </div>
          <div className="hero-quote">
            <div className="hero-quote-label">
              <span className="star">✦</span> CURRENTLY
            </div>
            <p>
              Open to internships &amp; research collaborations in AI, IoT, and sustainable tech. Based in Bengaluru — turning hackathon wins into patent-filed products.
            </p>
          </div>
          <div className="hero-cta">
            <a className="btn fill" href="#work">
              View Field Work <span className="ar">→</span>
            </a>
            <a className="btn ghost" href="/Devansh_Goyal_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Résumé
            </a>
          </div>
        </div>

        <div className="bento-cell panel1 reveal">
          <div className="panel-num">01</div>
          <h3>AI &amp; Machine Learning</h3>
          <p>Applying ML to biomedical signals, wearable health data, and real-time anomaly detection.</p>
        </div>

        <div className="bento-cell photo reveal">
          <img src="/devansh.jpg" alt="Devansh Goyal" />
          <div className="photo-caption">
            <b>Devansh Goyal</b>
            <span>AI/ML Engineer &amp; Innovator</span>
          </div>
        </div>

        <div className="bento-cell stats reveal">
          <span className="stats-label">Facts &amp; numbers</span>
          <div className="stats-num">
            9.4<small>/10</small>
          </div>
          <p>CGPA — B.Tech AI &amp; ML, DSCE</p>
        </div>

        <div className="bento-cell media reveal">
          <div className="achievement">
            <span className="achievement-icon">🏆</span>
            <h4>Military Monitoring &amp; Safe Zone Mapping</h4>
            <p>1st Place — Defense Innovation Hackathon 2025</p>
          </div>
        </div>

        <div className="bento-cell panel3 reveal">
          <h3>Space &amp; Biomedical Research</h3>
          <p>Contributing to ISRO satellite telemetry systems and AI-driven fetal health monitoring.</p>
        </div>

        <div className="bento-cell graphic reveal">
          <div className="achievement">
            <span className="achievement-icon">🔋</span>
            <h4>AeroDrive — EV Aerodynamics</h4>
            <p>Patent Filed · Innovation Challenge Finalist</p>
          </div>
        </div>

        <div className="bento-cell panel2 reveal">
          <div className="panel-num">02</div>
          <h3>IoT &amp; Embedded Systems</h3>
          <p>BLE 5.4+, Raspberry Pi, and embedded hardware for smart, sustainable systems.</p>
        </div>

        <div className="bento-cell contact reveal">
          <div>
            <h3>Let's build something.</h3>
            <p>No pressure, just a thoughtful chat — reach out anytime.</p>
          </div>
          <a className="contact-arrow" href="#contact" aria-label="Go to contact section">
            ↗
          </a>
        </div>
      </div>

      <div className="social reveal">
        <a href="https://github.com/DevanshGoyal29" target="_blank" rel="noopener noreferrer">
          <span>GitHub</span>
          <span className="k">DevanshGoyal29 ↗</span>
        </a>
        <a href="https://www.linkedin.com/in/devansh-goyal-explorer/" target="_blank" rel="noopener noreferrer">
          <span>LinkedIn</span>
          <span className="k">devansh-goyal-explorer ↗</span>
        </a>
        <a href="mailto:devanshgoyal224@gmail.com">
          <span>Email</span>
          <span className="k">devanshgoyal224@gmail.com ↗</span>
        </a>
      </div>
    </section>
  )
}
