import './App.css'

function App() {
  const profile = {
    name: 'Shiva Kumar',
    title: 'Frontend Developer',
    location: 'India',
    email: 'shivakumar.dev@email.com',
    about:
      'I build clean, responsive web experiences focused on performance, usability, and visual polish.',
    linkedin: 'https://www.linkedin.com/in/shiva-kumar',
    github: 'https://github.com/shiva-kumar',
  }

  const skills = [
    'React',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Git & GitHub',
  ]

  const projects = [
    {
      name: 'Stone Paper Game',
      description:
        'A fast and interactive rock-paper-scissors game with smooth UI feedback and score tracking.',
      tech: 'HTML, CSS, JavaScript',
      link: '#',
    },
    {
      name: 'Personal Portfolio',
      description:
        'A modern portfolio site built with React and Vite to present projects, skills, and contact details.',
      tech: 'React, Vite, CSS',
      link: '#',
    },
    {
      name: 'Landing Page UI',
      description:
        'A responsive landing page with reusable components and mobile-first layout behavior.',
      tech: 'React, Tailwind CSS',
      link: '#',
    },
  ]

  return (
    <main className="portfolio">
      <section className="hero">
        <p className="eyebrow">PORTFOLIO</p>
        <h1>{profile.name}</h1>
        <p className="role">{profile.title}</p>
        <p className="intro">{profile.about}</p>
        <div className="cta-row">
          <a href={`mailto:${profile.email}`} className="btn primary">
            Contact Me
          </a>
          <a href="#projects" className="btn secondary">
            View Projects
          </a>
        </div>
      </section>

      <section className="card about">
        <h2>About</h2>
        <p>
          I am based in {profile.location} and enjoy turning ideas into
          practical, user-friendly web interfaces. I focus on accessible
          components, performance, and maintainable code.
        </p>
      </section>

      <section className="card skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="card projects" id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-item">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p className="tech">{project.tech}</p>
              <a href={project.link}>Open Project</a>
            </article>
          ))}
        </div>
      </section>

      <section className="card contact">
        <h2>Contact</h2>
        <p>Want to collaborate on a project? Let&apos;s connect.</p>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
