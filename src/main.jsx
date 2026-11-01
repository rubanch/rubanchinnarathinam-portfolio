import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { profile, skills, experience, projects, recognition } from './data';
import './styles.css';
import icon from "../asset/portfolio-icon.svg";

function App() {
  const [filter, setFilter] = useState('All'),
    [open, setOpen] = useState(false);
  const filters = ['All', ...new Set(projects.flatMap((p) => p.stack))],
    shown = filter === 'All' ? projects : projects.filter((p) => p.stack.includes(filter));
  return (
    <>
      <header>
        <div className="container bar">
          <a className="brand" href="#home">
            <img src={icon} alt="" className="navbar-icon" />
            {profile.name}
          </a>
          <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <X /> : <Menu />}
          </button>
          <nav className={open ? 'open' : ''}>
            <a href="#work" onClick={() => setOpen(false)}>
              Work
            </a>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="#experience" onClick={() => setOpen(false)}>
              Experience
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main id="home">
        <section className="hero container">
          <p className="eyebrow">
            {profile.role} · {profile.location}
          </p>
          <h1>{profile.intro}</h1>
          <p className="lead">{profile.bio}</p>
          <p className="status">● {profile.availability}</p>
          <div className="links">
            <a href={profile.github}>
              <Github /> GitHub
            </a>
            <a href={profile.linkedin}>
              <Linkedin /> LinkedIn
            </a>
            <a href={'mailto:' + profile.email}>
              <Mail /> Email
            </a>
          </div>
        </section>
        <section id="work" className="section container">
          <p className="eyebrow">MY WORK</p>
          <h2>Selected projects</h2>
          <p className="sub">A selection of client and prototype projects showcasing my full-stack development work.</p>
          <div className="filters">
            {filters.map((x) => (
              <button
                className={filter === x ? 'selected' : ''}
                onClick={() => setFilter(x)}
                key={x}
              >
                {x}
              </button>
            ))}
          </div>
          <div className="grid">
            {shown.map((p) => (
              <article className="card" key={p.title}>
                <small>
                  {p.number} · {p.type} · {p.year}
                </small>
                <h3>{p.title}</h3>
                <p className="project-role">
  <strong>My role:</strong> {p.role}
</p>

                <p>{p.description}</p>
                <div className="project-outcome">
  <strong>Outcome</strong>
  <p>{p.impact}</p>
</div>
                <div className="tags">
                  {p.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                {p.url && (
                  <a href={p.url}>
                    View project <ArrowUpRight />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>
        <section id="about" className="section pale">
          <div className="container">
            <p className="eyebrow">ABOUT</p>
            <h2>My Expertise</h2>
            <p className="sub">
               Driven by a deep curiosity for how software works, I bring careful problem-solving and a commitment to quality to every project.
            </p>
            <div className="skills">
              {skills.map((s) => (
                <article key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.items.join(' · ')}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="experience" className="section container">
          <p className="eyebrow">EXPERIENCE</p>
          <h2>My journey</h2>
          <div className="jobs">
            {experience.map((j) => (
              <article key={j.period}>
                <small>{j.period}</small>
                <div>
                  <h3>{j.role}</h3>
                  <p className="company">
                    {j.company} · {j.location}
                  </p>
                  <p>{j.summary}</p>
                  <ul>
                    {j.points.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
       {/*section for recognition*/} 
        {/* <section className="section pale">
          <div className="container award">
            <div>
              <p className="eyebrow">RECOGNITION</p>
              <h2>Learning along the way</h2>
            </div>
            <article>
              <small>
                {recognition.issuer} · {recognition.year}
              </small>
              <h3>{recognition.name}</h3>
              <p>{recognition.note}</p>
              {recognition.url && (
                <a href={recognition.url}>
                  View credential <ArrowUpRight />
                </a>
              )}
            </article>
          </div>
        </section> */}
        <section id="contact" className="section container">
          <p className="eyebrow">CONTACT</p>
          <h2>Let’s work together.</h2>
          <p className="sub">
            {profile.availability}. Feel free to email me about a project or opportunity.
          </p>
          <a className="email" href={'mailto:' + profile.email}>
            <Mail />
            {profile.email}
            <ArrowUpRight />
          </a>
          <p>
            <a href="#experience">Résumé / experience</a>
          </p>
        </section>
      </main>
      <footer>
        <div className="container foot">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
createRoot(document.getElementById('root')).render(<App />);
